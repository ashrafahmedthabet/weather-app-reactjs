import React, { Component } from "react";
import Swal from "sweetalert2";
import Form from "./component/form";
import Weather from "./component/weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
const apiKey = "ee04c597cf5dd365c9e14f092b221bc4";
class App extends Component {
  state = {
    temp: "",
    humidity: "",
    cloud: "",
    description: "",
    city: "",
    country: "",
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const city = e.target.city.value;
    const country = e.target.country.value;
    const api = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`
    );
    const data = await api.json();
    if (api.ok) {
      this.setState({
        temp: data.main.temp,
        humidity: data.main.humidity,
        cloud: data.clouds.all,
        description: data.weather[0].description,
        city: data.name,
        country: data.sys.country,
      });
      console.log(data);
    }
    // check response status
    else if (api.status === 404) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "City not found",
      });
      this.setState({
        temp: "",
        humidity: "",
        cloud: "",
        description: "",
        city: "",
        country: "",
      });
    } else {
      this.setState({
        temp: "",
        humidity: "",
        cloud: "",
        description: "",
        city: "",
        country: "",
      });
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your data is empty!",
      });
    }
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-10 mx-auto mt-4 ">
            <h2 className="text-center mb-4 text-light">Weather Finder</h2>
            <Form handleSubmit={this.handleSubmit} />
            <Weather
              temp={this.state.temp}
              humidity={this.state.humidity}
              cloud={this.state.cloud}
              description={this.state.description}
              city={this.state.city}
              country={this.state.country}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
