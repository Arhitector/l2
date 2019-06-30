import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

export const query = gql`
  {
    bossConnection ( sort: _ID_ASC ) {
      edges {
        node {
          name
          respawnStartTime
          respawnEndTime
          killed
        }
      }
    }
  }
`;

export default ({ ...params }) => useQuery(query, { variables: params } );