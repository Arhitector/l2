import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

import { colors } from 'src/variables';

const Indicate = styled('span')`
  position: relative;
  display: inline-block;
  border-radius: 50%;
  width: 1em;
  height: 1em;
  background-color: ${(props: { bgColor: boolean | string; }) => props.bgColor || colors.warning};
  cursor: help;
`;

const Hint = styled('span')`
  position: absolute;
  top: 1em;
  right: 1em;
  z-index: 100;
  padding: 0.5rem 1.5rem;
  background-color: rgba(0,0,0,.96);
  box-shadow: 0 4px 18px rgba(0,0,0,.5);
  border-radius: 0.25em;
  white-space: nowrap;
`;

const Indicator = ({
  bgColor,
  hintMessage,
}) => {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState(false);
  
  const toogleMouseEventHandler = () => {
    setHovered(!hovered);
  };
  
  return (
    <Indicate
      bgColor={bgColor}
      onMouseEnter={toogleMouseEventHandler}
      onMouseLeave={toogleMouseEventHandler} 
    >
      { hovered && <Hint>{ t(hintMessage) }</Hint> }
    </Indicate>);
};

export default Indicator;