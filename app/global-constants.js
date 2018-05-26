import moment from 'moment';
// import { create } from 'apisauce';
import Intercom from 'app/utils/intercom';
import { colors } from 'app/styles/variables';
// import _ from 'lodash';

export const API_BASE = process.env.API_BASE;
export const API_BASE_URL_JSON_SERVER = process.env.API_BASE_URL_JSON_SERVER;
export const intercomAppId = process.env.API_INTERCOM_APP_ID;
export const getHeaderConfig = token => ({
  Accept: '*/*',
  'Accept-Language': 'en',
  Authorization: `Bearer ${token}`,
});

export const CITY_SERVER = process.env.API_CITY;
export const JSON_SERVER = 'JSON_SERVER';

export const logout = () => {
  window.localStorage.removeItem('profile');
  window.localStorage.removeItem('jwt-token');
  window.location = '/';
};


export const SINGLE_TOUR = 'SINGLE_TOUR';
export const SERIAL_TOUR = 'SERIAL_TOUR';

// The fake rooms structure, after refactoring should remove!
export const rooms = [{
  _id: '5887434177ce1500fad4cfad',
  abbr: 'ROOM_TYPE_SINGLE_ABBR',
  name: 'ROOM_TYPE_SINGLE',
  order: 5,
},
{
  _id: '5887436277ce1500fad4cfae',
  abbr: 'ROOM_TYPE_TWIN_ABBR',
  name: 'ROOM_TYPE_TWIN',
  order: 4,
},
{
  _id: '58adb2a47aefe204ca56ca46',
  abbr: 'ROOM_TYPE_DOUBLE_ABBR',
  name: 'ROOM_TYPE_DOUBLE',
  order: 3,
},
{
  _id: '588743eb77ce1500fad4cfb0',
  abbr: 'ROOM_TYPE_TRIPLE_ABBR',
  name: 'ROOM_TYPE_TRIPLE',
  order: 2,
},
{
  _id: '5887441077ce1500fad4cfb1',
  abbr: 'ROOM_TYPE_QUAD_ABBR',
  name: 'ROOM_TYPE_QUAD',
  order: 1,
}];

//
// const apiMonitor = (response) => {
//   if (response.data && response.data.message === 'Unauthorized') {
//     window.localStorage.clear();
//     if (window.location.pathname !== '/signin') {
//       logout();
//     }
//   }
// };

export const getProfile = () => window.localStorage.getItem('profile') && JSON.parse(window.localStorage.getItem('profile')) || undefined;

let intercomInited = false;
export const bootIntercom = () => {
  const profile = getProfile();
  if (profile && !intercomInited) {
    const {
      username, name, client, group,
    } = profile;
    intercomInited = true;
    Intercom.init({
      email: username,
      name,
      group,
      client: client._id,
    });
  }
};

export const getFromState = (state, ...path) => {
  const result = state.getIn(path);
  if (result !== null && result && typeof result === 'object' && !Array.isArray(result)) {
    return result.toJS();
  } else if (typeof result === 'boolean' || typeof result === 'string' || typeof result === 'number') {
    return result;
  }
  return undefined;
};

export const getRoomsOrder = rooms => rooms && rooms.map(room => room.name) || ['ROOM_TYPE_TWIN', 'ROOM_TYPE_DOUBLE', 'ROOM_TYPE_SINGLE', 'ROOM_TYPE_TRIPLE', 'ROOM_TYPE_QUAD'];

export const getRoomName = (rooms, room) => {
  if (!rooms) {
    return undefined;
  }
  room = room._id ? room._id : room;
  const roomIndex = rooms.map(r => r._id).indexOf(room);
  if (roomIndex !== -1) {
    return rooms[roomIndex].name;
  }
  return undefined;
};
export const DUE_DAYS_RED = 1;
export const DUE_DAYS_YELLOW = 3;

export const getDaysToCheckInRooming = session => getDaysToCheckIn(session, true);

export const getDaysToCheckIn = (session, isRooming) => {
  let dateTo = moment.utc(session.checkIn);
  if (!isRooming) {
    dateTo = dateTo.subtract(session.dueDays, 'd');
  }
  dateTo.hours(0)
    .minutes(0)
    .seconds(0)
    .milliseconds(0);
  const dateFrom = moment.utc()
    .hours(0)
    .minutes(0)
    .seconds(0)
    .milliseconds(0);

  return dateTo.diff(dateFrom, 'days');
};
export const getColor = (daysToCheckIn) => {
  if (daysToCheckIn <= DUE_DAYS_RED) {
    return colors.brandDanger;
  } else if (daysToCheckIn <= DUE_DAYS_YELLOW) {
    return colors.brandWarning;
  }
  return colors.brandSuccess;
};

