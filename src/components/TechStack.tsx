import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const technologies = [
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Next.js'
];

const TechStack = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Technologies I Work With</h3>
      <div className="grid grid-cols-2 gap-4">
        {technologies.map((tech) => (
          <div key={tech} className="flex items-center gap-2 text-gray-600">
            <ArrowUpRight size={16} className="text-blue-600" />
            <span>{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;