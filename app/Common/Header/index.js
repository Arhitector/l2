import React from 'react';
import styled from 'styled-components';

const HeaderWrap = styled.h1`
  line-height: 1.5rem;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0 0 1rem;
  color: #fff;
`;

class Header extends React.PureComponent {
  render() {
    const { title } = this.props;
    return (
      <HeaderWrap>{title}</HeaderWrap>
    );
  }
}

export default Header;
