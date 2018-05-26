import React from 'react';
import styled from 'styled-components';

import { vars } from 'app/variables';

import Menu from 'app/components/MainMenu';

import IconHome from 'material-ui/svg-icons/action/home';
import IconStorage from 'material-ui/svg-icons/device/storage';
import IconGroup from 'material-ui/svg-icons/social/group';
import IconSum from 'material-ui/svg-icons/editor/functions';
import IconRespawn from 'material-ui/svg-icons/action/alarm';

const iconProps = {
  color: 'currentColor',
  style: {
    width: '1rem',
    height: '1rem',
    margin: `0 ${vars.gap.g2}`,
    color: 'inherit',
  }
};

const MenuList = [
  {
    name: 'Home',
    icon: <IconHome {...iconProps} />,
    url: '/',
  },
  {
    name: 'Base',
    icon: <IconStorage {...iconProps} />,
    url: '/base',
  },
  {
    name: 'Clan',
    icon: <IconGroup {...iconProps} />,
    url: '/clan',
  },
  {
    name: 'Calculators',
    icon: <IconSum {...iconProps} />,
    url: '/calculator',
  },
  {
    name: 'Respawn',
    icon: <IconRespawn {...iconProps} />,
    url: '/respawn',
  },

];

const Wrapper = styled.aside`
  width: ${vars.custom.aside};
  height: calc(100vh - 4rem);
  background-color: ${vars.colors.main}12;
  padding: ${vars.gap.g3};
`;

class Header extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <Menu menu={MenuList} />
      </Wrapper>
    );
  }
}

export default Header;
