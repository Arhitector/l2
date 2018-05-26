
import {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLBoolean,
} from 'graphql';

import { tourRooms } from './Tour';
import { tour } from './Trip';

const roomSession = new GraphQLInputObjectType({
  name: 'roomSession',
  fields: () => ({
    abbr: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    order: {
      type: GraphQLInt,
    },
  }),
});

const roomsSession = new GraphQLInputObjectType({
  name: 'roomsSession',
  fields: () => ({
    room: {
      type: roomSession,
    },
    amount: {
      type: GraphQLInt,
    },
    checkIn: {
      type: GraphQLString,
    },
    checkOut: {
      type: GraphQLString,
    },
  }),
});

export const UpdateSessionInput = new GraphQLInputObjectType({
  name: 'UpdateSessionInput',
  fields: () => ({
    checkIn: {
      type: GraphQLString,
    },
    checkOut: {
      type: GraphQLString,
    },
    geonameid: {
      type: GraphQLInt,
    },
    rooms: {
      type: new GraphQLList(roomsSession),
    },
  }),
});

const requestDataStars = new GraphQLObjectType({
  name: 'requestDataStar',
  fields: () => ({
    star: {
      type: GraphQLInt,
    },
    value: {
      type: GraphQLBoolean,
    },
  }),
});

const prices = new GraphQLObjectType({
  name: 'prices',
  fields: () => ({
    _id: {
      type: GraphQLString,
    },
    checkIn: {
      type: GraphQLString,
    },
    checkOut: {
      type: GraphQLString,
    },
    price: {
      type: GraphQLInt,
    },
  }),
});

const rooms = new GraphQLObjectType({
  name: 'rooms',
  fields: () => ({
    _id: {
      type: GraphQLString,
    },
    total: {
      type: GraphQLInt,
    },
    room: {
      type: GraphQLString,
    },
    amount: {
      type: GraphQLString,
    },
    prices: {
      type: new GraphQLList(prices),
    },
  }),
});

const trip = new GraphQLObjectType({
  name: 'trip',
  fields: () => ({
    _id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    tour: {
      type: tour,
    },
  }),
});

const requestData = new GraphQLObjectType({
  name: 'requestData',
  fields: () => ({
    cityTax: {
      type: GraphQLString,
    },
    meal: {
      type: GraphQLString,
    },
    stars: {
      type: new GraphQLList(requestDataStars),
    },
  }),
});

const proposals = new GraphQLObjectType({
  name: 'proposals',
  fields: () => ({
    rooms: {
      type: new GraphQLList(rooms),
    },
    total: {
      type: GraphQLInt,
    },
  }),
});

export const Session = new GraphQLObjectType({
  name: 'Session',
  fields: () => ({
    _id: {
      type: GraphQLID,
    },
    createdAt: {
      type: GraphQLString,
    },
    proposals: {
      type: proposals,
    },
    trip: {
      type: trip,
    },
    checkIn: {
      type: GraphQLString,
    },
    checkOut: {
      type: GraphQLString,
    },
    num: {
      type: GraphQLString,
    },
    rooms: {
      type: new GraphQLList(tourRooms),
    },
    geonameid: {
      type: GraphQLInt,
    },
  }),
});

export default Session;
