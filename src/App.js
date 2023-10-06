import "./sass/style.scss"
import Searching from './components/search/Searching';
import CurrentWeather from "./components/current-weather/CurrentWeather";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";
import { useState } from "react";
import Forecast from "./components/forecast/Forecast";

function App() {

  const [currentWeather, setCurrentWeather] = useState(null),
    [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {

    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err))
  }


  console.log(forecast);

  return (
    <div className="app">
      <div className="main">
        <div className="main_bg">
          <img src="icons/main-bg.jpg" alt="main background" />
        </div>
        <Searching onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather currentWeatherData={currentWeather} />}
      </div>
      {forecast && <Forecast forecastData={forecast} />}
    </div>
  );
}

export default App;
