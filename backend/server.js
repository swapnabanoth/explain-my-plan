import express from "express";
import cors from "cors";
import dotenv from "dotenv";   // ✅ ADD THIS
import analyzeRoute from "./routes/analyze.js";

dotenv.config();               // ✅ ADD THIS (VERY IMPORTANT)

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/api/analyze", analyzeRoute);
const PORT = process.env.PORT || 5000;

// Debug check
console.log("OPENROUTER KEY:", process.env.OPENROUTER_API_KEY);

app.listen(PORT, () => console.log("Server running on port", PORT));