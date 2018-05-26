
import { assign, findIndex } from 'lodash';
import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
} from 'graphql';


import { pubsub } from './../pubsub';
import { getUser, getUserByName, getToken } from '../database/database';
import { tours } from '../database/tours';
import { trips } from '../database/trips';
import { cities } from '../database/cities';

import { Tour, TourCreateInput, UpdateNameTourInput } from './Tour';
import { Trip, UpdateTripInput } from './Trip';
import { Session, UpdateSessionInput } from './Session';
import { User } from './User';
import { City } from './City';
import { SystemEvent } from './SystemEvent';
import { CreateTour } from './utils';

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    updateSession: {
      type: Session,
      args: {
        tripId: {
          type: GraphQLString,
        },
        sessionId: {
          type: GraphQLString,
        },
        session: {
          type: UpdateSessionInput,
        },
      },
      resolve: (root, { tripId, sessionId, session }) => {
        const trip = trips.find(({ _id }) => _id === tripId);
        const sIndex = trip.sessions.findIndex(({ _id }) => _id === sessionId);
        const newSession = assign({}, trip.sessions[sIndex], session);
        trip.sessions[sIndex] = newSession;
        pubsub.publish('SESSION_UPDATED', { sessionUpdated: newSession });
        return newSession;
      },
    },
    cities: {
      type: new GraphQLList(City),
      args: {
        query: {
          type: GraphQLString,
        },
      },
      resolve: (root, { query }) => cities.filter(city => city.name.includes(query)),
    },
    signInUser: {
      type: User,
      args: {
        username: {
          type: GraphQLString,
        },
        password: {
          type: GraphQLString,
        },
      },
      resolve: (root, args) => Promise.all([getToken(args), getUserByName(args.username)])
        .then(([token, user] = data) => ({ ...token, ...user })),
    },
    createTour: {
      type: Tour,
      args: {
        tour: {
          type: TourCreateInput,
        },
      },
      resolve: (root, { tour }) => {
        const newTour = CreateTour(tour);
        pubsub.publish('TOUR_CREATED', { tourCreated: newTour });
        tours.push(newTour);
        return newTour;
      },
    },
    updateTrip: {
      type: Trip,
      args: {
        tripId: {
          type: GraphQLString,
        },
        trip: {
          type: UpdateTripInput,
        },
      },
      resolve: (root, { trip,tripId }) => {
        const index = findIndex(trips, ({ _id }) => _id == tripId);
        const newTrip = assign({}, trips[index], trip);
        trips.splice(index, 1, newTrip);
        pubsub.publish(`TRIP_${tripId}_UPDATED`, { tripUpdated: newTrip });
        return newTrip;
      },
    },
    addNewTrip: {
      type: Trip,
      args: {
        tourId: {
          type: GraphQLString,
        },
        initialDate: {
          type: GraphQLString,
        },
      },
      resolve: (root, { tourId, initialDate }) => {
        const index = findIndex(trips, ({ tour: { _id } }) => _id == tourId);
        const newTrip = Object.assign({}, trips[index], {
          name: initialDate,
          _id: `${initialDate}_${Math.random() * 10}`,
        });
        trips.push(newTrip);
        pubsub.publish('TRIP_CREATED', { tripCreated: newTrip });
        return newTrip;
      },
    },
    updateTourName: {
      type: Tour,
      args: {
        tourId: {
          type: GraphQLString,
        },
        tour: {
          type: UpdateNameTourInput,
        },
      },
      resolve: (root, args) => {
        const index = findIndex(tours, ({ _id }) => _id == args.tourId);
        const tour = assign({}, tours[index], args.tour);
        tours.splice(index, 1, tour);
        pubsub.publish(`TOUR_NAME_${args.tourId}_UPDATED`, { tourNameUpdated: tour });
        return tour;
      },
    },
    updateUser: {
      type: User,
      args: {
        userId: {
          type: GraphQLString,
        },
        name: {
          type: GraphQLString,
        },
      },
      resolve: (root, { userId, name }) => getUser(userId)
        .then((response) => {
          const user = assign({}, response, { name });
          pubsub.publish(`USER_${userId}_UPDATED`, { userUpdated: user });
          return user;
        }),
    },
    SystemEvent: {
      type: SystemEvent,
      args: {
        userId: {
          type: GraphQLInt,
        },
        type: {
          type: GraphQLString,
        },
        data: {
          type: GraphQLString,
        },
      },
      resolve: (root, { userId, type, data }) => {
        pubsub.publish(`SYSTEM_${userId}`, {
          SystemEvent: {
            type,
            data,
          },
        });
      },
    },
  },
});
