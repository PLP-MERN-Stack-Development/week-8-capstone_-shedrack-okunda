const dotenv = require("dotenv");
const http = require("http");
const { Server } = require("socket.io");
const connectDB = require("./config/db");
const app = require("./app");

dotenv.config();

connectDB();

const PORT = process.env.PORT;
const server = http.createServer(app);

const io = new Server(server, {
	cors: {
		origin: process.env.ORIGIN,
		methods: ["GET", "POST", "DELETE", "PUT"],
	},
});

io.on("connection", (socket) => {
	console.log("New client connected:", socket.id);

	socket.on("joinEventRoom", (eventId) => {
		socket.join(eventId);
		console.log(`User ${socket.id} joined room: ${eventId}`);
	});

	socket.on("ticketBooked", (data) => {
		const { eventId, ticketInfo } = data;
		socket.to(eventId).emit("ticketUpdate", ticketInfo);
	});

	socket.on("disconnect", () => {
		console.log("Client disconnected:", socket.id);
	});
});

app.set("io", io);

server.listen(PORT, () =>
	console.log(`Server running with Socket.io on port ${PORT}`)
);
