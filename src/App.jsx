import "./App.css";

function App() {
	return (
		<div className="w-full h-screen app">
			<div className="max-w-[1240px] mx-auto p-12">
				<div className="max-w-[500px] mx-auto">
					<input
						type="text"
						placeholder="Enter a city..."
						className="w-full p-2 rounded-lg text-lg"
					/>
				</div>

				<div className="max-w-[900px] w-full mx-auto h-[400px] rounded-2xl mt-12 bg-white/10">
					<h1>Weather</h1>
				</div>
				<div className="flex items-center justify-between max-w-[900px] mx-auto mt-[-4]">
					<div className="w-[200px] h-[150px] bg-black/10">Weather 1</div>
					<div className="w-[200px] h-[150px] bg-black/10">Weather 1</div>
					<div className="w-[200px] h-[150px] bg-black/10">Weather 1</div>
				</div>
			</div>
		</div>
	);
}

export default App;
