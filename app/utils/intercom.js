
import { intercomAppId } from '../global-constants.js';

let intercom;
const load = (cb) => {
  intercom = function (...arg) {
    intercom.c(arg);
  };
  intercom.q = [];
  intercom.c = function (args) {
    intercom.q.push(args);
  };
  window.Intercom = intercom;
  const s = document.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  s.src = `https://widget.intercom.io/widget/${intercomAppId}`;
  const x = document.getElementsByTagName('body')[0];
  x.onload = cb;
  x.appendChild(s);
};

export default {
  init: (data) => {
    window.Intercom('boot', {
      app_id: intercomAppId,
      ...data,
    });
  },
  load,
  update: (data = {}) => {
    window.Intercom('update', data);
  },
  shutdown: () => {
    window.Intercom('shutdown');
  },
};
