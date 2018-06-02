import gql from 'graphql-tag';
// import fragments from 'app/Graph/Fragments';

const unit = `
  _id
  lvl
  HP
  MP
  XP
  SP
  agr
  type
  range
  pAtk
  mAtk
  pDef
  mDef
  tAtk
  media
  gameId
  name
  description
  guards
  respawnTime
  race
`;

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

export const UPDATE_BOSS_SUBSCRIPTION = gql`
  subscription {
    updatedBoss {
      ${unit}
    }
  }
`;

export const RB_BY_ID_QUERY = gql`
query getBossById($id: String!) {
    getBossById(id: $id) {
      ${unit}
    }
  }
`;
