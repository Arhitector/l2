/**
 * Created by Max Kudla.
 */

import { formatMessage } from 'app/providers/LanguageProvider';

const getFormattedMessage = (id, defaultMessage) => formatMessage({
  id,
  defaultMessage: defaultMessage || id,
});

export default {
  get IncorrectUsernameOrPassword() {
    return getFormattedMessage('IncorrectUsernameOrPassword', 'Incorrect username or password');
  },

  get Login() {
    return getFormattedMessage('Login');
  },

  get Offers() {
    return getFormattedMessage('Offers');
  },

  get PageNotFound() {
    return getFormattedMessage('PageNotFound', 'Page Not Found');
  },
  get Password() {
    return getFormattedMessage('Password');
  },

  get Reminders() {
    return getFormattedMessage('Reminders');
  },
  get Requests() {
    return getFormattedMessage('Requests');
  },

  get Search() {
    return getFormattedMessage('Search');
  },
  get SignIn() {
    return getFormattedMessage('Sign in');
  },
  get Statistics() {
    return getFormattedMessage('Statistics');
  },

  get Tours() {
    return getFormattedMessage('Tours');
  },
};
