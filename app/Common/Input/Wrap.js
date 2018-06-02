import React from 'react';
import styled from 'styled-components';
import { vars } from 'app/variables';

const InputWrap = styled.div`
  position: relative;
  margin: 0 0 10px;
  display: flex;
  flex-direction: column;
  textarea,
  input {
    width: 100%;
    margin: 0;
    padding: 0 8px;
    border: none;
    border-bottom: 1px solid ${vars.colors.opposite}20;
    flex-grow: 1;
  }
  textarea {
    &:focus {
      outline: none;
    }
  }
  input {
    height: 32px;
    &[type=number]::-webkit-inner-spin-button, 
    &[type=number]::-webkit-outer-spin-button { 
      -webkit-appearance: none; 
      margin: 0; 
    }
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    background: ${vars.colors.opposite};
    width: ${props => (props.focus ? '100%' : '0')};
    height: 1px;
    transition: width 200ms ease-in-out;
  }
`;

class Wrapper extends React.PureComponent {
  render() {
    const {
      children,
      className,
      focus,
    } = this.props;
    return (
      <InputWrap className={className} focus={focus} >
        { children }
      </InputWrap>
    );
  }
}

export default Wrapper;
