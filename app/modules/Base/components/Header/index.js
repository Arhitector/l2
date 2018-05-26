import React from 'react';
import styled from 'styled-components';

import { vars } from 'app/variables';

const Wrapper = styled.header`
  background-color: ${vars.colors.main}30;
  display: flex;
  width: 100%;
  height: 4rem;
  padding: ${vars.gap.g3};
`;

const Side = styled.aside`
  width: calc(${vars.custom.aside} - ${vars.gap.g3});
  height: 100%;
  padding-right: ${vars.gap.g3};
  box-sizing: border-box;
`;

class Header extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <Side />
        header
      </Wrapper>
    );
  }
}

export default Header;
