import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import BossItem from './BossItem';

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
`;

const list = [
  {
    name: 'Boss1',
    killedTime: '2019-06-29T22:09:00.000',
    respawnStartTime: 0.1,
    respawnEndTime: 0.2,
  },
  {
    name: 'Boss2',
    killedTime: '2019-06-09T14:13:00.000',
    respawnStartTime: 4,
    respawnEndTime: 6,
  },
  {
    name: 'Boss3',
    killedTime: '2019-06-18T20:13:00.000',
    respawnStartTime: 8,
    respawnEndTime: 12,
  },
  {
    name: 'Boss4',
    killedTime: '2019-06-28T18:13:00.000',
    respawnStartTime: 24,
    respawnEndTime: 34,
  },
  {
    name: 'Boss5',
    killedTime: '2019-06-28T23:20:00.000',
    respawnStartTime: 4,
    respawnEndTime: 16,
  },
  {
    name: 'Boss6',
    killedTime: '2019-06-26T20:13:00.000',
    respawnStartTime: 72,
    respawnEndTime: 76,
  },
  {
    name: 'Boss7',
    killedTime: '2019-06-22T17:02:00.000',
    respawnStartTime: 168,
    respawnEndTime: 174,
  },
  {
    name: 'Boss8',
    killedTime: '2019-06-28T20:13:00.000',
    respawnStartTime: 168,
    respawnEndTime: 174,
  },
];

const BossesList = () => (<List>
  {
    list.map((boss, index) => <BossItem key={index} boss={boss} />)
  }
</List>);

export default BossesList;