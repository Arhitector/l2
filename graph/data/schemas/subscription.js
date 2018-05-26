/* eslint-disable */

import { $$asyncIterator } from 'iterall';

import {
  GraphQLInt,
  GraphQLObjectType,
} from 'graphql';

import { pubsub } from './../pubsub';
import { getTour, getTrip } from '../database/database';

import { Tour } from './Tour';
import { Trip } from './Trip';
import { Session } from './Session';
import { User } from './User';
import { SystemEvent } from './SystemEvent';

const withOwnerFilter = (asyncIteratorFn, filterFn) => (rootValue, args, context, info) => {
  const asyncIterator = asyncIteratorFn(rootValue, args, context, info);

  const getNextPromise = () => asyncIterator
    .next()
    .then((payload) => Promise.all([
      payload,
      Promise.resolve(filterFn(payload.value, args, context, info))
        .catch(() => false),
    ]))
    .then(([payload, filterResult]) => {
      if (filterResult === true || payload.done === true) {
        return payload;
      }

      // Skip the current value and wait for the next one
      return getNextPromise();
    });

  return {
    next() {
      return getNextPromise();
    },
    return() {
      return asyncIterator.return();
    },
    throw(error) {
      return asyncIterator.throw(error);
    },
    [$$asyncIterator]() {
      return this;
    },
  };
};

export default new GraphQLObjectType({
  name: 'Subscription',
  fields: {
    sessionUpdated: {
      type: Session,
      subscribe: () => pubsub.asyncIterator(`SESSION_UPDATED`)
    },
    tourCreated: {
      type: Tour,
      subscribe: () => {
        return pubsub.asyncIterator(`TOUR_CREATED`)
      }
    },
    tripCreated: {
      type: Trip,
      subscribe: () => pubsub.asyncIterator(`TRIP_CREATED`)
    },
    tripUpdated: {
      type: Trip,
      args: {
        tripId: {
          type: GraphQLInt,
        },
      },
      subscribe: (root, {tripId}) => pubsub.asyncIterator(`TRIP_${tripId}_UPDATED`)
    },
    tourNameUpdated: {
      type: Tour,
      args: {
        tourId: {
          type: GraphQLInt,
        },
      },
      subscribe: (root, { tourId }) => pubsub.asyncIterator(`TOUR_NAME_${tourId}_UPDATED`)
    },
    userUpdated: {
      type: User,
      args: {
        userId: {
          type: GraphQLInt,
        },
      },
      subscribe: (root, { userId }) => pubsub.asyncIterator(`USER_${userId}_UPDATED`),
    },
    SystemEvent: {
      type: SystemEvent,
      args: {
        userId: {
          type: GraphQLInt,
        },
      },
      subscribe: (root, args, { login }) => pubsub.asyncIterator(`SYSTEM_${login}`),
    },
  },
});
