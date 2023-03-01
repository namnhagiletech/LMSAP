import { gql } from "@apollo/client";

export const signinMutation = gql`
  mutation SignIn($data: LoginInput!) {
    signIn(data: $data) {
      accessToken
      refreshToken
    }
  }
`;

export const sendCodeEmailMutation = gql`
  mutation SendCodeResetPassword($data: PasswordInput!) {
    sendCodeResetPassword(data: $data)
  }
`;

export const confirmCodeMutation = gql`
  mutation ValidateCode($data: ValidateResetCodeInput!) {
    validateCode(data: $data)
  }
`;

export const changePasswordMutation = gql`
  mutation ChangePassword($data: ChangePasswordInput!) {
    changePassword(data: $data)
  }
`;

export const logoutMutation = gql`
  mutation Logout($accountId: String!) {
    logout(accountId: $accountId) {
      loggedOut
    }
  }
`;

export const refreshTokenMutation = gql`
  mutation RefreshTokens {
    refreshTokens {
      accessToken
      refreshToken
    }
  }
`;
