import { useEffect, useRef } from "react";
import { io } from "socket.io-client";

export default function useSocket() {
	const socketRef = useRef(null);

	useEffect(() => {
		const token = localStorage.getItem("token");
		const socket = io(
			import.meta.env.VITE_SOCKET_URL || "http://localhost:5000",
			{
				auth: { token: token ? `Bearer ${token}` : "" },
			}
		);
		socketRef.current = socket;

		socket.on("connect", () => console.log("socket connected", socket.id));
		socket.on("disconnect", () => console.log("socket disconnected"));

		return () => socket.disconnect();
	}, []);

	return socketRef;
}
