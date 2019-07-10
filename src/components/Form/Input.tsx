import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { colors } from 'src/variables';

const El = styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid rgba(255,255,255,.4);
  padding: .6rem 1rem;
  color: rgba(255,255,255,.4);
  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  outline: none;
  &:focus {
    color: rgba(255,255,255,.85);
    border-color: rgba(255,255,255,.85);
  }
`;

type TooltipProps = {
  className?: string,
  type?: string,
  name: string,
  placeholder?: string,
};

const Input = ({ className, ...props }: TooltipProps) => {
  const { type, ...otherProps} = props;
  return (
    <El
      className={className}
      type={type || 'text'}
      {...otherProps}
    />
  );
}

export default Input;