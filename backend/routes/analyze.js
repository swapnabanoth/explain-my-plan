import express from "express";
import { callAI } from "../services/openai.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { idea } = req.body;

  const prompt = `
Convert the following idea into structured JSON:

Idea: "${idea}"

Return ONLY JSON:
{
  "goal": "",
  "method": "",
  "steps": [],
  "timeline": "",
  "missing": [],
  "actions": [],
  "score": 0
}
`;

  const aiResponse = await callAI(prompt);

  let parsed;
  try {
    parsed = JSON.parse(aiResponse);
  } catch {
    parsed = { error: "Parsing failed", raw: aiResponse };
  }

  res.json(parsed);
});

export default router;