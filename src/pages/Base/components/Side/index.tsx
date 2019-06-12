import React from 'react';
import styled from 'styled-components';

import { custom, colors, gap } from 'src/variables';
import Menu from 'src/components/MainMenu';

const Wrapper = styled.aside`
  grid-area: side;
  background-color: ${colors.main}12;
  padding: ${gap.g3};
`;

interface Props {
};

const Side: React.FC<Props> = () => {
  return (
    <Wrapper>
      <Menu />
    </Wrapper>
  );
};

export default Side;
