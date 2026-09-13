import Hero from "../components/Hero";
import GithubStats from "../components/GithubStats";

const featured = [
	{
		name: "Guzolink",
		desc: "Marketplace platform where local merchants open shops and sell products, with pluggable Stripe payments.",
		stack: "Node · Express · MongoDB · React",
		glow: "glow-orange",
	},
	{
		name: "Fitique",
		desc: "Multi-tenant boutique platform with virtual wardrobe fit-checking before purchase.",
		stack: "React",
		glow: "glow-teal",
	},
	{
		name: "Cakely",
		desc: "Custom cake ordering platform for shop owners — an all-in-one ecommerce and shop management tool.",
		stack: "TypeScript",
		glow: "glow-orange",
	},
	{
		name: "LibraryManagementSystem",
		desc: "Multi-tenant system for public and private libraries to manage rentals, returns, and customers.",
		stack: "Full-stack",
		glow: "glow-teal",
	},
	{
		name: "LearnEasy",
		desc: "Learning platform that maps new programming languages onto ones you already know.",
		stack: "React · MongoDB · PostgreSQL",
		glow: "glow-orange",
	},
	{
		name: "Yehidat",
		desc: "Send a surprise request to family or friends nearby, completed in minutes via a single call.",
		stack: "JavaScript",
		glow: "glow-teal",
	},
];

const skills = [
	"Python",
	"JavaScript",
	"React",
	"Node.js",
	"Express",
	"MongoDB",
	"PostgreSQL",
	"Docker",
	"Automation",
];

export default function Home() {
	return (
		<div className="p-8 space-y-10">
			<Hero />

			<GithubStats />

			<section>
				<div className="flex items-center justify-between mb-6">
					<h2 className="text-xl font-semibold text-white">
						Featured Projects
					</h2>
					<a
						href="/projects"
						className="text-sm text-neon hover:text-white transition">
						View all →
					</a>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
					{featured.map((p) => (
						<div
							key={p.name}
							className={`metal-card ${p.glow} p-6 flex flex-col`}>
							<h3 className="text-white font-semibold">{p.name}</h3>
							<p className="text-gray-400 text-sm mt-2 flex-1">{p.desc}</p>
							<p className="text-gray-600 text-xs mt-4 uppercase tracking-wide">
								{p.stack}
							</p>
						</div>
					))}
				</div>
			</section>

			<section className="metal-card glow-teal p-8">
				<h2 className="text-xl font-semibold text-white mb-5">
					Tools &amp; Technologies
				</h2>
				<div className="flex flex-wrap gap-2">
					{skills.map((skill) => (
						<span
							key={skill}
							className="px-3 py-1.5 rounded-full bg-plate/50 border border-white/5 text-sm text-gray-300">
							{skill}
						</span>
					))}
				</div>
			</section>
		</div>
	);
}
