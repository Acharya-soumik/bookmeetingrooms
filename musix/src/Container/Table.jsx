import React from "react";
import { Link } from "react-router-dom";

function Table({ data, totalData, changePage, changePageData }) {
  let paginate = [];
  for (let i = 0; i < Math.floor(totalData.length / data.length); i++) {
    paginate.push(i);
  }
  return (
    <div>
      <div className="col-md-4 ml-auto">
        <select
          className="form-control"
          onChange={e => changePageData(e.target.value)}
        >
          <option>10</option>
          <option>20</option>
          <option>50</option>
          <option>100</option>
        </select>
      </div>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Floor</th>
            <th scope="col">Room Name</th>
            <th scope="col">Capacity</th>
            <th scope="col">Rate perday</th>
            <th scope="col">Status</th>
            <th scope="col">Book Now</th>
          </tr>
        </thead>
        <tbody>
          {data.map(ele => {
            return (
              <tr key={ele.id}>
                <th scope="row">{ele.id}</th>
                <td>{ele.floor} </td>
                <td>{ele.name}</td>
                <td>{ele.capacity}</td>
                <td>{ele.price}</td>
                {ele.available ? (
                  <td className="text-success">Available</td>
                ) : (
                  <td className="text-danger">Not Avaialble</td>
                )}
                {ele.available ? (
                  <Link to={`/booking/${ele.name}`}>
                    <button className="text-success btn btn-outline-light">
                      Book Now
                    </button>
                  </Link>
                ) : (
                  <button
                    className="text-muted btn btn-outline-dark"
                    onClick={() => alert("not available")}
                  >
                    Book Now
                  </button>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
      {paginate.map(ele => {
        return (
          <button
            className="btn btn-danger m-3"
            onClick={() => changePage(ele)}
          >
            Page {ele}
          </button>
        );
      })}
    </div>
  );
}

export default Table;
