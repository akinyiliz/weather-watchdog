import "./App.css";
import { useCallback, useEffect, useState } from "react";
import FeelsLikeIcon from "./assets/feels_like.svg";
import WindIcon from "./assets/wind.png";
import PressureIcon from "./assets/pressure.png";
import HumidityIcon from "./assets/humidity.png";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [location, setLocation] = useState("");
  const [lat, setLat] = useState(-1.2714);
  const [lon, setLon] = useState(36.8378);

  const WEATHER_API_URL = import.meta.env.VITE_WEATHER_API_URL;
  const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeatherData = useCallback(
    (lat, lon) => {
      const url = `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`;

      fetch(url)
        .then((res) => res.json())
        .then((data) => setWeatherData(data))
        .catch((error) => console.error("Error fetching weather data:", error));
    },
    [WEATHER_API_KEY, WEATHER_API_URL]
  );

  const searchLocation = (event) => {
    const url = `${WEATHER_API_URL}/weather?q=${location}&units=metric&appid=${WEATHER_API_KEY}`;

    if (event.key === "Enter") {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          setLocation("");
        })
        .catch((error) =>
          console.error("Error fetching weather data: ", error)
        );
    }
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          setLat(latitude);
          setLon(longitude);
          fetchWeatherData(latitude, longitude);
        },
        (error) => {
          console.error("Error getting geolocation:", error);

          fetchWeatherData(lat, lon);
        }
      );
    } else {
      {
        console.error("Geolocation is not available on this browser");

        fetchWeatherData(lat, lon);
      }
    }
  }, [fetchWeatherData, lat, lon]);

  return (
    <div className="w-full h-screen overflow-y-scroll sm:overflow-hidden app">
      <div className="max-w-[900px] mx-auto p-4 lg:p-8">
        <div className="max-w-[500px] mx-auto">
          <input
            type="text"
            placeholder="Enter a city..."
            className="w-full p-2 rounded-lg text-lg focus:outline-0"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyPress={searchLocation}
          />
        </div>

        <div
          className="max-w-[900px] flex items-center gap-1 w-full 
				h-[250px] mx-auto rounded-3xl shadow-2xl mt-8 bg-white/10 sm:h-[350px]"
        >
          <div className="flex-1">
            {weatherData.weather ? (
              <img
                className="h-[100px] mx-auto sm:h-[200px] "
                src={`/weather-icons/${weatherData.weather[0].icon}.png`}
              />
            ) : null}
          </div>
          <div className="flex-1 lg:mx-auto">
            <h2 className="text-[22px] sm:text-[30px]">Today</h2>
            <h1 className="font-extrabold text-[35px] sm:text-[52px]">
              {weatherData.name}
            </h1>
            <div className="text-black/80 text-[16px] sm:text-[22px]">
              {weatherData.main ? (
                <p>Temperature: {weatherData.main.temp.toFixed()}°C</p>
              ) : null}
              {weatherData.weather ? (
                <p className="capitalize">
                  {weatherData.weather[0].description}
                </p>
              ) : null}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 my-4 max-w-[900px] md:grid-cols-4 md:gap-6 lg:gap-10">
          <WeatherCard
            name="Feels like"
            icon={FeelsLikeIcon}
            weather={weatherData.main?.feels_like?.toFixed()}
            unit="°C"
          />

          <WeatherCard
            name="Wind"
            icon={WindIcon}
            weather={weatherData.wind?.speed?.toFixed()}
            unit="m/s"
          />

          <WeatherCard
            name="Pressure"
            icon={PressureIcon}
            weather={weatherData.main?.pressure}
            unit="hPa"
          />

          <WeatherCard
            name="Humidity"
            icon={HumidityIcon}
            weather={weatherData.main?.humidity}
            unit="%"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
