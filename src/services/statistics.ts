import { gql } from '@apollo/client';

export type TSelfStatistic = {
  rank: 'A' | 'B' | 'C' | 'D' | 'E' | 'S';
  subjectId: string;
  subjectName: string;
  totalCorrect: number;
  totalInCorrect: number;
  totalQuestion: number;
};

export const GET_SELF_STATISTIC = gql`
  query {
    questionAiSelfStatistic {
      rank
      subjectId
      subjectName
      totalCorrect
      totalInCorrect
      totalQuestion
    }
  }
`;
