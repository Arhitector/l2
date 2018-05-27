import React from 'react';

class db extends React.PureComponent {
  render() {
    const { db } = this.props;
    return (
        <div>
          database
          {db}
        </div>
    );
  }
}

export default db;
