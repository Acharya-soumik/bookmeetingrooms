import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Login from "../Auth/Login";
import Home from "../Container/Home";
import AddMeeting from "../Container/AddMeeting";
import BookingPage from "../Container/BookingPage";
import { connect } from "react-redux";
import { logout } from "../Redux/authAction";
import Booking from "../Container/Booking";

const pageNotFound = () => {
  return (
    <div className="container">
      <div className="error">
        <p className="p">4</p>
        <span className="dracula">
          <div className="con">
            <div className="hair"></div>
            <div className="hair-r"></div>
            <div className="head"></div>
            <div className="eye"></div>
            <div className="eye eye-r"></div>
            <div className="mouth"></div>
            <div className="blod"></div>
            <div className="blod blod2"></div>
          </div>
        </span>
        <p className="p">4</p>

        <div className="page-ms">
          <p className="page-msg">
            Oops, the page you're looking for Disappeared
          </p>
          <Link to="/" className="go-back btn">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};
function Routes({ token, auth, log_out }) {
  return (
    <div className=" p-3">
      <h2 className=" display-5">The Meeting Room</h2>
      <ul className="nav justify-content-center">
        <li className="mr-auto image">
          <img
            className="nav-img"
            src="https://static.thenounproject.com/png/1617283-200.png"
          />
        </li>
        <li className="nav-item">
          <Link to="/booking" className="nav-link text-dark">
            Bookings
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="text-dark nav-link active">
            Home
          </Link>
        </li>
        <li className="nav-item">
          {auth ? (
            <button className="btn btn-dark" onClick={() => log_out()}>
              Log Out
            </button>
          ) : (
            <Link to="/login" className="text-dark nav-link">
              Login
            </Link>
          )}
        </li>
      </ul>
      <hr />
      {token.length ? <span>Your Token Id is : {token}</span> : <span></span>}
      <div className="">
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route exact path="/login" component={() => <Login />} />
          <Route exact path="/booking" component={() => <Booking />} />
          <Route
            exact
            path="/add"
            component={props => <AddMeeting {...props} />}
          />
          <Route
            exact
            path="/booking/:name"
            component={props => <BookingPage {...props} />}
          />
          <Route render={pageNotFound} />
        </Switch>
      </div>
    </div>
  );
}
const mapStateToProps = state => ({
  token: state.auth.token,
  auth: state.auth.isAuth
});
const mapDispatchToProps = dispatch => ({
  log_out: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
