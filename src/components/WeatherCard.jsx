import React from "react";

const WeatherCard = (props) => {
  return (
    <div className="weather-card">
      <div className="weather-card-main">
        <img src={props.imageURL} alt="weather-icon"></img>
        <h1 className="temp">
          {Math.floor(props.temp)} <i class="fa-regular fa-circle"></i>{" "}
          <span>C</span>
        </h1>
        <h2 className="city">{props.city}</h2>
      </div>

      <h2 className="description">{props.description}</h2>

      <div className="weather-card-extra-info">
        <p>
          <i class="fa-solid fa-temperature-half"></i>
          {Math.floor(props.feelsLike)} <span>Feels like</span>
        </p>
        <p>
          <i class="fa-solid fa-water"></i>
          {Math.floor(props.humidity)}% <span>Humidity</span>
        </p>
        <p>
          <i class="fa-solid fa-wind"></i>
          {Math.floor(props.windSpeed)} km/hr <span>Windspeed</span>
        </p>
        <p>
          <i class="fa-solid fa-droplet"></i>
          {Math.floor(props.precipitation * 100)}% <span>Precipitaion</span>
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
