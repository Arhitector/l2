import React from 'react';
import styled from 'styled-components';
import { vars } from 'app/variables';

const InputWrap = styled.div`
  position: relative;
  margin: 0 0 10px;
  input {
    border: none;
    border-bottom: 1px solid ${vars.colors.opposite}20;
    margin: 0;
    padding: 0 8px;
    width: 100%;
    height: 32px;
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

class Input extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      focus: false,
    };

    this.toogleFocusInput = this.toogleFocusInput.bind(this);
  }

  toogleFocusInput() {
    this.setState({ focus: !this.state.focus });
  }

  render() {
    const {
      type,
      name,
      value,
      onChange,
    } = this.props;
    const {
      focus,
    } = this.state;
    return (
      <InputWrap focus={focus} >
        <input
          type={type || 'text'}
          name={name || 'text'}
          value={value}
          onFocus={this.toogleFocusInput}
          onBlur={this.toogleFocusInput}
          onChange={onChange}
        />
      </InputWrap>
    );
  }
}

export default Input;
