import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import TechStack from './TechStack';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-8">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-gray-600 mb-6">
            I'm a passionate frontend developer with a keen eye for design and a commitment to creating seamless user experiences. With expertise in React, TypeScript, and modern web technologies, I transform ideas into reality.
          </p>
          <p className="text-gray-600">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
          </p>
        </div>
        <TechStack />
      </div>
    </div>
  );
};

export default About;