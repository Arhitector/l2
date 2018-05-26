/**
 * Created by Max Kudla.
 */

import { cloneDeep } from 'lodash';

const SYSTEM_RELOAD_PAGE = 'SYSTEM_RELOAD_PAGE';

const createHandler = (type, callback) => (event) => {
  if (event.type === type) {
    const args = cloneDeep(arguments);
    callback.apply(this, args);
    return true;
  } else { // eslint-disable-line
    return false;
  }
};

const consoleHandler = createHandler('log', console.log); // eslint-disable-line 
const reloadHandler = createHandler(SYSTEM_RELOAD_PAGE, () => window.location.reload());

export default (event) => {
  [
    reloadHandler,
    consoleHandler,
  ].some(handle => handle(event));
};
