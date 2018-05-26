import React from 'react';

class db extends React.PureComponent {
  render() {
    const { db } = this.props;
    return (
        <div>
          {db}
        </div>
    );
  }
}

export default db;
