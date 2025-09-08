const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  name: String,
  email: String,
  education: String,
  skills: [String],
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
  work: String,
  links: {
    github: String,
    linkedin: String,
    portfolio: String
  }
});

module.exports = mongoose.model("Profile", ProfileSchema);