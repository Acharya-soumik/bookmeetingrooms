import { ADD_NEW_ROOM, SEARCH_ROOMS } from "./actionType";

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