export const getOnlyInt = (value) => {
  const nonNumericRegex = /[^0-9]+/g;
  return value
    .replace(nonNumericRegex, '');
};

export const getAppLanguage = () => {
  const profile = getProfile();
  if (profile.lang) {
    return profile.lang;
  }
  return 'en';
};

export const AGENCY_REQUEST = 'AGENCY_REQUEST';
export const AGENCY_CANCEL_REQUEST = 'AGENCY_CANCEL_REQUEST';
export const AGENCY_SESSION_REQUEST = 'AGENCY_SESSION_REQUEST';
export const HOTEL_PROPOSAL = 'HOTEL_PROPOSAL';
export const AGENCY_PROPOSAL = 'AGENCY_PROPOSAL';
export const CANCEL_AGENCY_PROPOSAL = 'CANCEL_AGENCY_PROPOSAL';
export const AGENCY_CONFIRM = 'AGENCY_CONFIRM';
export const AGENCY_CUSTOM_REQUEST = 'AGENCY_CUSTOM_REQUEST';
export const CREATED = 'created';
export const DEFAULT = 'DEFAULT';
export const UNCONFIRMED_PROPOSALS_CANCEL = 'UNCONFIRMED_PROPOSALS_CANCEL';
export const UNCONFIRMED_PROPOSALS_CONFIRMED = 'UNCONFIRMED_PROPOSALS_CONFIRMED';
export const UNCONFIRMED_PROPOSALS_REQUEST = 'UNCONFIRMED_PROPOSALS_REQUEST';
export const UNCONFIRMED_PROPOSALS_STATUS_REQUESTED = 'REQUESTED';
export const UNCONFIRMED_PROPOSALS_STATUS_CONFIRMED = 'CONFIRMED';
export const ROOMING_STATUS_CONFIRMED = 'CONFIRMED';
export const ROOMING_STATUS_CANCELED = 'CANCELED';
export const ROOMING_STATUS_WAIT_FOR_CONFIRMATION = 'WAIT_FOR_CONFIRMATION';
export const PROLONG_STATUS_REQUEST = 'PROLONG_STATUS_REQUEST';
export const OPTION_RESTORE_STATUS_REQUEST = 'OPTION_RESTORE_STATUS_REQUEST';

export const MSG_TYPE_EXPENSIVE = 'MSG_TYPE_EXPENSIVE';
export const MSG_TYPE_TOO_FAR = 'MSG_TYPE_TOO_FAR';
export const MSG_TYPE_HOTEL_LEVEL = 'MSG_TYPE_HOTEL_LEVEL';
export const MSG_TYPE_CUSTOM = 'MSG_TYPE_CUSTOM';
export const MSG_TYPE_HOTEL = 'MSG_TYPE_HOTEL';
export const MSG_TYPE_CANCEL = 'MSG_TYPE_CANCEL';
export const MSG_TYPE_RESTORE_OPTION = 'MSG_TYPE_RESTORE_OPTION';

export const ROOM_TYPE_SINGLE = 'ROOM_TYPE_SINGLE';
export const ROOM_TYPE_TWIN = 'ROOM_TYPE_TWIN';
export const ROOM_TYPE_DOUBLE = 'ROOM_TYPE_DOUBLE';
export const ROOM_TYPE_TRIPLE = 'ROOM_TYPE_TRIPLE';
export const ROOM_TYPE_QUAD = 'ROOM_TYPE_QUAD';

export const getPaxOfRoomType = (roomType = ROOM_TYPE_SINGLE) => {
  switch (roomType) {
    case ROOM_TYPE_QUAD:
      return 4;
    case ROOM_TYPE_TRIPLE:
      return 3;
    case ROOM_TYPE_DOUBLE:
    case ROOM_TYPE_TWIN:
      return 2;
    case ROOM_TYPE_SINGLE:
    default:
      return 1;
  }
};

export const declinedMessages = [
  MSG_TYPE_EXPENSIVE, MSG_TYPE_TOO_FAR, MSG_TYPE_HOTEL_LEVEL, MSG_TYPE_CUSTOM,
];

export const cancelSessionMessages = [
  MSG_TYPE_HOTEL, MSG_TYPE_CANCEL, MSG_TYPE_CUSTOM,
];
