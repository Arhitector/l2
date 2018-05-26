import React from 'react';
import { browserHistory } from 'react-router';
import { vars } from 'app/variables';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled.div`
  width: 100%;
  color: ${vars.colors.opposite}70;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  height: 3rem;
  &:hover {
    background-color: ${vars.colors.opposite}08;
    color: ${vars.colors.opposite};
  }
`;


class MainMenu extends React.PureComponent {
  render() {
    const { menu } = this.props;
    return (
        <Nav>
          {
            menu && menu.map(item => (
              <MenuItem onClick={() => browserHistory.push(item.url)} >{item.icon}{item.name}</MenuItem>
            ))
          }
        </Nav>
    );
  }
}

export default MainMenu;
