import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import Table from "./Table";

function Home({ auth, rooms }) {
  const [pageNo, setPageNo] = useState(1);
  const [noOfData, setNoOfData] = useState(10);
  const indexPrevData = (pageNo - 1) * noOfData;
  const indexCurrData = pageNo * noOfData;
  const dataToShow = rooms.slice(indexPrevData, indexCurrData);
  const changePageData = num => setNoOfData(num);

  const changePage = num => setPageNo(num);
  if (!auth) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <div>
        <div className="col-md-5 m-auto p-4">
          <input className="form-control" placeholder="search meeting rooms " />
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
  rooms: state.rooms.allrooms
});
const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
