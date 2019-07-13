import React from "react";
import { Route } from 'react-router-dom';

import RespawnPage from './index';

const routerRespawnPage = (<Route exact path="/respawn" render={props => <RespawnPage />} />);

export default routerRespawnPage;