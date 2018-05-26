import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'react-apollo';
import { EventSubscription } from './subscriptions';
import { EventQuery } from './query';
import handleEvent from './eventHandler';

class SystemEventAndNotificationsProvider extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    subscribeToEvent: PropTypes.func,
  };

  componentDidMount() {
    this.props.subscribeToEvent();
  }

  render() {
    return (
      <div>
        {React.Children.only(this.props.children)}
      </div>
    );
  }
}

const options = {
  name: 'event',
  props: props => ({
    subscribeToEvent: () => props.event.subscribeToMore({
      document: EventSubscription,
      updateQuery: (prev, { subscriptionData }) => {
        handleEvent(subscriptionData.data.SystemEvent);
        return prev;
      },
    }),
  }),
};


export default graphql(EventQuery, options)(SystemEventAndNotificationsProvider);
