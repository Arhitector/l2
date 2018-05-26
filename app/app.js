/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

/* eslint-disable import/first */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

import './styles/app.scss';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Perf from 'react-addons-perf';

import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { useScroll } from 'react-router-scroll';
import 'sanitize.css/sanitize.css';

import { ApolloProvider } from 'react-apollo';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { ThemeProvider } from 'styled-components';

import reducers from './reducers';

// Import Language Provider
import LanguageProvider from 'app/providers/LanguageProvider';

import RavenProvider from 'app/providers/RavenProvider';
import { env } from 'app/environment';

import { apolloClient } from 'app/apollo';

// Import i18n messages
import { translationMessages } from 'app/translations/i18n';

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

// Set up the router, wrapping all Routes in the App component

const store = createStore(
  reducers,
  initialState, // initial state
  compose(
    applyMiddleware(thunk),
    // If you are using the devToolsExtension, you can add it here also
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
            <LanguageProvider store={store} messages={messages}>
              <MuiThemeProvider muiTheme={getMuiTheme(davinciTheme)}>
                <Router
                  history={browserHistory}
                  routes={rootRoute}
                  render={
                    // Scroll to top when going to a new page, imitating default browser behaviour
                    applyRouterMiddleware(useScroll())
                  }
                />
              </MuiThemeProvider>
            </LanguageProvider>
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
  module.hot.accept('./translations/i18n', () => {
    render(translationMessages);
  });
}

// // Chunked polyfill for browsers without Intl support
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
// if (process.env.NODE_ENV === 'production') {
//   require('offline-plugin/runtime').install(); // eslint-disable-line global-require
// }
