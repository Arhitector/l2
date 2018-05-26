import gql from 'graphql-tag';

export default {
  tour: gql`
    fragment TourFragment on Tour {
      _id,
      name
      past
      client
      template {
        initialDate
        rooms {
          room {
            _id
            abbr
            name
            order
          }
          amount
        }
        cities {
          stars {
            star
            value
          }
          geonameid
          checkInDiff
          checkOutDiff
        }
      }
      order
      isSerial
    }
  `,
  tour_details: gql`
    fragment TourDetailsFragment on Tour {
      _id,
      trips{
        id,
        name
      }
    }
  `,
  trip: gql`
    fragment TripFragment on Trip {
      _id
      name
      createdAt
      tour{
        name
      }
      sessions {
        _id
        checkIn
        checkOut
      }
    }
  `,
  session: gql`
    fragment SessionFragment on Session {
      _id
      checkIn
      checkOut
      num
      geonameid
      rooms{
        room{
          _id
          abbr
          name
          order
        }
        amount
        _id
      }
    }
  `,
};
