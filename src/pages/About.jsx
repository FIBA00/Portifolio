export default function About() {
	return (
		<main className="min-h-screen bg-neutral-950 text-white px-8 md:px-24 py-24">
			<h1 className="text-4xl md:text-5xl font-bold mb-8">About me</h1>

			<div className="max-w-2xl space-y-6 text-neutral-300 text-lg leading-relaxed">
				<p>
					I'm Fraol — a final-year Mechanical Engineering student who
					taught himself software development along the way, and ended up
					liking it more than the day job I was training for.
				</p>
				<p>
					I'm Python-first, self-taught, and build project by project
					rather than course by course. Most of my work sits at the
					intersection of mechanical engineering and software —
					automation that touches both physical systems and code.
				</p>
				<p>
					Lately I'm branching into machine learning and game
					development, and shipping full-stack apps end to end: backend,
					frontend, deployment.
				</p>
			</div>

			<div className="mt-16">
				<h2 className="text-xl font-semibold mb-4 text-white">
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
							className="px-3 py-1 rounded-full border border-neutral-700 text-sm text-neutral-300">
							{skill}
						</span>
					))}
				</div>
			</div>

			<div className="mt-16 flex gap-4">
				<a
					href="https://github.com/FIBA00"
					target="_blank"
					rel="noreferrer"
					className="px-5 py-2.5 border border-neutral-700 rounded-md hover:border-neutral-400 transition text-sm">
					GitHub
				</a>
				<a
					href="mailto:fraolbulti0@gmail.com"
					className="px-5 py-2.5 bg-white text-black rounded-md hover:bg-neutral-200 transition text-sm font-medium">
					Get in touch
				</a>
			</div>
		</main>
	);
}
