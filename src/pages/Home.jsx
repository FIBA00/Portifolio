import { useEffect, useRef } from "react";
import Hero from "../components/Hero";
import Projects from "./Projects";
import { Link } from "react-router-dom";

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
			{/* summary */}
			<section className="grid grid-cols-1 tracking-widest text-white p-4 space-x-2 border-2 border-plate rounded-2xl mb-4">
				<h1 className="text-3xl m-2 bg-teal">About me </h1>
				<p>
					I am mechanical Enginerring student self taught full stack
					developer.
				</p>
				<p>
					I started my journey 3 years ago with Python and web
					automation, <br /> from that my interest in software
					development grew into interesting step.{" "}
				</p>
				<p>
					I can now build Full end to end websites and softwares that
					run in terminal. using modern tech stacks, eager to learn
					new tech and adapt to modern way of developing projects.
				</p>
			</section>
			<section className="grid grid-cols-1 tracking-widest text-white p-4 space-x-2 border-2 border-plate rounded-2xl mb-4">
				<h3>My Projects</h3>
				<Projects />
			</section>
			<section className="flex wrap">
				<h3>Skills and tech stack</h3>
			</section>

			<section className="flex items-center tracking-widest text-white p-4 space-x-2 border-2 border-plate rounded-2xl">
				<h3>Contact me </h3>
				<Link to="fraolbulti@gmail.com" className="text-neon">
					Email me
				</Link>
			</section>
		</main>
	);
}
