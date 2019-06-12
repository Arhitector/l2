import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { get, compact, size } from 'lodash';
import { custom, colors } from 'src/variables';

import Header from './components/Header';
import Side from './components/Side';
import Footer from './components/Footer';
import { menuList }  from './menu';
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
  children: any,
};


const Wrapper = styled.div`
  display: grid;
  grid-template:
    'header header'
    'side main'
    'side footer';
  grid-template-rows: auto 1fr auto;
  grid-template-columns: ${custom.aside} 1fr;
  min-height: 100vh;

  background-color: ${colors.primary};
  background: ${colors.primary} url("http://byrushan.com/projects/super-admin/app/2.1.2/img/bg/1.jpg");
  background-size: 100% 100%;
  color: ${colors.opposite};
  /* background: radial-gradient(60% 100% ellipse at 65% 100%, #4d171b 0%, #4d171b 45%, #cc4734 60%, #DE8657 65%, #f49754 70%, transparent), ${colors.primary}; */
`;
const Content = styled.main`
  grid-area: main;

  flex-grow: 1;
  padding: 2rem;
`;

const Base: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Side />
      <Content>
        {React.Children.toArray(children)}
      </Content>
      <Footer />
    </Wrapper>
  );
};

export default Base;
