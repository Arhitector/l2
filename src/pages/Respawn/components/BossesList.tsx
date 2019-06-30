import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import BossItem from './BossItem';

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
`;

const BossesList = ({ bossesList }) => (<List>
  {bossesList.map((boss, index) => <BossItem key={index} boss={boss.node} />)}
</List>);

export default BossesList;