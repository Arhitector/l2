import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

export const query = gql`
  {
    bossesMany ( sort: _ID_ASC ) {
      _id
      name
      respawnStartTime
      respawnEndTime
      killedTime
    }
  }
`;

export default ({ ...params }) => useQuery(query, { variables: params } );