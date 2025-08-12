import React, { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

export default function Events() {
	const [events, setEvents] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		(async () => {
			try {
				const res = await api.get("/events");
				setEvents(res.data);
			} catch (err) {
				console.error(err);
			} finally {
				setLoading(false);
			}
		})();
	}, []);

	if (loading) return <div>Loading events...</div>;
	return (
		<div className="grid md:grid-cols-3 gap-4">
			{events.map((e) => (
				<div key={e._id} className="bg-white p-4 rounded shadow">
					<h3 className="font-semibold">{e.title}</h3>
					<p className="text-sm">{e.description?.slice(0, 100)}</p>
					<Link
						to={`/events/${e._id}`}
						className="mt-3 inline-block text-blue-600">
						View
					</Link>
				</div>
			))}
		</div>
	);
}
