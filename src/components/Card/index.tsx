import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-flex;
  background-color: rgba(0,0,0,.2);
  padding: 1.5rem 1.5rem 1.45rem;
  margin-bottom: 2.3rem;
`;

type CardProps = {
  children: ReactNode,
};

const Card = ({ children }: CardProps) => {
  return <Wrapper>{ children }</Wrapper>;
};

export default Card;