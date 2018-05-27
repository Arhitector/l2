import React from 'react';

export default class Respawn extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div>
        {
          React.Children.toArray(children)
        }
      </div>
    );
  }
}
