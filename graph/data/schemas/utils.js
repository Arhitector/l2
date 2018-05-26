import { trips } from '../database/trips';
import { tours } from '../database/tours';
import moment from 'moment';

export const CreateTour = (tour) => {
  tour.template.cities.map(city => ({
    ...city,
    stars: [],
  }));
  tour.template.rooms = tour.template.rooms.map((room, i) => ({
    amount: room.amount,
    room: {
      _id: `1234-5555-31232${i}`,
      abbr: 'ROOM_TYPE_SINGLE_ABBR',
      name: 'ROOM_TYPE_SINGLE',
    },
  }));

  const createId = () => {
    const _id = +Number(Math.random() * 10)
      .toFixed(0);
    if (!tours.find(tour => tour._id === _id)) {
      tour._id = `${_id}`;
    } else {
      createId();
    }
  };

  createId();
  const { initialDate } = tour.template;
  const cities = tour.template.cities.map(city => ({
    geonameid: city.geonameid,
    checkIn: initialDate,
    checkOut: moment.utc(new Date())
      .add('days', city.checkOutDiff)
      .format(''),
  }));
  const trip = {
    _id: `${Math.random() * 10}`,
    name: `${tour.name}${initialDate}`,
    tour: {
      _id: tour._id,
      name: `${tour.name}`,
    },
  };

  const sessions = [
    {
      cities,
      rooms: tour.template.rooms,
      status: 'DEFAULT',
      trip,
    },
  ];
  const newTrip = {
    ...trip,
    sessions,
  };
  trips.push(newTrip);

  return {
    ...tour,
    order: parseInt((Math.random() * 10), 10),
    client: `num-${Math.random() * 10}`,
    createdAt: '2018-04-26T11:39:45.604Z',
    createdBy: '5aaf6b343d127c321dfe650e',
    tripDates: [],
  };
};

