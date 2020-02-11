import { ADD_NEW_ROOM, SEARCH_ROOMS } from "./actionType";
import meeting from "../meeting";

const initialState = {
  allrooms: [...meeting],
  searchResult: [],
  avaiable: []
};
const meetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_ROOM:
      alert("Meeting Room Added !!");
      return {
        ...state,
        allrooms: [...state.allrooms, action.payload]
      };
    case SEARCH_ROOMS:
      let name = action.payload.toLowerCase();
      let filterArr = state.allrooms.filter(ele =>
        ele.name.toLowerCase().includes(name)
      );
      if (name == "") {
        filterArr = [];
      }
      return {
        ...state,
        searchResult: [...filterArr]
      };

    default:
      return state;
  }
};

export default meetingReducer;
