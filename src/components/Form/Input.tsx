import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

import { colors } from 'src/variables';

const placeholderColor = (color) => `
  &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: ${color};
  }
  &::-moz-placeholder { /* Firefox 19+ */
    color: ${color};
  }
  &:-ms-input-placeholder { /* IE 10+ */
    color: ${color};
  }
`;

const staticColor = 'rgba(255,255,255,.4)';
const hoveredColor = 'rgba(255,255,255,.85)';

const InputWrapper = styled.div`
  position: relative;
  display: inline-block;
  padding: 0 10px;
`;

const CheckboxWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
`;

const Label = styled.label`
  position: absolute;
  bottom: 0;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  display: block;
  pointer-events: none;
  border: 1px solid ${staticColor};
  transition: background-color 0.15s ease-in-out;
  &:after {
    content: '';
    opacity: 0;
    position: absolute;
    right: 50%;
    bottom: 50%;
    width: 0.35rem;
    height: 0.75rem;
    border-bottom: 2px solid ${colors.opposite};
    border-right: 2px solid ${colors.opposite};
    transform: rotate(45deg) translate(13%, 13%);
    transform-origin: bottom;
    transition: opacity 0.15s ease-in-out;
  }
`;

const Line = styled.hr`
  height: 1px;
  width: 0;
  margin: -1px 0 0;
  border: 0;
  transition: width ease-in-out .15s;
  transform-origin: left;
  background-color: ${hoveredColor};
`;

const InputEl = styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid ${staticColor};
  padding: .6rem 1rem;
  color: ${staticColor};
  transition: box-shadow ease-in-out .15s;
  outline: none;
  ${ placeholderColor(staticColor) }
  &:focus {
    color: ${hoveredColor};
    ${ placeholderColor(hoveredColor) }
    & + hr {
     width: 100%; 
    }
  }
`;

const InputCheckbox  = styled.input`
  opacity: 0;
  margin: 0;
  width: 1.5rem;
  height: 1.5rem;
  display: block;
  outline: none;
  &:checked + label {
    background-color: ${hoveredColor};
    &:after {
      opacity: 1;
    }
  }
`;

type TooltipProps = {
  className?: string,
  field?: string,
  type?: string,
  name: string,
  placeholder?: string,
};

const Input = ({ className, ...props }: TooltipProps) => {
  const { field, type, ...otherProps} = props;
  
  switch (type) {
    case 'checkbox':
      return (
        <CheckboxWrapper>
          <InputCheckbox
            className={className}
            type={type}
            {...field}
            {...otherProps}
          />
          <Label />
        </CheckboxWrapper>
      );
    default:
      return (
        <InputWrapper>
          <InputEl
            className={className}
            type={type}
            {...field}
            {...otherProps}
          />
          <Line />
        </InputWrapper>
      );
  }
}

export default Input;