/* eslint-disable */

import {
  GraphQLSchema,
} from 'graphql';

import query from './schemas/query';
import mutation from './schemas/mutation';
import subscription from './schemas/subscription';

export const schema = new GraphQLSchema({
  query,
  mutation,
  subscription,
});
