import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function OrganizerDashboard() {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		(async () => {
			const res = await api.get("/events/my");
			setEvents(res.data);
		})();
	}, []);

	return (
		<div>
			<h2 className="text-xl font-semibold mb-4">My Events</h2>
			<div className="grid md:grid-cols-2 gap-4">
				{events.map((e) => (
					<div key={e._id} className="bg-white p-4 rounded shadow">
						<h3 className="font-semibold">{e.title}</h3>
						<p className="text-sm">
							{e.description?.slice(0, 100)}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
