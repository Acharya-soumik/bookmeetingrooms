import React, { useState } from "react";
import { connect } from "react-redux";

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
      alert("Booking Confirmed !");
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
        <h3 className="text-light">Welcome User</h3>
        <span>Do You want to book this room :</span>
        <p>Your Booking Id is : {date}</p>
        <div className="col-md-3 p-2 m-auto border border-dark rounded">
          <p className="lead text-dark">Name: {room.name}</p>
          <hr />
          <p className="lead text-light">Floor: {room.floor}</p>
          <p className="lead text-light">Capacity: {room.capacity}</p>
          <p className="lead text-light">Price: {room.price}</p>
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
const mapDispatchToProps = state => ({});
export default connect(mapStateToProps, mapDispatchToProps)(BookingPage);
