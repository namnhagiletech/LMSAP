import { gql } from '@apollo/client';

export const GET_STATISTIC = gql`
  query {
    questionAiSelfStatistic {
      createdAt
      deletedAt
      id
      rank
      subjectId
      subjectName
      totalCorrect
      totalInCorrect
      totalQuestion
      updatedAt
    }
  }
`;
