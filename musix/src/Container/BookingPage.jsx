import React from "react";
import { connect } from "react-redux";

function BookingPage(props) {
  let name = props.match.params.name;
  let room = props.allData.find(ele => {
    return ele.name == name;
  });
  console.log(room);
  return (
    <div>
      <h1>All details</h1>
      <h4>Name:{room.name}</h4>
      <h4>Floor:{room.floor}</h4>
      <h4>Price:{room.price}</h4>
    </div>
  );
}

const mapStateToProps = state => ({
  allData: state.rooms.allrooms
});
const mapDispatchToProps = state => ({});
export default connect(mapStateToProps, mapDispatchToProps)(BookingPage);
