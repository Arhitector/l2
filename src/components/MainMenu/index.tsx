import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from 'src/variables';

import { menuList } from 'pages/Base/index';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled(Link)`
  width: 100%;
  color: ${colors.opposite}70;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  height: 3rem;
  &:hover {
    background-color: ${colors.opposite}08;
    color: ${colors.opposite};
  }
`;


interface Props {
  menu: any
};

const MainMenu: React.FC<Props> = ({ menu }) => {
  if( menu ) null;
  return (
      <Nav>
        {
          menu.map(item => (
            <MenuItem to={item.src} >
              {item.icon}{item.name}
            </MenuItem>
          ))
        }
      </Nav>
  );
};

export default MainMenu;
