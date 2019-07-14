import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

export const Table = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  min-width: 100%;
  /* background-color: rgba(0,0,0,.2); */
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(255,255,255,.125);
  &:nth-last-of-type(1) {
    border-bottom: 1px solid rgba(255,255,255,.125);
  }
`;

export const Cell = styled.div`
  position: relative;
  padding: 1rem 1.5rem;
  margin-left: ${(props: { toRight?: boolean }) => props.toRight ? 'auto' : 'none'};
`;

type BasicTableProps = {
  children: ReactNode,
  className?: string,
};

const BasicTable = ({ children, className }: BasicTableProps) => {
  return <Table className={className} >{ children }</Table>;
};

export default BasicTable;