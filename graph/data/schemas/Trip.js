/**
 * Created by Max Kudla.
 */

import {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLBoolean,
} from 'graphql';

import Session from './Session';

export const tour = new GraphQLObjectType({
  name: 'tour',
  fields: () => ({
    _id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
  }),
});

export const UpdateTripInput = new GraphQLInputObjectType({
  name: 'UpdateTripInput',
  fields: () => ({
    name: {
      type: GraphQLString,
    },
  }),
});

export const Trip = new GraphQLObjectType({
  name: 'Trip',
  fields: () => ({
    _id: {
      type: GraphQLString,
    },
    vouchers: {
      type: new GraphQLList(GraphQLString),
    },
    tour: {
      type: tour,
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
    createdAt: {
      type: GraphQLString,
    },
    sessions: {
      type: new GraphQLList(Session),
    },
  }),
});
