import { useState } from "react";
import axios from "axios";

export default function RequirementForm({ onResult }) {
  const [desc, setDesc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/requirements", { description: desc });
    onResult(res.data);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
      <textarea
        className="w-full p-2 border rounded"
        placeholder="Describe your app..."
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button className="mt-2 p-2 bg-blue-500 text-white rounded">Generate</button>
    </form>
  );
}
