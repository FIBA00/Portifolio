import { useQuery } from "@tanstack/react-query";

async function fetchUser() {
	const res = await fetch("https://api.github.com/users/FIBA00");
	if (!res.ok) throw new Error("Failed to fetch profile");
	return res.json();
}

const FALLBACK = { public_repos: 19, followers: 3 };

export default function GithubStats() {
	const { data } = useQuery({
		queryKey: ["github-user"],
		queryFn: fetchUser,
		retry: 1,
	});

	const stats = data || FALLBACK;

	const cards = [
		{
			label: "Years Experience",
			value: "3+",
			sub: "self-taught, project-based",
			variant: "metal-card glow-orange",
		},
		{
			label: "Public Repos",
			value: stats.public_repos,
			sub: "on GitHub",
			variant: "metal-split-teal glow-teal",
		},
		{
			label: "Primary Stack",
			value: "Python",
			sub: "+ JavaScript / React",
			variant: "metal-split-orange glow-orange",
		},
		{
			label: "Focus",
			value: "Automation",
			sub: "mech. eng. × software",
			variant: "metal-card glow-teal",
		},
	];

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
			{cards.map((c) => (
				<div key={c.label} className={`${c.variant} p-6 relative overflow-hidden`}>
					<p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
						{c.label}
					</p>
					<h3 className="text-3xl font-bold text-white mt-1">{c.value}</h3>
					<p className="text-xs text-gray-500 mt-4">{c.sub}</p>
				</div>
			))}
		</div>
	);
}
