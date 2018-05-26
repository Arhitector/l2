/**
 * Created by Max Kudla.
 */

/* eslint-disable no-underscore-dangle */

// import { toIdValue } from 'apollo-client';
import { WS_URL, GRAPH_URL } from 'app/environment';

// import { ApolloClient, createNetworkInterface } from 'react-apollo';

import ApolloClient from "apollo-boost";
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';

// Create a normal network interface:
// const networkInterface = createNetworkInterface({ uri: `${GRAPH_URL}/graphql` });

// networkInterface.use([{
//   applyMiddleware(req, next) {
//     if (!req.options.headers) {
//       req.options.headers = {}; // eslint-disable-line no-param-reassign
//     }
//     const token = localStorage.getItem('access-token') ? localStorage.getItem('access-token') : null; // eslint-disable-line no-param-reassign
//     req.options.headers.Authorization = `Bearer ${token}`; // eslint-disable-line no-param-reassign
//     next();
//   },
// }]);

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('token');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     }
//   }
// });


export const webSocketClient = new SubscriptionClient(`${WS_URL}/subscriptions`, {
  reconnect: true,
  connectionParams: () => ({
    authorization: localStorage.getItem('access-token'),
  }),
});

// Extend the network interface with the WebSocket
// const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(networkInterface, webSocketClient);

function dataIdFromObject(result) {
  if (result.__typename) {
    if (result.id !== undefined) {
      return `${result.__typename}:${result.id}`;
    }
    if (result._id !== undefined) {
      return `${result.__typename}:${result._id}`;
    }
  }
  return null;
}

export const apolloClient = new ApolloClient({
  uri: "https://w5xlvm3vzz.lp.gql.zone/graphql",
  customResolvers: {
    Query: {
      tour: (_, { tourId }) => toIdValue(dataIdFromObject({ __typename: 'Tour', id: tourId })),
    },
  },
  dataIdFromObject,
});
