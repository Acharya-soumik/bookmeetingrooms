import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_SUCCESS
} from "./actionType";

const initialState = {
  isAuth: false,
  token: [],
  message: "",
  err: "",
  register: ""
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case LOGIN_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        token: action.payload
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        err: action.payload
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        register: action.payload
      };

    default:
      return state;
  }
};

export default authReducer;
