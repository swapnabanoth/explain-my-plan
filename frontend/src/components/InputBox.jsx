import { useState } from "react";
import axios from "axios";

export default function InputBox({ setResult }) {
  const [text, setText] = useState("");

  const handleSubmit = async () => {
    const res = await axios.post("https://explain-my-plan-backend.onrender.com/api/analyze", {
      idea: text,
    });
    setResult(res.data);
  };

  return (
    <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg mb-6 text-left">
  <textarea
    className="w-full p-4 border border-gray-200 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
    placeholder="Enter your idea..."
    value={text}
    onChange={(e) => setText(e.target.value)}
  />

  <button
    onClick={handleSubmit}
    className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-2 rounded-lg hover:scale-105 transition-transform duration-200"
  >
    Analyze
  </button>

</div>
  );
}