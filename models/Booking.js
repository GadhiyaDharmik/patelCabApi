const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  fromDestination: { type: String, required: true },
  toDestination: { type: String, required: true },
  dateOfTrip: { type: String, required: true }, // Keeping as string for simplicity
  date: { type: Date, default: Date.now } // Set current date and time by default
});

module.exports = mongoose.model("Booking", bookingSchema);
