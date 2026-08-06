import { Link } from "react-router-dom";

export default function Hero() {
	return (
		<section className="relative overflow-hidden px-4 py-20 text-white sm:px-6 lg:px-8">
			<p className="text-sm uppercase tracking-widest text-neutral-400 mb-4">
				Full stack developer
			</p>
			<h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-3xl">
				Building things that work , end to end
			</h1>

			<p className="mt-6 text-lg text-neutral-400 max-w-xl mb-2">
				Python-first , self-taught, and shipping
			</p>
			<div className="flex flex-wrap gap-3 mb-6">
				<div className={`metal-split-orange glow-orange p-4`}>
					<Link
						to="/projects"
						className="mt-5 px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-neon transition">
						See my work
					</Link>
				</div>
				<div className={`metal-split-orange glow-orange p-4`}>
					<Link
						to="/contactme"
						className="mt-5 px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-neon transition">
						Place order
					</Link>
				</div>
			</div>

			<div className="rounded-3xl border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur ">
				<div className="grid gap-4 sm:grid-cols-2">
					<div className="rounded-2xl bg-white/10 p-4">
						<p className="text-sm text-slate-300">Free shipping</p>
						<p className="mt-2 text-2xl font-semibold">
							On orders over $100
						</p>
					</div>
					<div className="rounded-2xl bg-white/10 p-4">
						<p className="text-sm text-slate-300">
							Secure checkout
						</p>
						<p className="mt-2 text-2xl font-semibold">
							Fast and reliable
						</p>
					</div>
					<div className="rounded-2xl bg-white/10 p-4 sm:col-span-2">
						<p className="text-sm text-slate-300">
							Top rated support
						</p>
						<p className="mt-2 text-2xl font-semibold">
							24/7 customer care
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
