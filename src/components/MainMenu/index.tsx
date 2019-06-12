import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from 'src/variables';

import { menuList } from 'pages/Base/menu';

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
};

const MainMenu: React.FC<Props> = () => {
  if( menuList ) null;
  return (
      <Nav>
        {
          menuList.map((item, index) => (
            <MenuItem to={item.url} key={index} >
              {item.icon}{item.name}
            </MenuItem>
          ))
        }
      </Nav>
  );
};

export default MainMenu;
