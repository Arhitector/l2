/**
 * Created by Max Kudla.
 */
import { assign, reduce } from 'lodash';

export default function (type, args) {
  return function actionCreator(...data) {
    let action;

    if (args) {
      const options = {};
      action = assign({
        type,
      }, reduce(args, (_, option, index) => {
        options[option] = data[index];
        return options;
      }, options));
    } else {
      action = {
        type,
        data: data[0],
      };
    }

    return action;
  };
}
