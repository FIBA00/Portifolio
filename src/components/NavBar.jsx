import { NavLink } from "react-router-dom";

const links = [
	{ to: "/", label: "Home" },
	{ to: "/projects", label: "Projects" },
	{ to: "/about", label: "About" },
];

export default function Navbar() {
	return (
		<header className="h-16 bg-[#1A1E23]/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-8 shrink-0">
			<NavLink to="/" className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
				<span className="text-neon">◆</span> FRAOL<span className="text-neon">.DEV</span>
			</NavLink>

			<nav className="flex items-center gap-2">
				{links.map((link) => (
					<NavLink
						key={link.to}
						to={link.to}
						end={link.to === "/"}
						className={({ isActive }) =>
							`px-3 py-2 rounded-lg text-sm transition-all ${
								isActive
									? "bg-plate/50 text-white shadow-sm border border-white/5"
									: "text-gray-300 hover:bg-plate/30"
							}`
						}>
						{link.label}
					</NavLink>
				))}
			</nav>

			<a
				href="mailto:fraolbulti0@gmail.com"
				className="px-4 py-2 metal-card glow-orange text-neon font-semibold text-sm hover:text-white transition-colors">
				Hire Me
			</a>
		</header>
	);
}
