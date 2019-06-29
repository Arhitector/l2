import React from 'react';
import styled from '@emotion/styled';

import { colors, gap, custom } from 'src/variables';

const Wrapper = styled.header`
  grid-area: header;
  display: grid;
  grid-template: 'headerSide headerMain headerMenu';
  grid-template-columns: ${custom.aside} 1fr ${custom.aside};
  background-color: ${colors.main}30;
  padding: ${gap.g3};
`;

const Side = styled.aside`
  grid-area: headerSide;
  padding-right: ${gap.g3};
  box-sizing: border-box;
`;

const Content = styled.div`
  grid-area: headerMain;
`;
const StyledMenu = styled.div`
  grid-area: headerMenu;
`;

interface Props {
};

const Header: React.FC<Props> = () => {
  return (
    <Wrapper>
      <Side />
      <Content>header</Content>
      <StyledMenu />
    </Wrapper>
  );
};

export default Header;
