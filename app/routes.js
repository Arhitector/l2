
import Raven from 'raven-js';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err);
};

const loadModule = cb => (componentModule) => {
  try {
    cb(null, componentModule.default);
  } catch (err) {
    const user = JSON.stringify(localStorage.getItem('user'));
    Raven.logException(err, {
      user: user.login,
    });
  }
};

function redirectToLogin(nextState, replace) {
  const token = window.localStorage.getItem('access-token');
  if (token) {
    return token;
  }
  replace({
    pathname: '/signin',
    state: { nextPathname: nextState.location.pathname },
  });
}

export default function createRoutes(store) {
  return [
    {
      onEnter: (nextState, replace) => {
        redirectToLogin(nextState, replace, store);
      },
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('./modules/Base'),
        ]);

        const renderRoute = loadModule(cb, store);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
      childRoutes: [
        {
          path: 'base',
          name: 'base',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('./modules/Db'),
            ]);

            const renderRoute = loadModule(cb, store);

            importModules.then(([component]) => {
              renderRoute(component);
            }).catch(errorLoading);
          },
        },
        {
          path: 'respawn',
          name: 'respawn',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('./modules/Respawn'),
            ]);

            const renderRoute = loadModule(cb, store);

            importModules.then(([component]) => {
              renderRoute(component);
            }).catch(errorLoading);
          },
        },
      ],
    },
    {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('./modules/NotFoundPage'),
        ]);

        const renderRoute = loadModule(cb, store);

        importModules.then(([component]) => {
          renderRoute(component);
        }).catch(errorLoading);
      },
    },
  ];
}
