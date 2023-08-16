import "./App.css";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Events from "./components/Events";
import Updates from "./components/Updates";
import Gallery from "./components/Gallery";
import Teams from "./components/Teams";

function App() {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/" element={<Hero />} />
			<Route path="/events" element={<Events />} />
			<Route path="/updates" element={<Updates />} />
			<Route path="/gallery" element={<Gallery />} />
			<Route path="/teams" element={<Teams />} />
		</Routes>
	);
}

export default App;
