const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = cb => (componentModule) => {
  try {
    cb(null, componentModule.default);
  } catch (err) {
    console.log('ERROR', err);
  }
};

function redirectToLogin(nextState, replace) {
  const url = new URL(window.location.href);
  const token = url.searchParams.get('access-token');
  token && localStorage.setItem('access-token', token);
  const localToken = localStorage.getItem('access-token');
  !localToken && replace('/signin');
}

export default function createRoutes(store) {
  return [
    {
      onEnter: (nextState, replace) => {
        redirectToLogin(nextState, replace, store);
      },
      path: '/',
      name: 'home',
      indexRoute: {
        onEnter: (nextState, replace) => replace('/home'),
      },
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
          path: 'respawn',
          name: 'respawn',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('./modules/Respawn'),
            ]);
            const renderRoute = loadModule(cb, store);

            importModules.then(([component]) => {
              renderRoute(component);
            });
            importModules.catch(errorLoading);
          },
        },
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
            });
            importModules.catch(errorLoading);
          },
        },
      ],
    },
    {
      path: '/signin',
      name: 'signin',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('./modules/base/routes/HomePage'),
        ]);

        const renderRoute = loadModule(cb, store);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('./modules/NotFoundPage/index'),
        ]);

        const renderRoute = loadModule(cb, store);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
  ];
}
