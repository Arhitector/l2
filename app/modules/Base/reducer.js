/*
 *
 * HotelInfoContainer reducer
 *
 */

import { fromJS } from 'immutable';

import {
  LOADING_START,
  LOADING_END,
} from './actions';

function baseReducer(state = fromJS({}), { type }) {
  switch (type) {
    case LOADING_START:
      return state.set('loading', true);

    case LOADING_END:
      return state.set('loading', false);

    default:
      return state;
  }
}

export default baseReducer;
