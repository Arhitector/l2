import React from "react";
import { Route } from 'react-router-dom'

import HomePage from './index';

const routerHomePage = (<Route exact path="/" component={HomePage} />);

export default routerHomePage;