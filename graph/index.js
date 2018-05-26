/**
 * Created by Max Kudla.
 */


const express = require('express');
const { createServer } = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const { execute, subscribe } = require('graphql');
const { graphiqlExpress, graphqlExpress } = require('graphql-server-express');
const { SubscriptionServer } = require('subscriptions-transport-ws');

const { schema } = require('./data/schema');

const PORT = 4000;
const WS_PORT = 4010;
const jwtSecret = 'asdfasdfasdfasdf';

// Sentry Schema Error Logging configuration
// TODO Create Sentry project for server

const Raven = require('raven');
const { addErrorLoggingToSchema } = require('graphql-tools');
const { SENTRY_DSN } = require('./constants');

Raven
  .config(SENTRY_DSN)
  .install();
addErrorLoggingToSchema(schema, {
  log: (e) => {
    console.error(e);
    Raven.captureException(e);
  },
});

// Create WebSocket listener server
const websocketServer = createServer((request, response) => {
  response.writeHead(404);
  response.end();
});

websocketServer.listen(WS_PORT, () => console.log(
  `Websocket Server is now running on http://localhost:${WS_PORT}`
));


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const subscriptionsServer = new SubscriptionServer({  // eslint-disable-line no-unused-vars
  schema,
  execute,
  subscribe,
  onConnect: ((props) => new Promise((resolve, reject) => {
    let access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFyaGl0ZWN0b3I2NjZAZ21haWwuY29tIiwicGFzc3dvcmQiOiJEYXZpbmNpMzIxIiwiaWF0IjoxNTIzMDMyNTE5fQ.Jyg2m4xoycf-s3DM9Zsvs-GMO6YfK8TTX19rw0722eY';
    jwt.verify(access_token, jwtSecret, (err, decoded) => {
      if (decoded) {
        resolve(decoded);
      } else if (err) {
        reject(new Error('Token is broken'));
      }
    });
  })),
}, { server: websocketServer });

app.use('/*', (req, res, next) => {
  next();
});

app.use(
  '/graphql',
  (req, res, next) => {
    jwt.verify(req.headers['access-token'], jwtSecret, (err, decoded) => {
      if (decoded) {
        // {login, password}
        req.user = decoded; // eslint-disable-line no-param-reassign
        next();
      } else if (err) {
        next();
      }
    });
  },
  graphqlExpress((req) => ({
    schema,
    context: { user: req.user },
  }))
);

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
    subscriptionsEndpoint: 'ws://localhost:4010/subscriptions',
    query: '',
  })
);

app.listen(PORT, () => console.log(`Now browse to localhost:${PORT}`));
