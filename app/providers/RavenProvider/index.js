/**
 * Created by Max Kudla.
 */

import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import invariant from 'invariant';
import Raven from 'raven-js';
import { API_SENTRY_DSN } from 'app/environment';

export default class RavenProvider extends Component {
  static propTypes = {
    store: PropTypes.object,
    context: PropTypes.object,
    children: PropTypes.element,
  };

  static childContextTypes = {
    captureException: PropTypes.func,
  };

  constructor(props, context) {
    super(props, context);

    invariant(
      props.store,
      'RavenProvider was not passed a store instance. Make ' +
      'sure you pass in your redux store via the "store" prop.',
    );

    Raven
      .config(API_SENTRY_DSN)
      .install();
  }

  getChildContext() {
    return {
      captureException: (err, getContext = {}) => {
        const context = typeof getContext === 'function' ? getContext(this.props.store) : getContext;
        const extra = Object.assign({}, this.props.context, context);
        Raven.captureException(err, { extra });
      },
    };
  }

  render() {
    return React.Children.only(this.props.children);
  }
}
