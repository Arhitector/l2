import React from 'react';
import styled from 'styled-components';

import { custom, colors, gap } from 'src/variables';
import Menu from 'src/components/MainMenu';

import { menuList } from 'pages/Base/index';

const Wrapper = styled.aside`
  width: ${custom.aside};
  height: calc(100vh - 4rem);
  background-color: ${colors.main}12;
  padding: ${gap.g3};
`;

interface Props {
  menuList: menuList,
};

const Side: React.FC<Props> = ({menuList}) => {
  return (
    <Wrapper>
      <Menu menu={menuList} />
    </Wrapper>
  );
};

export default Side;
