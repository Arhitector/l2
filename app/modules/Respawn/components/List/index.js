import React from 'react';
import { browserHistory } from 'react-router';
import { Query } from 'react-apollo';
import { RB_QUERY } from './graph';
import styled from 'styled-components';
import Header from 'app/common/Header';
import Card from 'app/common/Card';

const RBWrap = styled.div`
`;

class RespawnList extends React.PureComponent {
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
            <Header title="List RaidBosses" />
            <Card >
              {listRB && listRB.map(RB => <RBWrap key={RB._id} onClick={() => browserHistory.push(`/respawn/${RB._id}`)} >{RB.name}</RBWrap>)}
            </Card>
          </div>);
        }}
      </Query>
    );
  }
}

export default RespawnList;
