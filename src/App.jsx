import "./App.css";
import { useState } from "react";
import FeelsLikeIcon from "./assets/feels_like.svg";
import WindIcon from "./assets/wind.png";
import PressureIcon from "./assets/pressure.png";
import HumidityIcon from "./assets/humidity.png";

function App() {
	const [weatherData, setWeatherData] = useState([]);
	const [location, setLocation] = useState("");

	const WEATHER_API_URL = import.meta.env.VITE_WEATHER_API_URL;
	const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
	const url = `${WEATHER_API_URL}/weather?q=${location}&units=metric&appid=${WEATHER_API_KEY}`;

	const searchLocation = (event) => {
		if (event.key === "Enter") {
			fetch(url)
				.then((response) => response.json())
				.then((data) => {
					setWeatherData(data);
					console.log(data);
				});
			setLocation("");
		}
	};

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
					className="max-w-[900px] flex items-center gap-2 w-full 
				h-[250px] mx-auto  rounded-3xl shadow-2xl mt-8 bg-white/10 sm:h-[350px] sm:gap-4"
				>
					<div className="flex-1">
						{weatherData.weather ? (
							<img
								className="h-[100px] mx-auto sm:h-[200px] "
								src={`/public/weather-icons/${weatherData.weather[0].icon}.png`}
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
				<div className="grid grid-cols-2 gap-2 m-4 max-w-[900px] sm:grid-cols-4">
					<div className="w-[140px] h-[150px] bg-black/20 rounded-[40px] flex flex-col items-center py-2 sm:mx-4 md:w-[150px] lg:w-[160px]">
						<p className="font-bold text-[19px]">Feels like</p>
						<img
							className="h-16 py-2"
							src={FeelsLikeIcon}
						/>
						{weatherData.main ? (
							<p className="text-[25px] font-semibold">
								{weatherData.main.feels_like.toFixed()}°C
							</p>
						) : null}
					</div>
					<div className="w-[140px] h-[150px] bg-black/20 rounded-[40px] flex flex-col items-center py-2 sm:mx-4 md:w-[150px] lg:w-[160px]">
						<p className="font-bold text-[19px]">Wind</p>
						<img
							className="h-16 py-2"
							src={WindIcon}
						/>
						{weatherData.wind ? (
							<p className="text-[25px] font-semibold">
								{weatherData.wind.speed.toFixed()}m/s
							</p>
						) : null}
					</div>
					<div className="w-[140px] h-[150px] bg-black/20 rounded-[40px] flex flex-col items-center py-2 sm:mx-4 md:w-[150px] lg:w-[160px]">
						<p className="font-bold text-[19px]">Pressure</p>
						<img
							className="h-16 py-2"
							src={PressureIcon}
						/>
						{weatherData.main ? (
							<p className="text-[25px] font-semibold">
								{weatherData.main.pressure}hPa
							</p>
						) : null}
					</div>
					<div className="w-[140px] h-[150px] bg-black/20 rounded-[40px] flex flex-col items-center py-2 sm:mx-4 md:w-[150px] lg:w-[160px]">
						<p className="font-bold text-[19px]">Humidity</p>
						<img
							className="h-16 py-2"
							src={HumidityIcon}
						/>
						{weatherData.main ? (
							<p className="text-[25px] font-semibold">
								{weatherData.main.humidity}%
							</p>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
