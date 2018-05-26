export const rooms = [
  {
    name: 'single',
    abbr: 'ROOM_TYPE_SINGLE',
    displayAbbr: 'SNGL',
    capacity: 1,
  },
  {
    name: 'double',
    abbr: 'ROOM_TYPE_DOUBLE',
    displayAbbr: 'DBL',
    capacity: 2,
  },
  {
    name: 'twin',
    abbr: 'ROOM_TYPE_TWIN',
    displayAbbr: 'TWN',
    capacity: 2,
  },
  {
    name: 'tripple',
    abbr: 'ROOM_TYPE_TRIPLE',
    displayAbbr: 'TRPL',
    capacity: 3,
  },
  {
    name: 'quadro',
    abbr: 'ROOM_TYPE_QUAD',
    displayAbbr: 'QDRO',
    capacity: 4,
  },
];

export const meal = [
  {
    name: 'BB',
  },
  {
    name: 'HB',
  },
  {
    name: 'FB',
  },
];

export const statuses = {
  // AGENCY_REQUEST: 'AGENCY_REQUEST',
  // AGENCY_CANCEL_REQUEST: 'AGENCY_CANCEL_REQUEST',
  // AGENCY_SESSION_REQUEST: 'AGENCY_SESSION_REQUEST',
  // HOTEL_PROPOSAL: 'HOTEL_PROPOSAL',
  // AGENCY_PROPOSAL: 'AGENCY_PROPOSAL',
  // CANCEL_AGENCY_PROPOSAL: 'CANCEL_AGENCY_PROPOSAL',
  AGENCY_CONFIRM: 'AGENCY_CONFIRM',
  // AGENCY_CUSTOM_REQUEST: 'AGENCY_CUSTOM_REQUEST',
  CREATED: 'CREATED',
  // DEFAULT: 'DEFAULT',
  // UNCONFIRMED_PROPOSALS_CANCEL: 'UNCONFIRMED_PROPOSALS_CANCEL',
  // UNCONFIRMED_PROPOSALS_CONFIRMED: 'UNCONFIRMED_PROPOSALS_CONFIRMED',
  // UNCONFIRMED_PROPOSALS_REQUEST: 'UNCONFIRMED_PROPOSALS_REQUEST',
  // UNCONFIRMED_PROPOSALS_STATUS_REQUESTED: 'REQUESTED',
  // UNCONFIRMED_PROPOSALS_STATUS_CONFIRMED: 'CONFIRMED',
  ROOMING_STATUS_CONFIRMED: 'CONFIRMED',
  // ROOMING_STATUS_CANCELED: 'CANCELED',
  // ROOMING_STATUS_WAIT_FOR_CONFIRMATION: 'WAIT_FOR_CONFIRMATION',
  // PROLONG_STATUS_REQUEST: 'PROLONG_STATUS_REQUEST',
  // OPTION_RESTORE_STATUS_REQUEST: 'OPTION_RESTORE_STATUS_REQUEST',
};

export const statusesArray = Object.keys(statuses).map((status, index) => ({
  name: statuses[status].toLowerCase().split('_').join(' '),
  value: status,
  _id: index,
}));


export const stringToColor = (str = '', opacity = 0.7) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash); // eslint-disable-line no-bitwise
  }
  const color = [];
  for (let i = 0; i < 3; i++) {
    const value = parseInt((hash >> (i * 8)).toString(10).substr(-3) / 1000 * 200, 10); // eslint-disable-line no-bitwise
    color.push(value);
  }
  const min = Math.min(...color);
  color[color.indexOf(min)] = 0;
  return `rgba(${color.join(',')},${opacity})`;
};
