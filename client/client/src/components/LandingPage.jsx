import React from 'react';
import Header from './header';

export default function LandingPage({ onGetStarted }) {
  return (
    <div className="min-h-screen relative">
      {/* Header with highest z-index */}
      <div style={{ position: 'relative', zIndex: 100 }}>
        <Header />
      </div>
      
      <div className="min-h-screen flex items-center p-6" style={{ position: 'relative' }}>
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1
          }}
        >
          <source src="/vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        
        
        {/* Content - Left Aligned */}
        <div 
          className="max-w-2xl text-left text-white ml-32 md:ml-64"
          style={{ zIndex: 10, position: 'relative' }}
        >
          <h1 className="text-9xl font-bold mb-6">
            create.
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-lg">
            to cause to come into existence; bring into being; make; originate; esp., to make or design (something requiring art, skill, invention, etc.)
          </p>
          
          <button
            onClick={onGetStarted}
            className="bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-300 transition-colors shadow-lg"
          >
            CREATE →
          </button>
        </div>
      </div>
    </div>
  );
}