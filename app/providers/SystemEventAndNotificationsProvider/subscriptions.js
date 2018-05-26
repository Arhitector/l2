/**
 * Created by Max Kudla.
 */

import gql from 'graphql-tag';

export const EventSubscription = gql`
  subscription onSystemEvent{
    SystemEvent{
      type,
      data
    }
  }
`;
