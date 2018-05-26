import {
  AGENCY_CONFIRM,
  AGENCY_PROPOSAL,
  AGENCY_SESSION_REQUEST,
  getDaysToCheckIn,
  getDaysToCheckInRooming,
  HOTEL_PROPOSAL,
} from 'app/global-constants';
import { colors } from 'app/styles/variables';
import { min } from 'lodash';

export const DUE_DAYS_RED = 1;
export const DUE_DAYS_YELLOW = 3;
export const ROOMING_DUE_DAYS_RED = 2;
export const ROOMING_DUE_DAYS_YELLOW = 10;
export const isRoomingReminder = reminder =>
  ((reminder.sessionStatus === AGENCY_CONFIRM ||
    reminder.sessionStatus === AGENCY_PROPOSAL && reminder.lastSessionStatus === AGENCY_CONFIRM
  ) && reminder.roomingConfirmedLength === 0 && reminder.roomingWaitingLength === 0);

export const isNeedRoomingReminder = reminder =>
  ((reminder.sessionStatus === AGENCY_CONFIRM ||
    reminder.sessionStatus === AGENCY_PROPOSAL && reminder.lastSessionStatus === AGENCY_CONFIRM
  ) && reminder.roomingConfirmedLength === 0 && reminder.roomingWaitingLength === 0);

export const isOptionalReminder = reminder =>
  reminder.sessionStatus === AGENCY_CONFIRM && reminder.sessionUnconfirmedProposalsLength > 0 ||
  reminder.sessionStatus === HOTEL_PROPOSAL;

export const isShowOptionalReminder = reminder => isOptionalReminder(reminder) && isShowBell(reminder);
export const isShowNeedRoomingReminder = reminder => isNeedRoomingReminder(reminder) && isShowBell(reminder);
export const isShowRoomingReminder = reminder => isRoomingReminder(reminder) && isShowBell(reminder);

export const isShowBell = (reminder) => {
  if (!reminder) {
    return false;
  }
  if (isOptionalReminder(reminder) ||
    reminder.sessionStatus === AGENCY_SESSION_REQUEST) {
    const daysToCheckIn = getDaysToCheckIn(reminder);
    return daysToCheckIn <= DUE_DAYS_YELLOW || reminder.sessionStatus === AGENCY_SESSION_REQUEST;
  }
  if (isRoomingReminder(reminder)) {
    const daysToCheckInRooming = getDaysToCheckInRooming(reminder);
    return daysToCheckInRooming <= ROOMING_DUE_DAYS_YELLOW;
  }
  return false;
};
export const isRed = (daysToCheckIn, redLimit) => daysToCheckIn <= redLimit;
export const isRoomingRed = (reminder, daysToCheckIn) => isRoomingReminder(reminder) && isRed(daysToCheckIn, ROOMING_DUE_DAYS_RED);

export const getBellColor = (reminder) => {
  const daysToCheckIn = getDaysToCheckIn(reminder);
  const daysToCheckInRooming = getDaysToCheckIn(reminder, true);
  const isRedBell = isRoomingRed(reminder, daysToCheckInRooming) || isRed(daysToCheckIn, DUE_DAYS_RED);
  return isRedBell ? colors.brandDanger : colors.brandWarning;
};

export const getDaysLeftByArray = (reminders) => {
  const days = min(reminders.map(getDaysToCheckIn));
  return days > 0 ? days : 0;
};

export const getDaysLeftByArrayRooming = (reminders) => {
  const days = min(reminders.map(getDaysToCheckInRooming));
  return days > 0 ? days : 0;
};

export const getBellColorByArray = (reminders) => {
  let isRedBell = false;
  reminders.forEach((reminder) => {
    const daysToCheckIn = getDaysToCheckIn(reminder);
    isRedBell = isRedBell || isRoomingRed(reminder, daysToCheckIn) || isRed(daysToCheckIn, DUE_DAYS_RED);
  });
  return isRedBell ? colors.brandDanger : colors.brandWarning;
};
