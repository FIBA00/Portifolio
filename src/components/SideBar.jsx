import { NavLink } from "react-router-dom";

const links = [
	{ to: "/", label: "Home", icon: "◉" },
	{ to: "/projects", label: "Projects", icon: "◇" },
	{ to: "/about", label: "About", icon: "△" },
];

export default function SideBar() {
	return (
		<aside className="w-64 bg-[#1A1E23] border-r border-white/5 flex flex-col h-full shrink-0">
			<div className="h-16 flex items-center px-6 border-b border-white/5">
				<span className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
					<span className="text-neon">◆</span> FRAOL<span className="text-neon">.DEV</span>
				</span>
			</div>
			<nav className="flex-1 p-4 space-y-1 overflow-y-auto">
				<div className="text-xs font-semibold text-gray-500 uppercase px-3 py-2">
					Main
				</div>
				{links.map((link) => (
					<NavLink
						key={link.to}
						to={link.to}
						end={link.to === "/"}
						className={({ isActive }) =>
							`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${
								isActive
									? "bg-plate/50 text-white shadow-sm border border-white/5"
									: "hover:bg-plate/30 text-gray-300"
							}`
						}>
						<span className="text-neon">{link.icon}</span> {link.label}
					</NavLink>
				))}
			</nav>
			<div className="p-4 border-t border-white/5">
				<a
					href="mailto:fraolbulti0@gmail.com"
					className="block w-full py-2 metal-card glow-orange text-neon font-semibold text-sm text-center hover:text-white transition-colors">
					Hire Me
				</a>
			</div>
		</aside>
	);
}
