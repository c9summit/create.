import React from 'react';

export default function LandingPage({ onGetStarted }) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h1 className="text-9xl font-bold mb-6">
          create.
        </h1>
        <p className="text-xl mb-8 opacity-90">
           to cause to come into existence; bring into being; make; originate; esp., to make or design (something requiring art, skill, invention, etc.)
        </p>
        
        
        <button
          onClick={onGetStarted}
          className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
        >
          Get Started →
        </button>
        
      </div>
    </div>
  );
}