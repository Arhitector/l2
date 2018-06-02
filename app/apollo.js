import { WS_URL, GRAPH_URL } from 'app/environment';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { split } from 'apollo-link';
import { getOperationAST } from 'graphql';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';

const link = split(
  (operation) => {
    const operationAST = getOperationAST(operation.query, operation.operationName);
    return !!operationAST && operationAST.operation === 'subscription';
  },
  new WebSocketLink({
    uri: `${WS_URL}`,
    options: {
      reconnect: true, // auto-reconnect
      // carry login state (should use secure websockets (wss) when using this)
      // connectionParams: {
      //   authToken: localStorage.getItem('access-token'),
      // },
    },
  }),
  new HttpLink({ uri: `${GRAPH_URL}/graphql` }),
);

export const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
  connectToDevTools: true,
});
