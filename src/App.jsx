import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

// components
import Navbar from "./components/NavBar";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/about" element={<About />} />
				<Route path="/contactme" element={<Contact />} />
			</Routes>
		</>
	);
}

export default App;
