export default function Hero() {
	return (
		<section className="metal-card glow-orange p-10 md:p-16 relative overflow-hidden">
			<p className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-4">
				Full stack developer
			</p>
			<h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl text-white">
				Building things that work, end to end.
			</h1>
			<p className="mt-6 text-lg text-gray-400 max-w-xl">
				Python-first, self-taught, and shipping. I bridge mechanical
				engineering and software — automation, full-stack apps, and
				whatever the problem actually needs.
			</p>
			<div className="mt-10 flex flex-wrap gap-4">
				<a
					href="/projects"
					className="px-6 py-3 bg-neon text-white font-medium rounded-md hover:bg-neon/80 transition shadow-[0_0_20px_rgba(217,69,7,0.4)]">
					See my work
				</a>
				<a
					href="mailto:fraolbulti0@gmail.com"
					className="px-6 py-3 border border-white/10 text-white font-medium rounded-md hover:border-white/30 transition">
					Get in touch
				</a>
			</div>
		</section>
	);
}
