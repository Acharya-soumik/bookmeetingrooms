import { ADD_NEW_ROOM } from "./actionType";

export const add_new_room = obj => {
  return {
    type: ADD_NEW_ROOM,
    payload: obj
  };
};
