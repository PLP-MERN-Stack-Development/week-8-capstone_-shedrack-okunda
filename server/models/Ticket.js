const mongoose = require("mongooses");

const ticketSchema = new mongoose.Schema(
	{
		eventId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Event",
			required: true,
		},
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		ticketType: { type: String, required: true },
		paymentStatus: {
			type: String,
			enum: ["paid", "free"],
			default: "free",
		},
		qrCode: { type: String, required: true },
	},
	{ timestamps: true }
);

const Ticket = mongoose.model("Ticket", ticketSchema);
module.exports = Ticket;
