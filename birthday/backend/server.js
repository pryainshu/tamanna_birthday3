require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const messageRoutes = require("./routes/message.routes");

const app = express();


// MongoDB
connectDB();


// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());


// Routes
app.use("/api/messages", messageRoutes);


// Server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});