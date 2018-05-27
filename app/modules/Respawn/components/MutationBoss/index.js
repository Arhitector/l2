import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { get, size } from 'lodash';
import { ADD_BOSS, RB_BY_ID_QUERY, UPDATE_BOSS } from './graph';

import Card from 'app/common/Card';
import Input from 'app/common/Input';
import TextArea from 'app/common/Input/textarea';

class MutationBoss extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};

    this.initData = this.initData.bind(this);
    this.handleChangeValue = this.handleChangeValue.bind(this);
  }

  componentDidMount() {
    const { bossInfo } = this.props;
    this.initData(bossInfo);
  }

  initData(bossInfo) {
    this.setState({ ...bossInfo });
  }

  handleChangeValue(e) {
    get(e, 'target') && this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const {
      bossInfo,
    } = this.props;
    const {
      _id,
      gameId,
      name,
      description,
      guards,
      drop,
      respawnTime,
      race,
    } = this.state;
    return (
      <Mutation mutation={size(bossInfo) ? UPDATE_BOSS : ADD_BOSS} >
        { addBoss => (<Card >
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  addBoss({
                    variables: {
                      raidBoss: {
                        _id,
                        gameId,
                        name,
                        description,
                        guards,
                        drop,
                        respawnTime,
                        race,
                      },
                    },
                  });
                }}
              >
                <Input name="name" value={name} onChange={this.handleChangeValue} />
                <Input name="gameId" type="number" value={gameId} onChange={this.handleChangeValue} />
                <Input name="race" value={race} onChange={this.handleChangeValue} />
                <TextArea name="description" value={description} onChange={this.handleChangeValue} />
                <button type="submit">Add Boss</button>
              </form>
            </Card>)
        }
      </Mutation>
    );
  }
}

const Boss = (props) => {
  const bossId = get(props, 'params.bossId');
  if (!bossId) return <MutationBoss />;
  return (
    <Query
      query={RB_BY_ID_QUERY}
      variables={{ id: bossId }}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        const bossInfo = get(data, 'getBossById');
        return (
          <MutationBoss bossInfo={bossInfo} />
        );
      }}
    </Query>
  );
};

export default Boss;
