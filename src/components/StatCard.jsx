export default function StatCard({ label, value, change, glow = "orange" }) {
	return (
		<div className={`metal-card glow-${glow} p-6`}>
			<p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
				{label}
			</p>
			<h3 className="text-3xl font-bold text-white  mt-1">{value}</h3>
			<p className="text-xs text-gray-500 mt-4">{change}</p>
		</div>
	);
}
