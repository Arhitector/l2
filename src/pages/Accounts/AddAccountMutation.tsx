import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

export const mutation = gql`
  mutation UpdateUser($_id: MongoID!, $accounts: [UsersUsersAccountsInput]) {
    updateUser(record: {_id: $_id, accounts: $accounts}) {
      record {
        _id
      } 
    }
  }
`;

export default () => {
  let [ updateUser ] = useMutation(mutation);
  return updateUser;
};