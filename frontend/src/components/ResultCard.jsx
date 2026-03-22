export default function ResultCard({ data }) {
  if (!data) return null;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-4">

      <div>
        <h3 className="font-semibold text-gray-800">🎯 Goal</h3>
        <p className="text-gray-600">{data.goal}</p>
      </div>

      <div>
        <h3 className="font-semibold text-gray-800">⚙️ Method</h3>
        <p className="text-gray-600">{data.method}</p>
      </div>

      <div>
        <h3 className="font-semibold text-gray-800">📅 Timeline</h3>
        <p className="text-gray-600">{data.timeline}</p>
      </div>

      <div>
        <h4 className="font-semibold text-gray-800">🧩 Steps</h4>
        <ul className="list-disc ml-5 text-gray-600">
          {data.steps.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-gray-800">⚠️ Missing Elements</h4>
        <ul className="list-disc ml-5 text-gray-600">
          {data.missing.map((m, i) => (
            <li key={i}>{m}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-gray-800">🚀 Action Steps</h4>
        <ul className="list-disc ml-5 text-gray-600">
          {data.actions.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </div>

      <div className="text-center mt-4">
        <span className="text-lg font-semibold text-blue-600">
          Clarity Score: {data.score}
        </span>
      </div>

    </div>
  );
}