import React, { useState } from "react";
import { connect } from "react-redux";
import { login_auth } from "../Redux/authAction";
import { register_auth } from "../Redux/authAction";
import { Redirect } from "react-router-dom";

function Login(props) {
  const [lName, setLname] = useState("");
  const [lPass, setLpass] = useState("");
  const [rName, setRname] = useState("");
  const [rPass, setRpass] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [user, setUser] = useState("");
  const [desc, setDesc] = useState("");
  // login
  const login = () => {
    let obj = {
      name: lName,
      pass: lPass
    };
    props.check_login(obj);
  };
  const register = () => {
    let obj = {
      name: rName,
      email: email,
      user: user,
      pass: rPass,
      mobile: mobile,
      desc: desc
    };
    props.check_register(obj);
  };
  // register

  if (props.auth) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className="row">
        <div className="col-md-6">
          <h2>Login </h2>
          <div className="col-md-6 m-auto border border-light rounded p-4 ">
            <input
              className="form-control my-3"
              placeholder="Enter your Name"
              value={lName}
              onChange={e => setLname(e.target.value)}
            />
            <input
              className="form-control my-3"
              placeholder="Enter Your Password"
              value={lPass}
              type="password"
              onChange={e => setLpass(e.target.value)}
            />
            <button className="btn btn-success" onClick={login}>
              Login
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <h2>Register</h2>
          <div className="col-md-6 m-auto border border-light rounded p-4 ">
            <input
              className="form-control my-3"
              value={rName}
              onChange={e => setRname(e.target.value)}
              placeholder="Enter your Name"
            />
            <input
              className="form-control my-3"
              placeholder="Enter Your Email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              value={user}
              onChange={e => setUser(e.target.value)}
              className="form-control my-3"
              placeholder="Enter your UserName"
            />
            <input
              type="password"
              value={rPass}
              onChange={e => setRpass(e.target.value)}
              className="form-control my-3"
              placeholder="Enter Your Password"
            />
            <input
              type="number"
              value={mobile}
              onChange={e => setMobile(e.target.value)}
              className="form-control my-3"
              placeholder="Enter your Mobile Number"
            />
            <input
              className="form-control my-3"
              placeholder="Add Description"
              value={desc}
              onChange={e => setDesc(e.target.value)}
            />
            <button className="btn btn-danger" onClick={register}>
              Register
            </button>
            <div className="col-md-3">{props.register}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth.isAuth,
  token: state.auth.token,
  err: state.auth.err,
  register: state.auth.register
});
const mapDispatchToProps = dispatch => ({
  check_login: obj => dispatch(login_auth(obj)),
  check_register: obj => dispatch(register_auth(obj))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
