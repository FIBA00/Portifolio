import { useQuery } from "@tanstack/react-query";

async function fetchRepos() {
	const res = await fetch(
		"https://api.github.com/users/FIBA00/repos?sort=updated&per_page=12",
	);
	if (!res.ok) throw new Error("Failed to fetch repos !");
	return res.json();
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
					className="border border-neutral-800 rounded-lg p-5 hover:border-neutral-500 transition">
					<h3 className="text-white font-semibold">{repo.name} </h3>
					<p className="text-neutral-400 text-sm mt-2 line-clamp-2">
						{repo.description || "No description"}
					</p>
					<p className="text-neutral-600 text-xs mt-4">
						{repo.language}
					</p>
				</a>
			))}
		</section>
	);
}
