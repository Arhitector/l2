import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import BossItem from './BossItem';

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
`;

const BossesList = ({ bossesList }) => {
  console.log('RespawnList');
  return (<List>
  {bossesList.map((boss, index) => <BossItem key={index} boss={boss} />)}
</List>);
};

export default BossesList;