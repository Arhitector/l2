/**
 * Created by Max Kudla.
 */


import React, { PureComponent } from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';

import { FlexOne } from 'app/components/Flex';
import Notifications from 'app/components/Notifications';

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
      <FlexOne>
        {React.Children.only(this.props.children)}
        <Notifications />
      </FlexOne>
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
