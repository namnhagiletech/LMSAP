import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  gql,
  InMemoryCache,
  FetchResult,
  Observable,
  GraphQLRequest,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { GraphQLError } from "graphql";
import { LOCAL_STORAGE_KEY } from "../../../constants/LOCAL_STORAGE_KEY";

interface AccessToken {
  accessToken: string,
  refreshToken: string
}

const REFRESH_TOKEN_MUTATION = gql`
  mutation refreshTokens {
    refreshTokens {
      accessToken
      refreshToken
    }
  }
`;

function isRefreshRequest(operation: GraphQLRequest) {
  return operation.operationName === "refreshTokens";
}

function returnTokenDependingOnOperation(operation: GraphQLRequest) {
  if (isRefreshRequest(operation))
    return localStorage.getItem(LOCAL_STORAGE_KEY.REFRESH_TOKEN) || "";
  else return localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN) || "";
}

const httpLink = createHttpLink({
  uri: 'http://43.206.141.124:4000/graphql',
});

const authLink = setContext((operation, { headers }) => {
  let token = returnTokenDependingOnOperation(operation);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        switch (err.extensions.code) {
          case "UNAUTHENTICATED":
            if (operation.operationName === "refreshTokens") return;
            const observable = new Observable<FetchResult<Record<string, any>>>(
              (observer) => {
                (async () => {
                  try {
                    const accessToken = await refreshToken();

                    if (!accessToken) {
                      throw new GraphQLError("Empty AccessToken");
                    }
                    const oldHeaders = operation.getContext().headers;
                    operation.setContext({
                      headers: {
                        ...oldHeaders,
                        authorization: `Bearer ${accessToken}`,
                      },
                    });

                    const subscriber = {
                      next: observer.next.bind(observer),
                      error: observer.error.bind(observer),
                      complete: observer.complete.bind(observer),
                    };

                    forward(operation).subscribe(subscriber);
                  } catch (err) {
                    observer.error(err);
                  }
                })();
              }
            );

            return observable;
        }
      }
    }

    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  }
);

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "network-only",
      nextFetchPolicy: "cache-first",
    },
  },
});

const refreshToken = async () => {
  try {
    const refreshResolverResponse = await client.mutate<{
      refreshTokens: AccessToken;
    }>({
      mutation: REFRESH_TOKEN_MUTATION,
    });

    const accessToken = refreshResolverResponse.data?.refreshTokens.accessToken;
    const refreshToken = refreshResolverResponse.data?.refreshTokens.refreshToken;
    localStorage.setItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN, accessToken || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.REFRESH_TOKEN, refreshToken || "");

    return accessToken;
  } catch (err) {
    localStorage.clear();
    throw err;
  }
};

export default client;