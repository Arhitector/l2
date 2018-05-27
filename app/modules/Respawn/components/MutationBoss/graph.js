import gql from 'graphql-tag';
// import fragments from 'app/Graph/Fragments';

export const ADD_BOSS = gql`
  mutation addBoss($raidBoss: RaidBossInput){
    addBoss(raidBoss: $raidBoss) {
      _id
      name
    }
  }
`;
export const UPDATE_BOSS = gql`
  mutation updateBoss($raidBoss: RaidBossInput){
    updateBoss(raidBoss: $raidBoss) {
      _id
      name
    }
  }
`;

export const RB_BY_ID_QUERY = gql`
query getBossById($id: String!) {
    getBossById(id: $id) {
      _id
      gameId
      name
      description
      guards
      drop
      spoil
      respawnTime
      race
    }
  }
`;
