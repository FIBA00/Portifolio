import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";

// components
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="flex flex-col h-screen overflow-hidden text-gray-300">
			<Navbar />
			<div className="flex-1 overflow-y-auto">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/about" element={<About />} />
				</Routes>
				<Footer />
			</div>
		</div>
	);
}

export default App;
