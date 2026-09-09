import { useQuery } from "@tanstack/react-query";

async function fetchRepos() {
	const res = await fetch(
		"https://api.github.com/users/FIBA00/repos?sort=updated&per_page=100",
	);
	if (!res.ok) throw new Error("Failed to fetch repos !");
	const repos = await res.json();
	return repos
		.filter((r) => !r.fork && !r.archived)
		.sort((a, b) => b.stargazers_count - a.stargazers_count || 
			new Date(b.pushed_at) - new Date(a.pushed_at));
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
		return <p className="text-white px-8 py-24">Loading repos ....</p>;
	if (error)
		return <p className="text-red-400 px-8 py-24">{error.message}</p>;

	return (
		<section className="px-8 py-24 grid gap-6 md:grid-cols-2 lg:grid-cols-3 bg-neutral-950 min-h-screen">
			{repos.map((repo) => (
				<a
					key={repo.id}
					href={repo.html_url}
					target="_blank"
					rel="noreferrer"
					className="border border-neutral-800 rounded-lg p-5 hover:border-neutral-500 transition flex flex-col">
					<h3 className="text-white font-semibold">{repo.name}</h3>
					<p className="text-neutral-400 text-sm mt-2 line-clamp-2 flex-1">
						{repo.description || "No description"}
					</p>
					<div className="flex items-center justify-between mt-4">
						<p className="text-neutral-600 text-xs">
							{repo.language || "—"}
						</p>
						{repo.stargazers_count > 0 && (
							<p className="text-neutral-600 text-xs">
								★ {repo.stargazers_count}
							</p>
						)}
					</div>
				</a>
			))}
		</section>
	);
}
