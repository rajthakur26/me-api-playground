const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const profileRoutes = require("./routes/profile");
const projectRoutes = require("./routes/projects");

const app = express();  
app.use(cors());
app.use(express.json());

app.use("/profile", profileRoutes);
app.use("/projects", projectRoutes);

app.get("/health", (req, res) => res.sendStatus(200));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

module.exports = app;