import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Booking({ auth, booking }) {
  return (
    <div>
      <h2>Your Bookings...</h2>
      {auth ? (
        <div>
          {booking.map(ele => (
            <p>
              Meeting Room Name is <b>{ele.name} </b>& capacity is
              <b> {ele.capacity} </b> , price is <b> {ele.price} </b> per day .
            </p>
          ))}
        </div>
      ) : (
        <>
          <h2>Login , In order to show your bookings</h2>
          <Link to="/login">
            <button className="btn btn-success">Navigate to login page</button>
          </Link>
        </>
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  auth: state.auth.isAuth,
  booking: state.rooms.userBooking
});
export default connect(mapStateToProps, null)(Booking);
