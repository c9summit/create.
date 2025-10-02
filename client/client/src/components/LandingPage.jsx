import React from 'react';
import Header from './header';

export default function LandingPage({ onGetStarted }) {
  return (
    <div className="min-h-screen relative">
      {/* Header with highest z-index */}
      <div style={{ position: 'relative', zIndex: 100 }}>
        <Header onGetStarted={onGetStarted} />
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
          
          
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-gray-400 px-6 py-20 flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-bold text-black mb-8">About</h2>
          <p className="text-2xl text-black leading-relaxed">
            create. - a simple and intuitive platform that lets you bring your app 
            ideas to life instantly. Just describe what you have in mind, and our system uses the power 
            of artificial intelligence to capture your requirements and generate a mock application 
            complete with roles, features, and interactive forms. Designed to be fast, user-friendly, 
            and accessible, create. makes it easy for anyone — whether you’re a student, 
            entrepreneur, or professional — to prototype and visualize applications without writing a 
            single line of code.
          </p>
        </div>
      </section>
    </div>
  );
}