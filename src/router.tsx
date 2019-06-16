import React from "react";
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Base from './pages/Base';

import routerHomePage from './pages/home/router';
import routerDatabasePage from './pages/database/router';
import routerCalculatorsPage from './pages/Calculators/router';
import routerSettingsPage from './pages/SettingsPage/router';
import routerNotFoudPage from './pages/NotFoundPage/router';

const routes = [
  routerHomePage,
  routerDatabasePage,
  routerCalculatorsPage,
  routerSettingsPage,

  routerNotFoudPage,
];

const Routers = () => (
  <Router>
    <Base>
      <Switch>
        {
          routes.map((Component, index) => {
            return ( React.cloneElement(Component, { key: index }) );
          })
        }
      </Switch>
    </Base>
  </Router>
);

export default Routers;