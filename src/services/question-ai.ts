import { gql } from '@apollo/client';

export const GET_SUBJECTS = gql`
  query GET_SUBJECTS {
    subjects {
      id
      name
    }
  }
`;

export const GET_QUESTION_AI = gql`
  query GetQuestionAi {
    getQuestionAi {
      accountId
      description
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

export const GET_QUESTION_AI_BY_SUBJECT = gql`
  query GetQuestionAiBySubject($subjectId: String!) {
    getQuestionAiBySubject(data: { subjectId: $subjectId }) {
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

export const SUBMIT_QUESTION_AI = gql`
  mutation SubmitQuestionAnswer($data: SubmitQuestionAiInput!) {
    submitAnswerQuestionAi(data: $data) {
      id
      isCorrect
    }
  }
`;
