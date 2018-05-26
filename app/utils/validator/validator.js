import React from 'react' // eslint-disable-line
import { FormattedMessage } from 'react-intl';

export default class Validator {
  constructor(field, config = {}) {
    this.type = 'required';
    this.field = field;
    this.config = config;
    this.messageValues = {};
  }

  addError(errors, data, index) {
    const errorText = this.getError(data);
    if (errorText) {
      errors[this.getField()] = { errorText, index };
    }
    return errors;
  }

  setType(type) {
    this.type = type;
  }

  setMessageValues(obj) {
    this.messageValues = obj;
  }

  getConfig() {
    return this.config;
  }

  getField() {
    return this.field;
  }

  getMessage() {
    const { message, text, messages } = this.config;
    if (text) {
      return text;
    }
    if (message) {
      return <FormattedMessage {...message} />;
    }
    if (messages) {
      const obj = {
        ...messages[`validation_${this.type}_${this.field}`],
        ...this.messageValues,
      };

      return <FormattedMessage {...obj} />;
    }
    return 'no message';
  }
}
