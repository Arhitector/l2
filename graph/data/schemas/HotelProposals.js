
import {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLBoolean,
} from 'graphql';

const cancellationPolicy = new GraphQLObjectType({
  name: 'cancellationPolicy',
  fields: () => ({
    free: {
      type: GraphQLInt,
    },
    percent: {
      type: GraphQLInt,
    },
    periods: {
      type: new GraphQLList(periods),
    },
  }),
});


const periods = new GraphQLObjectType({
  name: 'periods',
  fields: () => ({
    from: {
      type: GraphQLInt,
    },
    percent: {
      type: GraphQLInt,
    },
    to: {
      type: GraphQLInt,
    },
  }),
});


const proposals = new GraphQLObjectType({
  name: 'proposals',
  fields: () => ({
    amount: {
      type: GraphQLInt,
    },
    cancellationPolicy: {
      type: cancellationPolicy,
    },
    rooms: {
      type: new GraphQLList(roomsProposal),
    },
    total: {
      type: GraphQLInt,
    },
  }),
});


const roomsProposal = new GraphQLObjectType({
  name: 'roomsProposal',
  fields: () => ({
    room_name: {
      type: GraphQLString,
    },
    amount: {
      type: GraphQLInt,
    },
    prices: {
      type: new GraphQLList(prices),
    },
    total: {
      type: GraphQLInt,
    },
  }),
});


const prices = new GraphQLObjectType({
  name: 'prices',
  fields: () => ({
    checkIn: {
      type: GraphQLString,
    },
    checkOut: {
      type: GraphQLString,
    },
    price: {
      type: GraphQLInt,
    },
    primeCost: {
      type: GraphQLInt,
    },
  }),
});

const hotelsProposals = new GraphQLObjectType({
  name: 'hotelsProposals',
  fields: () => ({
    cityTax: {
      type: GraphQLString,
    },
    dueDays: {
      type: GraphQLInt,
    },
    upTo: {
      type: GraphQLString,
    },
    meal: {
      type: GraphQLString,
    },
    proposals: {
      type: proposals,
    },
  }),
});

export default hotelsProposals;
