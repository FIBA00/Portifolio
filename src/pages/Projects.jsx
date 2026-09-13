import { useQuery } from "@tanstack/react-query";

async function fetchRepos() {
	const res = await fetch(
		"https://api.github.com/users/FIBA00/repos?sort=updated&per_page=100",
	);
	if (!res.ok) throw new Error("Failed to fetch repos !");
	const repos = await res.json();
	return repos
		.filter((r) => !r.fork && !r.archived)
		.sort(
			(a, b) =>
				b.stargazers_count - a.stargazers_count ||
				new Date(b.pushed_at) - new Date(a.pushed_at),
		);
}

export default function Projects() {
	const {
		data: repos,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["repos"],
		queryFn: fetchRepos,
	});

	if (isLoading)
		return <p className="text-white p-8">Loading repos ....</p>;
	if (error)
		return <p className="text-red-400 p-8">{error.message}</p>;

	return (
		<div className="p-8">
			<h1 className="text-2xl font-semibold text-white mb-6">
				All Projects
			</h1>
			<section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
				{repos.map((repo, i) => (
					<a
						key={repo.id}
						href={repo.html_url}
						target="_blank"
						rel="noreferrer"
						className={`metal-card ${
							i % 2 === 0 ? "glow-orange" : "glow-teal"
						} p-6 flex flex-col hover:brightness-110 transition`}>
						<h3 className="text-white font-semibold">{repo.name}</h3>
						<p className="text-gray-400 text-sm mt-2 line-clamp-2 flex-1">
							{repo.description || "No description"}
						</p>
						<div className="flex items-center justify-between mt-4">
							<p className="text-gray-600 text-xs uppercase tracking-wide">
								{repo.language || "—"}
							</p>
							{repo.stargazers_count > 0 && (
								<p className="text-gray-600 text-xs">
									★ {repo.stargazers_count}
								</p>
							)}
						</div>
					</a>
				))}
			</section>
		</div>
	);
}
