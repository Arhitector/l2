/* eslint-disable */

var { merge } = require('lodash');
var { makeExecutableSchema } = require('graphql-tools');
var { withFilter } = require('graphql-subscriptions');

var { pubsub } = require('./data/pubsub');

let count = 0;
let event = null;

const rootSchema = [`
  type Query {
    count: Int,
    SystemEvent: SystemEvent
  }

  type Mutation {
    increment: Int,
    SystemEvent(type: String): SystemEvent
  }

  type Subscription {
    incremented: Int,
    SystemEvent: SystemEvent
  }

  type Result {
    count: Int
  }

  type SystemEvent{
    type: String
  }

  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`];

const INCREMENTED = 'incremented';
const SYSTEM_EVENT = 'system_event';

const rootResolvers = {
  Query: {
    count: () => count,
    SystemEvent: () => event,
  },
  Mutation: {
    increment: () => {
      ++count // eslint-disable-line
      pubsub.publish(INCREMENTED, { incremented: count });
      return count;
    },
    SystemEvent: (root, args) => {
      pubsub.publish(SYSTEM_EVENT, { SystemEvent: { type: args.type } });

      return { type: args.type };
    },
  },
  Subscription: {
    incremented: {
      subscribe: () => pubsub.asyncIterator(INCREMENTED),
    },
    SystemEvent: {
      subscribe: () => pubsub.asyncIterator(SYSTEM_EVENT),
    },
  },
};

// Put schema together into one array of schema strings
// and one map of resolvers, like makeExecutableSchema expects
const schema = [...rootSchema];
const resolvers = merge(rootResolvers);

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});

module.exports = executableSchema;
