import React, { memo } from 'react';
import styled from '@emotion/styled';

const size: number = 1.48;

const Wrapper = styled('span')`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled('span')`
  padding-right: 6px;
`;

const Icon = styled('span')`
  display: inline-block;
  border-radius: 50%;
  border: ${ size / 8 }rem solid ${ props => props.color };
  width: ${size}rem;
  height: ${size}rem;
  position: relative;
  &::after, &::before {
    content: '';
    position: absolute;
    width: ${ size / 8 }rem;
    height: ${ size * 0.625 }rem;
    left: 50%;
    top: 50%;
    background-color: ${ props => props.color };
  }
  &::after{
    transform: translate(-50%, -50%);
  }
  &::before {
    transform: translate(-50%, -50%) rotate(90deg);
  }
`;

type Props = {
  onClick: () => void,
  color: string,
  label?: string,
  className?: string,
};

const Add = ({ onClick, label, color, className }: Props) => {
  console.log('Add');

  return label
    ? <Wrapper className={className} ><Label>{label}</Label> <Icon onClick={onClick} color={color} /></Wrapper>
    : <Icon className={className} onClick={onClick} color={color} />;
}

export default memo(Add);