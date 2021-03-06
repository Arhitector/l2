import React, { createContext, useState, useCallback, useMemo } from 'react';
import styled from '@emotion/styled';

import { custom, colors, ff } from 'src/variables';
import Typography from 'components/Typography';
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
  background-color: ${colors.main};
  background: linear-gradient(to right, #1D2671, #C33764);
  background-size: 100% 100%;
  color: ${colors.secondary};
  font-family: ${ff.main};
`;
const Content = styled.main`
  grid-area: main;

  flex-grow: 1;
  padding: 2rem;
`;

export const BaseContext = createContext(null);

const Base: React.FC<Props> = ({ children }) => {
  console.log('Base');
  const [ pageTitle, setPageTitle] = useState('');
  
  const setTitle = useCallback(p => {
    console.log('setPageTitle', p);
    setPageTitle(p);
  }, []);

  return (
    <Wrapper>
      <Header />
      <Side />
      <Content>
        <BaseContext.Provider value={{ setTitle }} >
          { !!pageTitle && <Typography> { pageTitle } </Typography> }
          { children }
        </BaseContext.Provider>
      </Content>
      <Footer />
    </Wrapper>
  );
};



export default Base;
