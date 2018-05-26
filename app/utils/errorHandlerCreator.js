/**
 * Created by Max Kudla.
 */
import actionCreator from './actionCreator';

export default function (type, options) {
  const action = actionCreator(type, options);
  return function errorHandlerCreator(data) {
    console.error(data);
    return action(data);
  };
}
