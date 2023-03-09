import { gql } from '@apollo/client';

export const GET_INFO = gql`
  query Me {
    me {
      class {
        name
        schoolYear {
          year
        }
      }
      classId
      email
      fullName
      id
      identityNumber
      isStatistical
      school {
        name
      }
      schoolFaculty {
        name
      }
      schoolYear {
        id
        year
      }
      schoolYearId
      status
    }
  }
`;
