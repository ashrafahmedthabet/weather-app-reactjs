import React from "react";
const Weather = (props) => {
  return (
    <ul className="list-group">
      <li className="list-group-item d-flex justify-content-between">
        <span>City:</span>
        <span className="information badge badge-primary py-2 px-3">
          {props.city}
        </span>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <span>Country:</span>
        <span className="information badge badge-primary py-2 px-3">
          {props.country}
        </span>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <span>Temprature:</span>
        <span className="information badge badge-primary py-2 px-3">
          {props.temp}
        </span>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <span>Humidtiy:</span>
        <span className="information badge badge-primary py-2 px-3">
          {props.humidity}
        </span>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <span>Clouds:</span>
        <span className="information badge badge-primary py-2 px-3">
          {props.cloud}
        </span>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <span>Description:</span>
        <span className="information badge badge-primary py-2 px-3">
          {props.description}
        </span>
      </li>
    </ul>
  );
};
export default Weather;
