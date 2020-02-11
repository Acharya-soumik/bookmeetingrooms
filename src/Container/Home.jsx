import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import Table from "./Table";
import { searchMeetingRooms } from "../Redux/meetingAction";

function Home({ auth, rooms, searchRoom, searchResult }) {
  const [pageNo, setPageNo] = useState(1);
  const [noOfData, setNoOfData] = useState(6);
  const [search, setSearch] = useState("");
  const indexPrevData = Math.floor((pageNo - 1) * noOfData);
  const indexCurrData = pageNo * noOfData;
  const dataToShow = rooms.slice(indexPrevData, indexCurrData);
  const changePageData = num => {
    setNoOfData(num);
    return setPageNo(1);
  };

  const changeHandler = e => {
    setSearch(e.target.value);
    searchRoom(e.target.value);
  };

  const changePage = num => setPageNo(num);
  if (!auth) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <div>
        <div className="col-md-5 m-auto p-4">
          <input
            className="form-control"
            placeholder="search meeting rooms "
            value={search}
            onChange={changeHandler}
          />
          {searchResult.length ? (
            searchResult.map(ele => {
              return (
                <ul className="nav border border-dark rounded">
                  <li className="nav-item m-1">Name: {ele.name}</li>
                  <li className="nav-item m-1">Capacity: {ele.capacity}</li>
                  <li className="nav-item m-1">Price {ele.price}</li>
                  <li className="nav-item m-1">
                    Available:
                    {ele.available ? <span>Yes</span> : <span>No</span>}
                  </li>
                </ul>
              );
            })
          ) : (
            <span></span>
          )}
        </div>
        <Link to="/add" className="text-light">
          Add New Meeting Room
        </Link>
        <div className="col-md-10 m-auto p-4">
          <h2>All Meeting Rooms</h2>
          <Table
            data={dataToShow}
            totalData={rooms}
            changePage={changePage}
            changePageData={changePageData}
          />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  auth: state.auth.isAuth,
  rooms: state.rooms.allrooms,
  searchResult: state.rooms.searchResult
});
const mapDispatchToProps = dispatch => ({
  searchRoom: item => dispatch(searchMeetingRooms(item))
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
