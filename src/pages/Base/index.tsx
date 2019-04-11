import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { get, compact, size } from 'lodash';
import { colors, gap } from '../../variables';

import Header from './components/Header';
import Side from './components/Side';
// import IconHome from 'material-ui/svg-icons/action/home';
// import IconStorage from 'material-ui/svg-icons/device/storage';
// import IconGroup from 'material-ui/svg-icons/social/group';
// import IconSum from 'material-ui/svg-icons/editor/functions';
// import IconRespawn from 'material-ui/svg-icons/action/alarm';
// import AddRB from 'material-ui/svg-icons/av/library-add';
export interface menuList {
  name: string,
  url: string,
  headermenu?: [
    {
      url: string,
    }
  ]
};
interface Props {
  location?: any,
};


const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.primary};
  display: flex;
  flex-wrap: wrap;
  background: ${colors.primary} url("http://byrushan.com/projects/super-admin/app/2.1.2/img/bg/1.jpg");
  background-size: 100% 100%;
  color: ${colors.opposite};
  /* background: radial-gradient(60% 100% ellipse at 65% 100%, #4d171b 0%, #4d171b 45%, #cc4734 60%, #DE8657 65%, #f49754 70%, transparent), ${colors.primary}; */
`;
const Content = styled.main`
  flex-grow: 1;
  padding: 2rem;
`;

// const iconProps = {
//   color: 'currentColor',
//   style: {
//     width: '1rem',
//     height: '1rem',
//     margin: `0 ${gap.g2}`,
//     color: 'inherit',
//   },
// };

const menuList: any = [
  {
    name: 'Home',
    // icon: <IconHome {...iconProps} />,
    url: '/',
  },
  {
    name: 'Base',
    // icon: <IconStorage {...iconProps} />,
    url: '/base',
  },
  {
    name: 'Clan',
    // icon: <IconGroup {...iconProps} />,
    url: '/clan',
  },
  {
    name: 'Calculators',
    // icon: <IconSum {...iconProps} />,
    url: '/calculator',
  },
  {
    name: 'Respawn',
    // icon: <IconRespawn {...iconProps} />,
    url: '/respawn',
    headermenu: [
      {
        // icon: <AddRB {...iconProps} />,
        url: '/respawn/mutation-boss',
      },
    ],
  },
];

const Base: React.FC<Props> = ({ location, children }) => {
  const [headerMenu, setHeaderMenu] = useState([]);

  const handleHandleMenu = () => {
    setHeaderMenu([]);
  }

  useEffect(() => {
    handleHandleMenu();
  }, []);
  return (
    <Wrapper>
      <Header
        headerMenu={headerMenu}
      />
      <Side
        menuList={menuList}
      />
      <Content>
        {React.Children.toArray(children)}
      </Content>
    </Wrapper>
  );
};

export default Base;
