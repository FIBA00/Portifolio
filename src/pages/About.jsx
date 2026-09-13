export default function About() {
	return (
		<div className="p-8 space-y-8">
			<div className="metal-card glow-orange p-10">
				<h1 className="text-3xl font-bold text-white mb-6">About me</h1>
				<div className="max-w-2xl space-y-5 text-gray-300 leading-relaxed">
					<p>
						I'm Fraol — a final-year Mechanical Engineering student who
						taught himself software development along the way, and
						ended up liking it more than the day job I was training
						for.
					</p>
					<p>
						I'm Python-first, self-taught, and build project by
						project rather than course by course. Most of my work
						sits at the intersection of mechanical engineering and
						software — automation that touches both physical systems
						and code.
					</p>
					<p>
						Lately I'm branching into machine learning and game
						development, and shipping full-stack apps end to end:
						backend, frontend, deployment.
					</p>
				</div>
			</div>

			<div className="metal-split-teal glow-teal p-8">
				<h2 className="text-xl font-semibold text-white mb-4">
					What I work with
				</h2>
				<div className="flex flex-wrap gap-2 max-w-2xl">
					{[
						"Python",
						"JavaScript",
						"React",
						"Node.js",
						"Express",
						"MongoDB",
						"Automation",
					].map((skill) => (
						<span
							key={skill}
							className="px-3 py-1 rounded-full bg-black/20 border border-white/10 text-sm text-gray-200">
							{skill}
						</span>
					))}
				</div>
			</div>

			<div className="flex gap-4">
				<a
					href="https://github.com/FIBA00"
					target="_blank"
					rel="noreferrer"
					className="px-5 py-2.5 border border-white/10 rounded-md hover:border-white/30 transition text-sm text-white">
					GitHub
				</a>
				<a
					href="mailto:fraolbulti0@gmail.com"
					className="px-5 py-2.5 bg-neon text-white rounded-md hover:bg-neon/80 transition text-sm font-medium shadow-[0_0_20px_rgba(217,69,7,0.4)]">
					Get in touch
				</a>
			</div>
		</div>
	);
}
