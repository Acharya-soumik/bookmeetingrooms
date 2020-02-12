import {
  ADD_NEW_ROOM,
  SEARCH_ROOMS,
  SHOW_BOOKINGS,
  FILTER_BOOKINGS
} from "./actionType";

export const add_new_room = obj => {
  return {
    type: ADD_NEW_ROOM,
    payload: obj
  };
};

export const searchMeetingRooms = name => {
  return {
    type: SEARCH_ROOMS,
    payload: name
  };
};

export const showBookings = item => {
  return {
    type: SHOW_BOOKINGS,
    payload: item
  };
};

export const filterBookings = item => {
  return {
    type: FILTER_BOOKINGS,
    payload: item
  };
};
