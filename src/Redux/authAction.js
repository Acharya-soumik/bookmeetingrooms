import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  LOGOUT
} from "./actionType";
import axios from "axios";
import swal from "sweetalert";

const loginReguest = () => {
  return {
    type: LOGIN_REQUEST
  };
};
const loginSuccess = token => {
  swal("Login Success", "You have successfully Logged In", "success");
  return {
    type: LOGIN_SUCCESS,
    payload: token
  };
};
const loginFailure = message => {
  swal("Login Failed", "You Entered Invalid Data", "warning");
  return {
    type: LOGIN_FAILURE,
    payload: message
  };
};
export const logout = () => {
  swal("Logged Out !", "You have Logged out", "success");
  return {
    type: LOGOUT
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
