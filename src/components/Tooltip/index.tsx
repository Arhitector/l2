import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { colors } from 'src/variables';

const Wrapper = styled.div`
  position: absolute;
  background-color: ${colors.opposite};
  padding: 6px 12px;
  color: ${colors.secondary};
  pointer-events: none;
  z-index: 1000;
  &::after {
    content: '';
    position: absolute;
    height: 0;
    width: 0;
    border-bottom: 4px solid transparent;
    border-right: 8px solid ${colors.opposite};
    border-top: 4px solid transparent;
    transform: translateY(2px);
    right: 100%;
  }
`;

type TooltipProps = {
  children: ReactNode,
  className?: string,
};

const Tooltip = ({ children, className }: TooltipProps) => {
  return (
    <Wrapper className={className} >{ children }</Wrapper>
  );
}

export default Tooltip;