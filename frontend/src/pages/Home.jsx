import { useState } from "react";
import InputBox from "../components/InputBox";
import ResultCard from "../components/ResultCard";

export default function Home() {
  const [result, setResult] = useState(null);

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(to right, #c7d2fe, #e9d5ff)"
    }}>

      <div style={{
        background: "white",
        padding: "30px",
        borderRadius: "10px",
        width: "400px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
      }}>

        <h1 style={{ textAlign: "center" }}>
          Explain My Plan 🚀
        </h1>

        <InputBox setResult={setResult} />
        <ResultCard data={result} />

      </div>

    </div>
  );
}