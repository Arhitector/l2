import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { get, size } from 'lodash';
import { ADD_BOSS, RB_BY_ID_QUERY, UPDATE_BOSS, UPDATE_BOSS_SUBSCRIPTION } from './graph';

import Form from './Form';

class MutationBoss extends React.PureComponent {
  render() {
    const {
      bossInfo,
    } = this.props;
    const isUpdate = !!size(bossInfo);
    return (
      <Mutation mutation={isUpdate ? UPDATE_BOSS : ADD_BOSS} >
        {
          addBoss => <Form addBoss={addBoss} bossInfo={bossInfo} />
        }
      </Mutation>
    );
  }
}

const Boss = (props) => {
  const bossId = get(props, 'params.bossId');
  if (!bossId) return <MutationBoss />;
  let unsubscribe = null;
  return (
    <div>
    <Query
      query={RB_BY_ID_QUERY}
      variables={{ id: bossId }}
    >
      {({
        loading,
        error,
        data,
        subscribeToMore,
      }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        if (!unsubscribe) {
          unsubscribe = subscribeToMore({
              document: UPDATE_BOSS_SUBSCRIPTION,
              updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev;
                const updatedBossData = subscriptionData.data.updatedBoss;
                return Object.assign({}, prev, {
                  getBossById: { ...updatedBossData },
                });
              },
            });
        }
        const bossInfo = get(data, 'getBossById');
        return (
          <MutationBoss bossInfo={bossInfo} />
        );
      }}

    </Query>
    {/* <Subscription
      subscription={UPDATE_BOSS_SUBSCRIPTION}
    >
        {({ data , loading }) => {
          if (loading) return <p>Loading...</p>;
          if (data) return <p>{data.updatedBoss.description}</p>;
          console.log(data);
        }}
      </Subscription> */}
    </div>
  );
};

export default Boss;
