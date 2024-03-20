import "./App.css";

function App() {
	const adblockStatus = document.getElementById("muBPdeUDjZwG") ? "disabled" : "enabled";

	return (
		<>
			<h1>Detecting adblock</h1>
			<div className="center">
				<h2>
					Adblock is <span className={`${adblockStatus}`}>{adblockStatus}</span>
				</h2>
			</div>
		</>
	);
}

export default App;
