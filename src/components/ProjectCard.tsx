import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

const ProjectCard: React.FC<Project> = ({ title, description, image, link, tags }) => {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <a 
            href={link}
            className="text-blue-600 hover:text-blue-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ArrowUpRight size={20} />
          </a>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;