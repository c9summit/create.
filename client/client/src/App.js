import React, { useState } from "react";
import GeneratedApp from "./components/GeneratedApp";
import LandingPage from "./components/LandingPage";

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState(null);

  const handleGetStarted = () => {
    setShowLanding(false);
  };

  const handleGenerate = async () => {
    const res = await fetch("http://localhost:5000/api/requirements", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description }),
    });
    const data = await res.json();
    setRequirements(data);
  };

  if (showLanding) {
    return <LandingPage onGetStarted={handleGetStarted} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">AI App Builder</h1>
          <button
            onClick={() => setShowLanding(true)}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Home
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg mb-4 h-32 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Describe your app idea in detail... For example: 'A student management system where teachers can add students, assign grades, and students can view their progress.'"
          />

          <button
            onClick={handleGenerate}
            disabled={!description.trim()}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium"
          >
            Generate App Structure
          </button>
        </div>

        {requirements && (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <GeneratedApp requirements={requirements} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
