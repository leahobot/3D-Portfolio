// import { Router, Routes } from "react-router-dom";
import {
	Navbar,
	Hero,
	Experience,
	Tech,
	Feedbacks,
	About,
	Works,
	Contact,
	StarsCanvas,
} from "./components";

function App() {
	return (
		<div className="relative z-0 bg-primary">
			<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
				<Navbar />
				<Hero />
			</div>

			<About />
			<Experience />
			<Tech />
			<Works />
			<Feedbacks />

			<div className="relative z-0">
				<Contact />
				<StarsCanvas />
			</div>
		</div>
	);
}

export default App;
