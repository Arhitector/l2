import React from 'react';

class Base extends React.Component {
 
  render() {
    return (
      <div>
          {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}

export default Base;
