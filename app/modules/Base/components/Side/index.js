import React from 'react';
import styled from 'styled-components';

import { vars } from 'app/variables';

import Menu from 'app/components/MainMenu';

const Wrapper = styled.aside`
  width: ${vars.custom.aside};
  height: calc(100vh - 4rem);
  background-color: ${vars.colors.main}12;
  padding: ${vars.gap.g3};
`;

class Header extends React.PureComponent {
  render() {
    const { MenuList } = this.props;
    return (
      <Wrapper>
        <Menu menu={MenuList} />
      </Wrapper>
    );
  }
}

export default Header;
