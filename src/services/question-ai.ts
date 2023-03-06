import { gql } from '@apollo/client';

export const GET_QUESTION_AI = gql`
  query GetQuestionAi {
    getQuestionAi {
      accountId
      answer {
        explainImageOrVideo
        explainText
        id
        isCorrect
        questionId
        text
      }
      category {
        id
        name
      }
      categoryId

      chapterId
      id
      identityNumber
      level
      public

      schoolId
      status
      subjectId
      title
    }
  }
`;
