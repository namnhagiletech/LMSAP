import { gql } from '@apollo/client';

export const AI_TEST_RESULT = gql`
  query AI_TEST_RESULT($skip: Int, $take: Int) {
    aiTestResult(skip: $skip, take: $take) {
      aiTests {
        createdAt
        point
      }
      total
    }
  }
`;
