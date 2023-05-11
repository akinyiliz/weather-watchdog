import "./App.css";

function App() {
	return (
		<div className="w-full h-screen overflow-y-scroll sm:overflow-hidden app">
			<div className="max-w-[1240px] mx-auto p-8">
				<div className="max-w-[500px] mx-auto">
					<input
						type="text"
						placeholder="Enter a city..."
						className="w-full p-2 rounded-lg text-lg"
					/>
				</div>

				<div className="max-w-[900px] flex items-center gap-4 w-full mx-auto h-[400px] rounded-3xl shadow-2xl mt-8 bg-white/10">
					<div className="flex-1 h-44">Icon</div>
					<div className="flex-1">
						<h2 className="text-[25px]">Today</h2>
						<h1 className="font-extrabold text-[40px]">New York</h1>
						<div className="text-black/80 text-[19px]">
							<p>Temperature: 17°C</p>
							<p>Clear sky</p>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-2 mx-auto mt-2 sm:max-w-[900px] sm:grid-cols-4">
					<div className="w-[100px] h-[150px] bg-white/20 rounded-[30px] flex flex-col items-center py-2 sm:mx-4 md:w-[150px] lg:w-[180px]">
						<p className="font-bold text-[19px]">Feels like</p>
						<p className="h-16">Icon</p>
						<p className="text-[20px]">21°C</p>
					</div>
					<div className="w-[100px] h-[150px] bg-white/20 rounded-[30px] flex flex-col items-center py-2 sm:mx-4 md:w-[150px] lg:w-[180px]">
						<p className="font-bold text-[19px]">Wind</p>
						<p className="h-16">Icon</p>
						<p className="text-[20px]">21°C</p>
					</div>
					<div className="w-[100px] h-[150px] bg-white/20 rounded-[30px] flex flex-col items-center py-2 sm:mx-4 md:w-[150px] lg:w-[180px]">
						<p className="font-bold text-[19px]">Pressure</p>
						<p className="h-16">Icon</p>
						<p className="text-[20px]">21°C</p>
					</div>
					<div className="w-[100px] h-[150px] bg-white/20 rounded-[30px] flex flex-col items-center py-2 sm:mx-4 md:w-[150px] lg:w-[180px]">
						<p className="font-bold text-[19px]">Humidity</p>
						<p className="h-16">Icon</p>
						<p className="text-[20px]">21°C</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
