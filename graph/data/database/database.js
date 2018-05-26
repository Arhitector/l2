
import { trips } from './trips';
import { tours } from './tours';
import { users } from './users';

const jwt = require('jsonwebtoken');

const jwtSecret = 'asdfasdfasdfasdf';

export const getToken = ({ username, password }) => new Promise((resolve) => {
  console.log('getToken ', username, password);
  resolve({ token: jwt.sign({ username, password }, jwtSecret) });
});

export const getUserByName = userName => new Promise((resolve) => {
  resolve(users.find(({ username }) => username === userName));
});

export const getUser = userId => new Promise((resolve) => {
  resolve(users.find(({ _id }) => _id == userId));
});

export const getTours = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(tours);
  }, 200);
});

export const getTour = tourId => new Promise((resolve) => {
  setTimeout(() => {
    resolve(tours.find(({ _id }) => _id == tourId));
  }, 100);
});

export const getTrips = tourId => new Promise((resolve) => {
  resolve(trips.filter(trip => trip.tour._id == tourId));
});

export const getTrip = tripId => new Promise((resolve) => {
  resolve(trips.find(({ _id }) => _id == tripId));
});

export const getSessions = tripId => new Promise((resolve) => {
  const trip = trips.filter(({ _id }) => _id == tripId);
  resolve(trip[0].sessions);
});

export const getSession = sessionId => new Promise((resolve) => {
  let session = {};
  trips.forEach((trip) => {
    trip.sessions.forEach((s) => {
      if (s._id === sessionId) session = s;
    });
  });
  resolve(session);
});

