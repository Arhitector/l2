import React from "react";
import { Route } from 'react-router-dom'

import Settings from './index';

const routerSettingsPage = (<Route path="/settings" render={() => <Settings />} />);

export default routerSettingsPage;