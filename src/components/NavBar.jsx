import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<header className="h-16 bg-[#1A1E23]/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-8 shrink-0">
			<Link to="/" className="text-lg font-semibold text-white tracking-tight">
				Fraol<span className="text-teal-400">.dev</span>
			</Link>
			<nav className="flex items-center gap-6 text-sm text-neutral-300">
				<Link to="/" className="hover:text-white transition">
					Home
				</Link>
				<Link to="/projects" className="hover:text-white transition">
					Projects
				</Link>
				<Link to="/about" className="hover:text-white transition">
					About
				</Link>
			</nav>
		</header>
	);
}
