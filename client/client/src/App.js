import React, { useState } from "react";
import GeneratedApp from "./components/GeneratedApp";
import LandingPage from "./components/LandingPage";
import Header from "./components/header";

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetStarted = () => {
    setShowLanding(false);
  };

  const handleGenerate = async () => {
    setIsLoading(true);
    setRequirements(null); 
    
    try {
      const res = await fetch("http://localhost:5000/api/requirements", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description }),
      });
      const data = await res.json();
      setRequirements(data);
    } catch (error) {
      console.error("Error generating app:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (showLanding) {
    return <LandingPage onGetStarted={handleGetStarted} />;
  }

  return (
    <div className="min-h-screen bg-gray-400">
      <Header onGetStarted={() => setShowLanding(true)} showOnlyHome={true} />
      
      <div className="max-w-4xl mx-auto pt-40 px-6">

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg mb-4 h-32 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Describe your app idea in detail... For example: 'A student management system where teachers can add students, assign grades, and students can view their progress.'"
          />

          <button
            onClick={handleGenerate}
            disabled={!description.trim() || isLoading}
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-black-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating...
              </>
            ) : (
              "Generate App Structure"
            )}
          </button>
        </div>

        {isLoading && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Creating Your App...</h3>
              <p className="text-gray-600">Our AI is analyzing your requirements and generating the app structure.</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <div className="bg-gradient-to-r from-black to-white h-3 rounded-full animate-pulse" style={{width: '100%'}}></div>
            </div>
            <div className="flex justify-center items-center space-x-2 text-sm text-gray-600">
              <svg className="animate-spin h-4 w-4 text-black-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Processing with AI...</span>
            </div>
          </div>
        )}

        {requirements && !isLoading && (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <GeneratedApp requirements={requirements} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
