import { useEffect, useRef } from "react";
import Hero from "../components/Hero";

export default function Home() {
	const scrollRef = useRef(null);
	const scrollUp = () => {
		scrollRef.current?.scrollBy({ top: 100, behavior: "smooth" });
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) {
				scrollUp();
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<main>
			<Hero />
			<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mb-10 space-y-3">
					<p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
						Shop all
					</p>
					<h2 className="text-3xl font-bold text-white">
						Discover the essentials
					</h2>
					<p className="max-w-2xl text-slate-300">
						Browse products from every shop on the platform.
					</p>
				</div>
			</section>
		</main>
	);
}
