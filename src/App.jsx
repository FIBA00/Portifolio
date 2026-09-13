import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";

// components
import Navbar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="flex h-screen overflow-hidden text-gray-300">
			<SideBar />
			<main className="flex-1 flex flex-col h-screen overflow-hidden relative">
				<Navbar />
				<div className="flex-1 overflow-y-auto">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/about" element={<About />} />
					</Routes>
					<Footer />
				</div>
			</main>
		</div>
	);
}

export default App;
