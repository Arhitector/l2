export default class Validation {
  constructor(validators) {
    this.validators = validators;
    this.errors = {};
    this.data = {};
  }

  getErrors(data, index) {
    this.errors = {};
    this.data = data;
    this.validators.map(validator => this.errors = validator.addError(this.errors, data, index));
    return this.errors;
  }

  isValid(data) {
    const errors = this.getErrors(data);
    return Object.keys(errors).length === 0;
  }
}
