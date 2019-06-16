import React from "react";
import { Route } from 'react-router-dom'

import CalculatorsPage from './index';

const routerCalculatorsPage = (<Route path="/calculators" render={props => <CalculatorsPage {...props} /> } />);

export default routerCalculatorsPage;