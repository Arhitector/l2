import React from 'react';
import styled from 'styled-components';

import { vars } from 'app/variables';

import Header from './components/Header';
import Side from './components/Side';

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

class Base extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <Header />
        <Side />
        <Content>
          {React.Children.toArray(this.props.children)}
        </Content>
      </Wrapper>
    );
  }
}

export default Base;
