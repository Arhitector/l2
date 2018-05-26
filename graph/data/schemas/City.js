import {
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLObjectType,
} from 'graphql';

export const City = new GraphQLObjectType({
  name: 'City',
  fields: () => ({
    _id: {
      type: GraphQLID,
    },
    geonameid: {
      type: GraphQLInt,
    },
    name: {
      type: GraphQLString,
    },
    countryCode: {
      type: GraphQLString,
    },
  }),
});

export default City;
