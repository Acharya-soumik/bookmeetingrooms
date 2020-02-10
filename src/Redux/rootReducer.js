import { combineReducers } from "redux";
import authReducer from "./authReducer";
import meetingReducer from "./meetingReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  rooms: meetingReducer
});
