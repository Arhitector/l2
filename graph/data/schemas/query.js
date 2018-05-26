/* eslint-disable */

import {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  GraphQLObjectType,
} from 'graphql';

import {
  getTours,
  getTour,
  getTrips,
  getUser,
  getTrip,
  getSessions,
  getSession,
} from '../database/database'

import { Tour } from './Tour';
import { Trip } from './Trip';
import { User } from './User';
import { Session } from './Session';
import { SystemEvent } from './SystemEvent';
import { City } from './City';
import { cities } from '../database/cities';

export default new GraphQLObjectType({
  name: 'Query',
  fields: {
    city: {
      type: City,
      args: {
        query: {
          type: GraphQLInt,
        },
      },
      resolve: (root, { query }) => cities.find((city) => city.geonameid === query)
    },
    user: {
      type: User,
      args: {
        userId: {
          type: GraphQLString,
        },
      },
      resolve: (root, args) => getUser(args.userId),
    },
    session: {
      type: Session,
      args: {
        sessionId: {
          type: GraphQLString,
        },
      },
      resolve: (root, {sessionId}) => getSession(sessionId).then((session) => session),
    },
    sessions: {
      type: new GraphQLList(Session),
      args: {
        tripId: {
          type: GraphQLString,
        },
      },
      resolve: (root, {tripId}) => getSessions(tripId).then((sessions) => sessions),
    },
    trip: {
      type: Trip,
      args: {
        tripId: {
          type: GraphQLString,
        },
      },
      resolve: (root, {tripId}) => getTrip(tripId).then((trip) => trip),
    },
    trips: {
      type: new GraphQLList(Trip),
      args: {
        tourId: {
          type: GraphQLString,
        },
      },
      resolve: (root, args) => getTrips(args.tourId),
    },
    tour: {
      type: Tour,
      args: {
        tourId: {
          type: GraphQLString,
        },
      },
      resolve: (root, args) => getTour(args.tourId).then((tour) => tour),
    },
    tours: {
      type: new GraphQLList(Tour),
      resolve: () => getTours(),
    },
    SystemEvent: {
      type: SystemEvent,
      args: {
        userId: {
          type: GraphQLString,
        },
      },
      resolve: (root, args) => ({}),
    },
  },
});
