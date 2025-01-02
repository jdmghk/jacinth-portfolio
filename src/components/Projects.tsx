import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20" id="projects">
      <h2 className="text-4xl font-bold mb-4">Projects</h2>
      <p className="text-gray-400 mb-12">A few selected projects I've had my hands on</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="project-card group">
            <div className="aspect-video overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <a 
                  href={project.link}
                  className="text-blue-500 hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowUpRight size={20} />
                </a>
              </div>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;