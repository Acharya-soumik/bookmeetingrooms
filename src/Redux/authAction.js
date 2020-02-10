import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS
} from "./actionType";
import axios from "axios";

const loginReguest = () => {
  return {
    type: LOGIN_REQUEST
  };
};
const loginSuccess = token => {
  alert("login sucess");
  return {
    type: LOGIN_SUCCESS,
    payload: token
  };
};
const loginFailure = message => {
  alert("invalid data");
  return {
    type: LOGIN_FAILURE,
    payload: message
  };
};

const registerRequest = () => {
  return {
    type: REGISTER_REQUEST
  };
};

const registerSuccess = data => {
  return {
    type: REGISTER_SUCCESS,
    payload: data
  };
};

export const login_auth = item => {
  console.log(item);
  return dispatch => {
    dispatch(loginReguest);
    axios
      .post("http://localhost:8080/auth/login", {
        username: item.name,
        password: item.pass
      })
      .then(data => {
        let token = data.data.token;
        dispatch(loginSuccess(token));
      })
      //   data.token
      .catch(err => dispatch(loginFailure("invalid credentials")));
  };
};

export const register_auth = item => {
  console.log(item);
  return dispatch => {
    axios
      .post("http://localhost:8080/auth/register", {
        name: item.name,
        email: item.email,
        username: item.user,
        password: item.pass,
        mobile: item.mobile,
        description: item.desc
      })
      .then(res => {
        const response = res.data.message;
        dispatch(registerSuccess(response));
      });
  };
};
