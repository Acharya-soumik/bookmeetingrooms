import {
  ADD_NEW_ROOM,
  SEARCH_ROOMS,
  SHOW_BOOKINGS,
  FILTER_BOOKINGS
} from "./actionType";
import meeting from "../meeting";
import swal from "sweetalert";

const initialState = {
  allrooms: [...meeting],
  searchResult: [],
  avaiable: [],
  copyOfRoom: [...meeting],
  userBooking: []
};
const meetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_ROOM:
      swal("Success", "New Meeting Room Has Been Added", "success");
      return {
        ...state,
        allrooms: [...state.allrooms, action.payload],
        copyOfRoom: [...state.allrooms, action.payload]
      };
    case SEARCH_ROOMS:
      let name = action.payload.toLowerCase();
      let filterArr = state.allrooms.filter(ele =>
        ele.name.toLowerCase().includes(name)
      );
      if (name == "") {
        filterArr = state.copyOfRoom;
      }
      return {
        ...state,
        allrooms: [...filterArr]
      };
    case SHOW_BOOKINGS: {
      let arr = state.allrooms;
      let filtered = arr.filter(ele => ele.name !== action.payload.name);
      arr.avaiable = false;
      let target = action.payload;
      target.available = false;
      return {
        ...state,
        allrooms: [...filtered, target],
        copyOfRoom: [...filtered, target],
        userBooking: [...state.userBooking, target]
      };
    }
    case FILTER_BOOKINGS: {
      let target = action.payload;
      let bookings = [];
      if (target == "Show All") {
        bookings = state.copyOfRoom;
      } else if (target == "Show Available") {
        bookings = state.allrooms.filter(ele => ele.available == true);
      } else if (target == "Price Lower to Higher") {
        bookings = state.allrooms.sort((a, b) => {
          return a.price - b.price;
        });
      } else {
        bookings = state.allrooms.sort((a, b) => {
          return b.price - a.price;
        });
      }
      return {
        ...state,
        allrooms: [...bookings]
      };
    }

    default:
      return state;
  }
};

export default meetingReducer;
