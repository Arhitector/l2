import React from "react";
import { Route } from 'react-router-dom'

import Database from './index';

const routerDatabasePage = (<Route path="/db" render={() => <Database  />} />);

export default routerDatabasePage;