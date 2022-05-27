import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import WeatherCard from "./components/WeatherCard";
import "./App.css";
import NoResultsFound from "./components/NoResultsFound";

function App() {
  const [city, setCity] = useState("Delhi");
  const [temp, setTemp] = useState(0);
  const [weatherIcon, setWeatherIcon] = useState("");
  const [description, setDescription] = useState("no-results-found");
  const [feelsLike, setFeelsLike] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  const [precipitation, setPrecipitation] = useState(0);
  const [cityExists, setCityExists] = useState(true);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      setWeatherIcon(json.weather[0].icon);
      setCity(json.name);
      setTemp(json.main.temp);
      setFeelsLike(json.main.feels_like);
      setDescription(json.weather[0].main);
      setHumidity(json.main.humidity);
      setWindSpeed(json.wind.speed);
      setCityExists(true);

      if (json.rain) setPrecipitation(json.rain["1h"]);
      else setPrecipitation(0);
    } catch (error) {
      console.log(error);
      setCityExists(false);
    }
  };

  useEffect(() => {
    fetchData();
    console.log("loaded");
  }, []);

  let imageURL = "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";

  const checkCity = cityExists && city != "";

  const style = {
    // backgroundImage: `url("${backgroundImage}")`,
    backgroundImage: checkCity
      ? "url(" + require("./images/" + description.toLowerCase() + ".jpg") + ")"
      : "none",
    color: `${description === "Rain" ? "gold  " : "white"}`,
  };

  return (
    <div className="container" style={style}>
      <div>
        <Search city={city} setCity={setCity} onClick={fetchData} />
        {checkCity ? (
          <WeatherCard
            imageURL={imageURL}
            city={city}
            temp={temp}
            feelsLike={feelsLike}
            description={description}
            humidity={humidity}
            windSpeed={windSpeed}
            precipitation={precipitation}
          />
        ) : (
          <NoResultsFound />
        )}
      </div>
    </div>
  );
}

export default App;
