import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Table({ data, totalData, changePage, changePageData }) {
  let paginate = [];
  for (let i = 1; i <= Math.ceil(totalData.length / data.length); i++) {
    paginate.push(i);
  }
  return (
    <div>
      <div className="col-md-4 ml-auto">
        <select
          className="form-control"
          onChange={e => changePageData(e.target.value)}
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
      {/* https://source.unsplash.com/random/?office,room */}
      <div className="row col-md-12">
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
      <div className="row container">
        {paginate.map(ele => {
          return (
            <button
              className="badge badge-pill badge-danger m-1"
              onClick={() => changePage(ele)}
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
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
