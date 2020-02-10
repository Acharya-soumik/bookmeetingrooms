import { ADD_NEW_ROOM } from "./actionType";
import meeting from "../meeting";

const initialState = {
  allrooms: [...meeting],
  avaiable: []
};
const meetingReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_NEW_ROOM:
      return {
        ...state,
        allrooms: [...state.allrooms, action.payload]
      };

    default:
      return state;
  }
};

export default meetingReducer;
