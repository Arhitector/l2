/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

/* eslint-disable import/first */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';
// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Perf from 'react-addons-perf';

import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { useScroll } from 'react-router-scroll';
import 'sanitize.css/sanitize.css';

import { ApolloProvider } from "react-apollo";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { ThemeProvider } from 'styled-components';

import reducers from './reducers';

import SystemEventAndNotificationsProvider from 'providers/SystemEventAndNotificationsProvider';

// Load the favicon, the manifest.json file and the .htaccess file
/* eslint-disable import/no-unresolved, import/extensions */
/* eslint-enable import/no-unresolved, import/extensions */

// Import Language Provider
import LanguageProvider from 'app/providers/LanguageProvider';

import RavenProvider from 'app/providers/RavenProvider';
import { env } from 'app/environment';

import { apolloClient } from 'app/apollo';

// Import i18n messages
import { translationMessages } from 'app/i18n';

// Import CSS reset and Global Styles
import 'app/global-styles';

// Import StyledComponent Theme Provider
import themeStyled from 'app/theme-styled';

// Import Material-UI Theme Provider
import davinciTheme from 'app/theme-mui';

// Import root routes
import createRoutes from 'app/routes';

const initialState = {};

injectTapEventPlugin();

if (env === 'development') {
  window.Perf = Perf;
}

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(thunk, apolloClient.middleware()),
    (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f, // eslint-disable-line
  ),
);

const rootRoute = {
  childRoutes: createRoutes(store),
};

const render = (messages) => {
  ReactDOM.render(
    <ThemeProvider theme={themeStyled}>
      <ApolloProvider client={apolloClient} store={store}>
        <RavenProvider store={store}>
          <SystemEventAndNotificationsProvider>
            <LanguageProvider messages={messages}>
              <MuiThemeProvider muiTheme={getMuiTheme(davinciTheme)}>
                <Router
                  history={browserHistory}
                  routes={rootRoute}
                  render={applyRouterMiddleware(useScroll())}
                />
              </MuiThemeProvider>
            </LanguageProvider>
          </SystemEventAndNotificationsProvider>
        </RavenProvider>
      </ApolloProvider>
    </ThemeProvider>,
    document.getElementById('app'),
  );
};

// Hot reloadable translation json files
if (module.hot) {
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept('./i18n', () => {
    render(translationMessages);
  });
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  (new Promise((resolve) => {
    resolve(import('intl'));
  }))
    .then(() => Promise.all([
      import('intl/locale-data/jsonp/en.js'),
    ])).then(() => render(translationMessages))
    .catch((err) => {
      throw err;
    });
} else {
  render(translationMessages);
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (env === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
