import gql from 'graphql-tag';
// import fragments from 'app/Graph/Fragments';

export const RB_QUERY = gql`
  {
    allBosses {
      _id
      name
      gameId
      guards
      drop
      spoil
      respawnTime
      killed
      race
    }
  }
`;
