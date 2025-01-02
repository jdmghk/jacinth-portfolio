import React from 'react';
import Navigation from './components/Navigation';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AnimationPortfolio from './components/AnimationPortfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 gradient-bg"></div>
        <div className="max-w-6xl mx-auto px-4 pt-32 pb-20 relative">
          <h1 className="text-7xl font-bold mb-6">Hi, I am Jacinth David 👋</h1>
          <h2 className="text-3xl text-gray-400 mb-12">Backend Developer & DevOps Engineer</h2>
          <p className="text-xl text-gray-400 max-w-2xl mb-8">
            I have always been attracted to complexity and keen to finding interesting solutions.
          </p>
          <p className="text-xl text-gray-400 max-w-2xl mb-12">
            Over the years, I have worked on various projects ranging from small startups to medium sized enterprise.
            I specialize in building robust backend systems and implementing efficient DevOps practices.
          </p>
          <a 
            href="https://drive.google.com/file/d/1nT0V-DTDbTOWzoXt6j95nLy5CU14-WG3/view?usp=sharing" 
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            download
          >
            DOWNLOAD CV
          </a>
        </div>
      </div>

      <Skills />
      <Projects />
      <AnimationPortfolio />
      <Footer />
    </div>
  );
}

export default App;