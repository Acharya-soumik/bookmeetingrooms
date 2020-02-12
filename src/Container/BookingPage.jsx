import React, { useState } from "react";
import { connect } from "react-redux";
import swal from "sweetalert";
import { showBookings } from "../Redux/meetingAction";

function BookingPage(props) {
  const [loading, setLoading] = useState(false);
  let name = props.match.params.name;
  let room = props.allData.find(ele => {
    return ele.name == name;
  });

  const clickHandler = () => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      props.book(room);
      swal("Booking Confirmed!", "Your booking has been made!", "success");
      props.history.push("/");
    }, 3000);
    return () => clearTimeout(timer);
  };

  let date = Date.now();
  console.log(date);
  if (loading) {
    return (
      <div>
        <div className="spinner-border text-dark  " role="status"></div>
        <p>Booking Your Room...</p>
      </div>
    );
  } else {
    return (
      <div>
        <h3 className="text-dark">Welcome User</h3>
        <span>Do You want to book this room :</span>
        <p>Your Booking Id is : {date}</p>
        <div className="col-md-3 p-2 m-auto border border-dark rounded">
          <p className="lead text-dark">Name: {room.name}</p>
          <hr />
          <p className="lead text-dark">Floor: {room.floor}</p>
          <p className="lead text-dark">Capacity: {room.capacity}</p>
          <p className="lead text-dark">Price: {room.price}</p>
        </div>
        <div className="col-md-4 m-auto">
          <h5>Book Meeting Room</h5>
          <span className="form-control m-2">
            Start Date : <input type="date" />
          </span>
          <span className="form-control m-2">
            End Date : <input type="date" />
          </span>
          <button className="btn btn-success my-4" onClick={clickHandler}>
            Book Now
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  allData: state.rooms.allrooms
});
const mapDispatchToProps = dispatch => ({
  book: item => dispatch(showBookings(item))
});
export default connect(mapStateToProps, mapDispatchToProps)(BookingPage);
