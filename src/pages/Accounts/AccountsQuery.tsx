/* tslint:disable */
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

// type Props = {
//   params?: any,
// };

export const query = gql`
  query UserById($_id: MongoID!) {
    userById(_id: $_id) {
      name
      accounts {
        login
        password
        description
        characters {
          name
          proffesions {
            class
            isMain
            level
            description
          }
        }
      }
    }
  }
`;

export default ({ _id }) => useQuery(query, {
  variables: {
    _id
  },
  // @ts-ignore: Unreachable code error
   suspend: true
} );