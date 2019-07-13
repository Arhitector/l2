import React from "react";
import { Route } from 'react-router-dom'

import NotFoudPage from './index';

const routerNotFoudPage = (<Route path="*" render={() => <NotFoudPage />} />);

export default routerNotFoudPage;