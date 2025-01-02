import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Navigation = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
      <div className="flex gap-6">
        <a href="#projects" className="text-gray-400 hover:text-blue-500 transition-colors">Projects</a>
        <a href="#animations" className="text-gray-400 hover:text-blue-500 transition-colors">Animations</a>
        <a href="#contact" className="text-gray-400 hover:text-blue-500 transition-colors">Contact Me</a>
      </div>
      <div className="flex gap-4">
        <a href="https://github.com/jdmghk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
          <Github size={24} />
        </a>
        <a href="https://twitter.com/jdmghk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
          <Twitter size={24} />
        </a>
        <a href="https://www.linkedin.com/in/jacinth-david-990a03211/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
          <Linkedin size={24} />
        </a>
      </div>
    </div>
  );
};

export default Navigation;