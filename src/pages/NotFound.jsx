import { Link } from "react-router-dom";

export default function NotFound() {
	return (
		<div className="p-8 min-h-[70vh] flex flex-col items-center justify-center text-center">
			<div className="metal-card glow-orange p-12 max-w-md">
				<h1 className="text-6xl font-bold text-neon mb-4">404</h1>
				<p className="text-white font-medium mb-2">Page not found</p>
				<p className="text-gray-400 text-sm mb-8">
					The page you're looking for doesn't exist or moved.
				</p>
				<Link
					to="/"
					className="inline-block px-6 py-3 bg-neon text-white font-medium rounded-md hover:bg-neon/80 transition">
					Back home
				</Link>
			</div>
		</div>
	);
}
