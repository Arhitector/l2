import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

export const query = gql`
  {
    bossById(_id: "5af71e41c22b6f1156bed76a") {
      name
    }
  }
`;

export default () => useQuery(query);