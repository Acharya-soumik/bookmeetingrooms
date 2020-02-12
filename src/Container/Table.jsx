import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { filterBookings } from "../Redux/meetingAction";

function Table({ data, totalData, changePage, changePageData, filter }) {
  let paginate = [];
  console.log(paginate);
  if (data.length > paginate.length) {
    for (let i = 1; i <= Math.floor(totalData.length / data.length); i++) {
      paginate.push(i);
    }
  }
  const changeHandler = e => {
    filter(e.target.value);
  };
  return (
    <div>
      <div className="col-md-8 m-2 row  m-auto">
        <div className="mx-4 row">
          <select className="form-control" onChange={changeHandler}>
            <option disabled selected>
              Filter Data
            </option>
            <option>Show All</option>
            <option>Show Available</option>
            <option>Price Lower to Higher</option>
            <option>Price Higher to Lower</option>
          </select>
        </div>
        <div>
          <select
            className="form-control"
            onChange={e => {
              changePageData(e.target.value);
            }}
          >
            <option disabled selected>
              Change Items to show per page
            </option>
            <option>6</option>
            <option>12</option>
            <option>25</option>
            <option>50</option>
          </select>
        </div>
      </div>
      {/* https://source.unsplash.com/random/?office,room */}
      <div className="row col-md-12 mt-4">
        {data.map(ele => {
          return (
            <div className="col-md-4 my-2 my_card" key={ele.id}>
              <div class="card">
                <img
                  src="https://source.unsplash.com/random/?office,room"
                  class="card-img"
                  alt="..."
                />
                <div class="card-body">
                  <p class="card-title">{ele.name}</p>
                  <small class="card-text">Rs, {ele.price}</small>
                  <hr />
                  {ele.available ? (
                    <Link to={`/booking/${ele.name}`}>
                      <button className="text-success btn btn-outline-light">
                        Book Now
                      </button>
                    </Link>
                  ) : (
                    <button
                      className="text-muted btn btn-outline-dark"
                      onClick={() =>
                        alert("Sorry Meeting Room not available !")
                      }
                    >
                      Book Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <hr />
      <div className="row container m-auto">
        {paginate.map(ele => {
          return (
            <button
              className="badge m-auto badge-dark m-1"
              onClick={() => {
                return changePage(ele);
              }}
              key={ele}
            >
              Page {ele}
            </button>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  filter: item => dispatch(filterBookings(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
