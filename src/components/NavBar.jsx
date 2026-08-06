import { Link } from "react-router-dom";
import SideBar from "./SideBar";

export default function Navbar() {
	return (
		<header className="h-16 bg-[#1A1E23]/80 backgdrop-blur-md border-b border-white/5 flex items-center justify-between px-8 shrink-0 ">
			<SideBar />
			<div>
				<h2 className="text-lg font-medium text-white">Hello there</h2>
				<nav className="flex-1 p-4 space-y-1 overflow-y-auto">
					<Link to="/">Home</Link>
					<Link to="/projects"> Projects</Link>
					<Link to="/about">About</Link>
				</nav>
				<div className="flex items-center gap-4">
					<div className="size-10 rounded-full metal-card glow-teal flex items-center justify-center text-xs text-teal-200">
						Fraold
					</div>
				</div>
			</div>
		</header>
	);
}
