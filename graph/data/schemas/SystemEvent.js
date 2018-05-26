/**
 * Created by Max Kudla.
 */

import {
  GraphQLString,
  GraphQLObjectType,
} from 'graphql';

export const SystemEvent = new GraphQLObjectType({
  name: 'SystemEvent',
  fields: () => ({
    type: {
      type: GraphQLString,
    },
    data: {
      type: GraphQLString,
    },
  }),
});
