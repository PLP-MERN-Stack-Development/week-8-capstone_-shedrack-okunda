import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import useSocket from "../hooks/useSocket";

export default function EventDetail() {
	const { id } = useParams();
	const [event, setEvent] = useState(null);
	const socketRef = useSocket();

	useEffect(() => {
		(async () => {
			const res = await api.get(`/events/${id}`);
			setEvent(res.data);
		})();
	}, [id]);

	useEffect(() => {
		const socket = socketRef.current;
		if (!socket || !event) return;
		socket.emit("joinEventRoom", id);
		socket.on("ticketUpdate", (info) => {
			alert("Ticket update: " + (info.message || info));
		});
		return () => socket.off("ticketUpdate");
	}, [socketRef, event]);

	const book = async () => {
		try {
			const res = await api.post("/tickets/book", {
				eventId: id,
				ticketType: event.ticketTypes[0].name,
			});
			// emit socket event
			socketRef.current?.emit("ticketBooked", {
				eventId: id,
				ticketInfo: res.data,
			});
			alert("Booked!");
		} catch (err) {
			alert(err.response?.data?.message || "Booking failed");
		}
	};

	if (!event) return <div>Loading...</div>;
	return (
		<div className="bg-white p-6 rounded shadow">
			<h2 className="text-2xl font-bold">{event.title}</h2>
			<p className="mt-2">{event.description}</p>
			<div className="mt-4">
				<h3 className="font-semibold">Tickets</h3>
				{event.ticketTypes.map((t) => (
					<div key={t.name} className="flex justify-between my-2">
						<div>
							{t.name} - ${t.price}
						</div>
						<button onClick={book} className="btn">
							Book
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
