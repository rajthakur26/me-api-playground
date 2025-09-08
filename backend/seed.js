require("dotenv").config();

const mongoose = require("mongoose");
const Profile = require("./models/Profile");
const Project = require("./models/Project");

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

async function seed() {
  await Project.deleteMany();
  await Profile.deleteMany();

  const project1 = await Project.create({ 
    title: "EMS (Employee MAnagement System)", 
    description: "– Built role-based task management system with admin task assignment and employee task tracking. – Implemented authentication and secure login using local storage. – Managed dynamic task states (New, Active, Completed, Failed) with React state. – Designed responsive UI with Tailwind CSS for improved user experie", 
    links: ["https://github.com/rajthakur26/EMS-Employee-Management-System-"], 
    skills: ["react", "css","html" ,"javascript","tailwind css","localstorage" ] 
  });

  const project2 = await Project.create({ 
    title: "Hirex(Job Portal ) ", 
    description: " Comprehensive job postings and search for multiple industries with easy application management. – User registration with profiles for resumes, applications, and employer job tracking. – Integrated application tracking system with advanced filters like location and job type. – Fully responsive design for seamless use on desktop, tablet, and mobile devic", 
    links: ["https://github.com/rajthakur26/HIREX"], 
    skills: ["css", "html", "react","javascript"] 
  });

  await Profile.create({
    name: "Raj Singh",
    email: "rajthakurx5@gmail.com",
    education: "BTech Computer Science",
    skills: ["react", "nodejs", "mongodb", "python","java","html","css","javascript","express.js","API"],
    projects: [project1._id, project2._id],
    work: "Internships at RMSI Pvt Ltd",
    links: { github: "https://github.com/rajsingh26", linkedin: "https://linkedin.com/in/rajsingh26", portfolio: "https://github.com/rajthakur26/"}
  });

  console.log("Seed complete");
  mongoose.connection.close();
}

seed();