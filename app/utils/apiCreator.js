import { create } from 'apisauce';
import { BASE_URL } from 'app/environment';


const apiMonitor = (response) => {
  if (response.data && response.data.message === 'Unauthorized') {
    window.localStorage.clear();
    if (window.location.pathname !== '/signin') {
      // logout()
    }
  }
};

export default () => {
  const token = window.localStorage.getItem('access-token');
  const api = create({
    baseURL: BASE_URL,
    headers: {
      Accept: '*/*',
      'Accept-Language': 'en',
      Authorization: `Bearer ${token}`,
    },
  });

  api.addMonitor(apiMonitor);

  return api;
};
