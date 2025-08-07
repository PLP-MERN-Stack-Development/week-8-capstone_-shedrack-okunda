const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		description: { type: String, required: true },
		date: { type: Date },
		location: { type: String, required: true },
		capacity: { type: Number, required: true },
		organizerId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		ticketTypes: [
			{
				name: { type: String },
				price: { type: Number },
				quantity: { type: Number },
			},
		],
	},
	{ timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
