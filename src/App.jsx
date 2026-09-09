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
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/about" element={<About />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
