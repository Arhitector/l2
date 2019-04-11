import React from 'react';
import styled from 'styled-components';

import { colors, gap, custom } from 'src/variables';
import Menu from 'components/MainMenu';

import { menuList } from 'pages/Base/index';

const Wrapper = styled.header`
  background-color: ${colors.main}30;
  display: flex;
  width: 100%;
  height: 4rem;
  padding: ${gap.g3};
`;

const Side = styled.aside`
  width: calc(${custom.aside} - ${gap.g3});
  height: 100%;
  padding-right: ${gap.g3};
  box-sizing: border-box;
`;

interface Props {
  headerMenu: any,
};

const Header: React.FC<Props> = ({ headerMenu }) => {
  return (
    <Wrapper>
      <Side />
      header
      <Menu menu={headerMenu} />
      <div>{}</div>
    </Wrapper>
  );
};

export default Header;
