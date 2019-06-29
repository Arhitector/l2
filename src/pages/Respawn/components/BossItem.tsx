import React, { useEffect, useState, useReducer } from 'react';
import styled from '@emotion/styled';
import moment from 'moment';

import Card from 'src/components/Card';
import RespawnLine from './RespawnLine';
import Indicator from './Indicator';
import { colors } from 'src/variables';
import { stat } from 'fs';

const RESPAWN_WAIT = 'RESPAWN_WAIT';
const RESPAWN_IS_GOIN = 'RESPAWN_IS_GOIN';
const RESPAWN_END = 'RESPAWN_END';

const StyledCard = styled(Card)({
  flex: '1 0 300px',
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

const initialState = {
  hintMessage: '',
  bgColor: '',
  showRespawnLine: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case RESPAWN_WAIT:
      return {
        hintMessage: 'respawnMessages.waitForRespawn',
        bgColor: colors.expect,
        showRespawnLine: false,
      };
    case RESPAWN_IS_GOIN:
      return {
        hintMessage: 'respawnMessages.respawnInProcess',
        bgColor: colors.success,
        showRespawnLine: true,
      };
    case RESPAWN_END:
      return {
        hintMessage: 'respawnMessages.respawnWasEnded',
        bgColor: colors.error,
        showRespawnLine: false,
      };
    default:
      return state;
  }
};

const BossesItem = ({boss}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const respawnStart = moment(boss.killedTime).add(boss.respawnStartTime, 'h');
  const respawnEnd = moment(boss.killedTime).add(boss.respawnEndTime, 'h');
  const isRespawn = moment().isBetween(respawnStart, respawnEnd);
  const IsRespawnEnd = moment().isAfter(respawnEnd);

  useEffect(() => {
    if(isRespawn) {
      dispatch({ type: RESPAWN_IS_GOIN });
    } else if (IsRespawnEnd) {
      dispatch({ type: RESPAWN_END });
    } else {
      dispatch({ type: RESPAWN_WAIT });
    }

    isRespawn && setTimeout(
      () => dispatch({ type: RESPAWN_END }),
      moment(respawnEnd).diff(moment())
    );
  }, []);
  
  const { bgColor, showRespawnLine, hintMessage } = state;
  return (<StyledCard >
    <h3>{boss.name} <Indicator bgColor={bgColor} hintMessage={hintMessage} /></h3>
    { IsRespawnEnd && <div>Killed by:</div> }
    <RespawnDates><span>{respawnStart.format('D MMM H:mm')}</span><span>{respawnEnd.format('D MMM H:mm')}</span></RespawnDates>
    { showRespawnLine &&  <RespawnLine respawnStart={respawnStart} respawnEnd={respawnEnd} /> }
  </StyledCard>);
};

export default BossesItem;