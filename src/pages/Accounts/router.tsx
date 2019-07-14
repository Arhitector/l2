import React from "react";
import { Route } from 'react-router-dom';

import AccountPage from './index';

const routerAccountPage = (<Route exact path="/accounts" render={props => <AccountPage />} />);

export default routerAccountPage;