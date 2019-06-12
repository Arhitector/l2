import React from "react";
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Base from './pages/Base';

import routerHomePage from './pages/home/router';
import routerDatabasePage from './pages/database/router';
import routerNotFoudPage from './pages/NotFoundPage/router';

const routes = [
  routerHomePage,
  routerDatabasePage,
  routerNotFoudPage,
];

const Routers = () => {
  return (
    <Router>
      <Switch>
        <Base>
        {
          routes.map((Component, index) => React.cloneElement(Component, { key: index }))
        }
        </Base>
      </Switch>
    </Router>
  );
};

export default Routers;