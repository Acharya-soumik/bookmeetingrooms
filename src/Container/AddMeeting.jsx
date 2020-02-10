import React, { useState } from "react";
import { connect } from "react-redux";
import { add_new_room } from "../Redux/meetingAction";

function AddMeeting({ addRoom, meetingRooms }) {
  const [name, setname] = useState("");
  const [floor, setFloor] = useState("");
  const [price, setPrice] = useState("");
  const [capacity, setCapacity] = useState("");

  const clickhandler = () => {
    let obj = {
      id: meetingRooms.length,
      floor: floor,
      name: name,
      price: price,
      capacity: capacity
    };
    addRoom(obj);
  };
  return (
    <div>
      <h2>Add new Meeting</h2>
      <div className="col-md-8 m-auto p-4 border border-dark rounded">
        <input
          className="form-control m-3"
          placeholder="Enter Meeting Room Name"
          onChange={e => setname(e.target.value)}
        />
        <input
          className="form-control m-3"
          placeholder="Enter Floor"
          onChange={e => setFloor(e.target.value)}
        />
        <input
          className="form-control m-3"
          type="number"
          placeholder="Enter Room Capacity"
          onChange={e => setCapacity(e.target.value)}
        />
        <input
          className="form-control m-3"
          type="number"
          placeholder="Price Per Day"
          onChange={e => setPrice(e.target.value)}
        />
        <button className="btn btn-outline-dark" onClick={clickhandler}>
          Add Meeting Room
        </button>
      </div>
    </div>
  );
}
const mapStateToProps = state => ({
  meetingRooms: state.rooms.allrooms
});
const mapDispatchToProps = dispatch => ({
  addRoom: item => dispatch(add_new_room(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMeeting);
