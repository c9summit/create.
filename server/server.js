import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
import { extractRequirements } from "./extractRequirements.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// Schema
const requirementSchema = new mongoose.Schema({
  description: String,
  appName: String,
  entities: [String],
  roles: [String],
  features: [String],
});
const Requirement = mongoose.model("Requirement", requirementSchema);

// API route: capture requirements
app.post("/api/requirements", async (req, res) => {
  const { description } = req.body;
  console.log("Received request:", description);

  try {
    console.log("Processing with Ollama...");
    const parsed = await extractRequirements(description);
    console.log("Successfully parsed:", parsed);
    res.json(parsed);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Failed to extract requirements" });
  }
});



app.listen(5000, () => console.log("Server running on port 5000"));
