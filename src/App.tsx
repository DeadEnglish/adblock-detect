import "./App.css";
import { useDetectAdBlock } from "./hooks/useDetectAdblock";

function App() {
	const adblockStatus = useDetectAdBlock() ? "enabled" : "disabled";

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
