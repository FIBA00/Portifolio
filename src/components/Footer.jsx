export default function Footer() {
	return (
		<footer className="bg-base border-t border-white/5 px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
			<p>© {new Date().getFullYear()} Fraol. Built with React + Tailwind.</p>
			<div className="flex gap-6">
				<a
					href="https://github.com/FIBA00"
					target="_blank"
					rel="noreferrer"
					className="hover:text-white transition">
					GitHub
				</a>
				<a
					href="mailto:fraolbulti0@gmail.com"
					className="hover:text-white transition">
					Email
				</a>
			</div>
		</footer>
	);
}
