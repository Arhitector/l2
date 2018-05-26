import Validator from './validator';

export default class Required extends Validator {
  getError(data) {
    return !data[this.getField()] ? this.getMessage() : undefined;
  }
}
