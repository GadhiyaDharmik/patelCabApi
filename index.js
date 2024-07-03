const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors'); // Import the CORS middleware
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3005;

app.use(cors());

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB Connection
const dbURI = `mongodb+srv://dharmik4648o:R789s73""""""@atlascluster.1srabfn.mongodb.net/mydatabase?retryWrites=true&w=majority`;
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Mongoose Model
const Booking = require("./models/Booking");

// Routes
app.post("/submit", async (req, res) => {
  try {
    const formData = new Booking(req.body);
    await formData.save();
    res
      .status(201)
      .send({ message: "Data saved successfully", data: formData });
  } catch (error) {
    res.status(500).send({ message: "Error saving data", error });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
