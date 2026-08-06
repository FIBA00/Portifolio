export default function Hero() {
	return (
		<section className="min-h-screen flex flex-col justify-center items-start px-8 md:px-24 bg-neutral-950 text-white">
			<p className="text-sm uppercase tracking-widest text-neutral-400 mb-4">
				Full stack developer
			</p>
			<h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-3xl">
				Building things that work , end to end
			</h1>

			<p className="mt-6 text-lg text-neutral-400 max-w-xl mb-4">
				Python-first , self-taught, and shipping
			</p>
			<a
				href="#work"
				className="mt-10 px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-neutral-200 transition">
				see my work
			</a>
		</section>
	);
}
