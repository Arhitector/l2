
import {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLBoolean,
} from 'graphql';

export const room = new GraphQLObjectType({
  name: 'room',
  fields: () => ({
    _id: {
      type: GraphQLString,
    },
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

export const tourRooms = new GraphQLObjectType({
  name: 'tourRooms',
  fields: () => ({
    _id: {
      type: GraphQLString,
    },
    room: {
      type: room,
    },
    amount: {
      type: GraphQLInt,
    },
  }),
});

const stars = new GraphQLObjectType({
  name: 'stars',
  fields: () => ({
    star: {
      type: GraphQLInt,
    },
    value: {
      type: GraphQLBoolean,
    },
  }),
});

const cities = new GraphQLObjectType({
  name: 'cities',
  fields: () => ({
    _id: {
      type: GraphQLString,
    },
    stars: {
      type: new GraphQLList(stars),
    },
    geonameid: {
      type: GraphQLInt,
    },
    checkInDiff: {
      type: GraphQLInt,
    },
    checkOutDiff: {
      type: GraphQLInt,
    },
  }),
});

const template = new GraphQLObjectType({
  name: 'template',
  fields: () => ({
    initialDate: {
      type: GraphQLString,
    },
    rooms: {
      type: new GraphQLList(tourRooms),
    },
    cities: {
      type: new GraphQLList(cities),
    },
  }),
});

export const Tour = new GraphQLObjectType({
  name: 'Tour',
  fields: () => ({
    _id: {
      type: GraphQLID,
    },
    isSerial: {
      type: GraphQLBoolean,
    },
    template: {
      type: template,
    },
    tripDates: {
      type: new GraphQLList(GraphQLString),
    },
    name: {
      type: GraphQLString,
    },
    createdBy: {
      type: GraphQLString,
    },
    client: {
      type: GraphQLString,
    },
    order: {
      type: GraphQLInt,
    },
    createdAt: {
      type: GraphQLString,
    },
    past: {
      type: GraphQLBoolean,
    },
  }),
});


const citiesCreateInput = new GraphQLInputObjectType({
  name: 'citiesCreateInput',
  fields: () => ({
    name: {
      type: GraphQLString,
    },
    geonameid: {
      type: GraphQLInt,
    },
    checkInDiff: {
      type: GraphQLInt,
    },
    checkOutDiff: {
      type: GraphQLInt,
    },
  }),
});

export const tourRoomsCreateInput = new GraphQLInputObjectType({
  name: 'tourRoomsCreateInput',
  fields: () => ({
    room: {
      type: GraphQLString,
    },
    amount: {
      type: GraphQLInt,
    },
  }),
});

const templateInput = new GraphQLInputObjectType({
  name: 'templateCreateInput',
  fields: () => ({
    initialDate: {
      type: GraphQLString,
    },
    rooms: {
      type: new GraphQLList(tourRoomsCreateInput),
    },
    cities: {
      type: new GraphQLList(citiesCreateInput),
    },
  }),
});

export const UpdateNameTourInput = new GraphQLInputObjectType({
  name: 'UpdateNameTourInput',
  fields: () => ({
    name: {
      type: GraphQLString,
    },
  }),
});

export const TourCreateInput = new GraphQLInputObjectType({
  name: 'TourCreateInput',
  fields: () => ({
    name: {
      type: GraphQLString,
    },
    abbr: {
      type: GraphQLString,
    },
    isSerial: {
      type: GraphQLBoolean,
    },
    template: {
      type: templateInput,
    },
  }),
});

export default Tour;
