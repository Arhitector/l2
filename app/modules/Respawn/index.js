import React from 'react';

import Header from 'app/common/Header';
import Card from 'app/common/Card';
import RBResp from 'app/components/RBResp';

class Respawn extends React.PureComponent {
  render() {
    const { myRb } = this.props;
    return (
      <div>
        { myRb.length > 0 && <Header title="My watch RaidBosses" /> }
        {
          myRb.map(rb => (
            <Card >
              <RBResp rb={rb} />
            </Card>
          ))
        }
        <Header title="List RaidBosses" />
        <Card >
          some table
        </Card>
      </div>
    );
  }
}

export default Respawn;
