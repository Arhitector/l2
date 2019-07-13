import React, { useEffect, useState, useReducer } from 'react';
import styled from '@emotion/styled';
import moment from 'moment';

import Card from 'src/components/Card';
import RespawnLine from './RespawnLine';
import Indicator from './Indicator';
import Button from 'components/Button';
import updateBossMutation from '../UpdateBossMutation';

import { colors } from 'src/variables';

const StyledCard = styled(Card)({
  flex: '1 0 250px',
  flexDirection: 'column',
  margin: '15px',
  h3: {
    display: 'flex',
    justifyContent: 'space-between',
  }
});

const RespawnDates = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

const status = {
  wait: {
    hintMessage: 'respawnMessages.waitForRespawn',
    bgColor: colors.warning,
    showRespawnLine: false,
  },
  isGoing: {
    hintMessage: 'respawnMessages.respawnInProcess',
    bgColor: colors.success,
    showRespawnLine: true,
  },
  end: {
    hintMessage: 'respawnMessages.respawnWasEnded',
    bgColor: colors.danger,
    showRespawnLine: false,
  },
}

const BossesItem = ({ boss }) => {
  console.log('BossesItem');
  
  const respawnStart = moment(boss.killedTime).add(boss.respawnStartTime, 'h');
  const respawnEnd = moment(boss.killedTime).add(boss.respawnEndTime, 'h');
  const isRespawn = moment().isBetween(respawnStart, respawnEnd);
  const IsRespawnEnd = moment().isAfter(respawnEnd);
  const initState = isRespawn && status.isGoing || IsRespawnEnd && status.end || status.wait;
  const [state, setState] = useState(initState);

  let updateBoss = updateBossMutation();

  useEffect(() => {

    isRespawn && setTimeout(
      () => setState(status.end),
      moment(respawnEnd).diff(moment())
    );
  }, []);

  const handleKillBoss = () => updateBoss({
    variables: {
      _id: boss._id,
      killedTime: new Date(),
    }
  });

  const handleTrackBoss = () => {
    
  };
  
  const { bgColor, showRespawnLine, hintMessage } = state;
  return (<StyledCard >
    <h3>{boss.name} <Indicator bgColor={bgColor} hintMessage={hintMessage} /></h3>
    <div>
    { IsRespawnEnd && <div>Killed by:</div> }
    <Button primary onClick={handleKillBoss} >Killed</Button>
    <Button primary onClick={handleTrackBoss} >track boss</Button>
    </div>
    <RespawnDates><span>{respawnStart.format('D MMM H:mm')}</span><span>{respawnEnd.format('D MMM H:mm')}</span></RespawnDates>
    { showRespawnLine &&  <RespawnLine respawnStart={respawnStart} respawnEnd={respawnEnd} /> }
  </StyledCard>);
};

export default BossesItem;