import React from 'react';
import { Query } from 'react-apollo';
import { RB_QUERY } from './graph';

import Header from 'app/common/Header';
import Card from 'app/common/Card';
import RBResp from 'app/components/RBResp';

class Respawn extends React.PureComponent {
  render() {
    const { cost } = this.props;
    console.log(cost);
    const myRb = [];
    return (
      <Query query={RB_QUERY} >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
          const listRB = data.allBosses;
          return (<div>
            { myRb.length > 0 && <Header title="My watch RaidBosses" /> }
            {
              myRb && myRb.map(rb => (
                <Card >
                  <RBResp rb={rb} />
                </Card>
              ))
            }
            <Header title="List RaidBosses" />
            <Card >
              {
                listRB && listRB.map(RB => (
                  <div key={RB._id} >{RB.name}</div>
                ))
              }
            </Card>
          </div>);
        }}
      </Query>
    );
  }
}

export default Respawn;
