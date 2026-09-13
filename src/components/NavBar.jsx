import { useLocation } from "react-router-dom";

const titles = {
	"/": "Home Overview",
	"/projects": "Projects",
	"/about": "About Me",
};

export default function Navbar() {
	const { pathname } = useLocation();
	return (
		<header className="h-16 bg-[#1A1E23]/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-8 shrink-0">
			<h2 className="text-lg font-medium text-white">
				{titles[pathname] || "Fraol"}
			</h2>
			<div className="flex items-center gap-4">
				<a
					href="https://github.com/FIBA00"
					target="_blank"
					rel="noreferrer"
					className="w-8 h-8 rounded-full metal-card glow-teal flex items-center justify-center text-xs text-teal-200">
					GH
				</a>
			</div>
		</header>
	);
}
