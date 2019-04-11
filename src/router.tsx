import React from "react";
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'

import HomePage from './pages/home';
import Database from './pages/database';
import NotFoudPage from './pages/NotFoundPage';

const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/db" component={Database} />
        <Route path="*" component={NotFoudPage} />
      </Switch>
    </Router>
  );
};

export default Routers;