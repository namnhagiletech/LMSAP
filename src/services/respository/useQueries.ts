import { gql } from "@apollo/client";

export const GET_INFO = gql`
  query Me {
    me {
      id
    }
  }
`;
