import React from 'react';
import Wrapper from './Wrap';

class Textarea extends React.PureComponent {
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
      label,
      name,
      value,
      onChange,
      className,
    } = this.props;
    const {
      focus,
    } = this.state;
    return (
      <Wrapper className={className} focus={focus} >
        { label && <label>{label}</label>}
        <textarea
          name={name || 'text'}
          type={type || 'text'}
          value={value}
          onFocus={this.toogleFocusInput}
          onBlur={this.toogleFocusInput}
          onChange={onChange}
        />
      </Wrapper>
    );
  }
}

export default Textarea;
