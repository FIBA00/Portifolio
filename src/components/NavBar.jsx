import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const linkClass = ({ isActive }) =>
		`block py-2 ${isActive ? "text-amber-500" : "text-slate-300"}`;

	useEffect(() => {
		const handleNavLinkClick = () => {
			setIsMenuOpen(false);
		};

		const navLinks = document.querySelectorAll("a");
		navLinks.forEach((link) => {
			link.addEventListener("click", handleNavLinkClick);
		});

		return () => {
			navLinks.forEach((link) => {
				link.removeEventListener("click", handleNavLinkClick);
			});
		};
	}, []);

	return (
		<header className="sticky top-0 z-50 border-teal bg-plate-dark backdrop-blur">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
				<NavLink
					to="/"
					className="flex items-center gap-2 text-xl font-semibold tracking-tight text-neon">
					Fraol B{" "}
				</NavLink>

				<nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive ? "text-neon-600" : ""
						}>
						Home
					</NavLink>
					<NavLink to="/projects" className={linkClass}>
						{" "}
						Projects
					</NavLink>
					<NavLink to="/about" className={linkClass}>
						About
					</NavLink>
					<NavLink to="/contactme" className={linkClass}>
						Contact Me
					</NavLink>
				</nav>

				<div className="flex items-center gap-3">
					{/* humbruger - mobile only */}
					<button
						onClick={() => setIsMenuOpen((prev) => !prev)}
						aria-label={isMenuOpen ? "Close menu" : "Open menu"}
						aria-expanded={isMenuOpen}
						className="rounded-lg p-2 text-slate-200 hover:bg-white/10 md:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}>
							{isMenuOpen ? (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							) : (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							)}
						</svg>
					</button>
				</div>
			</div>
			{/* Shutter panel - grid-rows trick animates height without needing to 
				know the content's pixel height in advance (a plain max-height transition would need a guessed cap)
			*/}
			<div
				className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
				<div className="border-t border-white/10 px-4 py-4 sm:px-6">
					<nav className="flex flex-col text-sm font-medium">
						<NavLink to="/" className={linkClass}>
							Home
						</NavLink>
						<NavLink to="/projects" className={linkClass}>
							{" "}
							Projects
						</NavLink>
						<NavLink to="/about" className={linkClass}>
							About
						</NavLink>
						<NavLink to="/contactme" className={linkClass}>
							Contact Me
						</NavLink>
					</nav>
				</div>
			</div>
		</header>
	);
}
