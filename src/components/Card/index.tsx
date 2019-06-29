import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  background-color: rgba(0,0,0,.2);
  padding: 1.5rem 1.5rem 1.45rem;
  margin-bottom: 2.3rem;
`;

type CardProps = {
  children: ReactNode,
  className?: string,
};

const Card = ({ children, className }: CardProps) => {
  return <Wrapper className={className} >{ children }</Wrapper>;
};

export default Card;