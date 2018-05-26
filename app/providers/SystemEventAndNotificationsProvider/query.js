/**
 * Created by Max Kudla.
 */

import gql from 'graphql-tag';

export const EventQuery = gql`
  query SystemEventQuery{
    SystemEvent{
      type,
      data
    }
  }
`;
