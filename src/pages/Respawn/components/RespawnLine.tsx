import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import moment from 'moment';

import { colors } from 'src/variables';

const Line = styled.hr`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 4px;
  margin: 0;
  border: none;
  background-color: ${colors.success};
  transform: scale(${(props: { percent: number }) => props.percent }, 1);
  transform-origin: left;
  transition: transform 300ms ease-in-out;
`;

const RespawnLine = ({ respawnStart, respawnEnd }) => {
  const [diffPercent, setDiffPercent] = useState(0);
  const handleDiffPercent = () => {
    const diffStartEnd = respawnEnd.diff(respawnStart);
    const diffStartNow = moment().diff(respawnStart);

    return setDiffPercent(diffStartNow/diffStartEnd);
  };

  useEffect(() => {
    handleDiffPercent();
    const timerId  =
      setInterval(
        () => handleDiffPercent(),
        respawnEnd.diff(respawnStart)/100
      );
    return () => clearTimeout(timerId);
  }, []);
  return <Line percent={diffPercent} /> 
};

export default RespawnLine;