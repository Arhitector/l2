import React from 'react';
import styled from 'styled-components';
import { get, compact, size } from 'lodash';
import { vars } from 'app/variables';

import Header from './components/Header';
import Side from './components/Side';
import IconHome from 'material-ui/svg-icons/action/home';
import IconStorage from 'material-ui/svg-icons/device/storage';
import IconGroup from 'material-ui/svg-icons/social/group';
import IconSum from 'material-ui/svg-icons/editor/functions';
import IconRespawn from 'material-ui/svg-icons/action/alarm';
import AddRB from 'material-ui/svg-icons/av/library-add';

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: ${vars.colors.primary};
  display: flex;
  flex-wrap: wrap;
  background: ${vars.colors.primary} url("http://byrushan.com/projects/super-admin/app/2.1.2/img/bg/1.jpg");
  background-size: 100% 100%;
  color: ${vars.colors.opposite};
  /* background: radial-gradient(60% 100% ellipse at 65% 100%, #4d171b 0%, #4d171b 45%, #cc4734 60%, #DE8657 65%, #f49754 70%, transparent), ${vars.colors.primary}; */
`;
const Content = styled.main`
  flex-grow: 1;
  padding: 2rem;
`;

const iconProps = {
  color: 'currentColor',
  style: {
    width: '1rem',
    height: '1rem',
    margin: `0 ${vars.gap.g2}`,
    color: 'inherit',
  },
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
    headermenu: [
      {
        icon: <AddRB {...iconProps} />,
        url: '/respawn/mutation-boss',
      },
    ],
  },
];

class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerMenu: [],
    };

    this.handleMenu = this.handleMenu.bind(this);
  }

  componentDidMount() {
    this.handleMenu();
  }

  handleMenu() {
    const { location } = this.props;
    const loc = get(location, 'pathname');
    const locArray = loc && compact(loc.split('/'));
    const res = [];
    let searchArray = MenuList;
    locArray && locArray.forEach((item, index) => {
      const result = searchArray.find((itemObj) => {
        const compareItem = compact(itemObj.url.split('/'));
        return compareItem[index] === item;
      });
      const menu = get(result, 'headermenu');
      res.push(menu);
      menu && (searchArray = menu);
    });
    const displayMenu = compact(res.reverse());
    !!size(displayMenu) && this.setState({ headerMenu: displayMenu[0] });
  }

  render() {
    const { headerMenu } = this.state;
    return (
      <Wrapper>
        <Header
          headerMenu={headerMenu}
        />
        <Side
          MenuList={MenuList}
        />
        <Content>
          {React.Children.toArray(this.props.children)}
        </Content>
      </Wrapper>
    );
  }
}

export default Base;
