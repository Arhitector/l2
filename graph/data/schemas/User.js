/**
 * Created by Max Kudla.
 */

import {
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
} from 'graphql';

const client = new GraphQLObjectType({
  name: 'client',
  fields: () => ({
    _id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    status: {
      type: GraphQLString,
    },
    balance: {
      type: GraphQLInt,
    },
  })
});

export const User = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    _id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    createdAt: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    group: {
      type: GraphQLString,
    },
    lang: {
      type: GraphQLString,
    },
    username: {
      type: GraphQLString,
    },
    status: {
      type: GraphQLString,
    },
    role: {
      type: GraphQLString,
    },
    phone: {
      type: GraphQLString,
    },
    token: {
      type: GraphQLString,
    },
    loginAttempts: {
      type: GraphQLInt,
    },
    emailNotifications: {
      type: new GraphQLList(GraphQLString),
    },
    client: {
      type: client,
    },
  }),
});
