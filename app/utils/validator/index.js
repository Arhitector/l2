export default class Validation {
  constructor(validators) {
    this.validators = validators;
    this.errors = {};
    this.data = {};
  }

  getErrors(data) {
    this.errors = {};
    this.data = data;
    this.validators.forEach((validator) => {
      this.errors = validator.addError(this.errors, data);
    });
    this.validators.forEach((validator) => {
      this.errors = validator.addError(this.errors, data);
    });
    return this.errors;
  }

  isValid(data) {
    const errors = this.getErrors(data);
    return Object.keys(errors).length === 0;
  }
}
