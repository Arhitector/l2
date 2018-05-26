import Validator from './validator';

export default class Min extends Validator {
  constructor(field, config = {}) {
    super(field, config);
    const { min = 3 } = config;
    this.type = 'min';
    this.messageValues = {
      values: { min },
    };
  }

  getError(data) {
    const config = this.getConfig();
    const { min = 3 } = config;
    const name = this.getField();
    if (data[name] && data[name].length < min) {
      return this.getMessage();
    }
    return undefined;
  }
}
