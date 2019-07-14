import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

export const mutation = gql`
  mutation UpdateBossOne($_id: MongoID!, $killedTime: Date ) {
    updateBossOne(record: { _id: $_id, killedTime: $killedTime }) {
      record {
        name
      }
    }
  }
`;

export default () => {
  let [ updateBoss ] = useMutation(mutation);
  return updateBoss;
};