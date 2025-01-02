import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';
import SocialLink from './SocialLink';

const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-32 pb-20">
      <h1 className="text-6xl font-bold mb-6 text-blue-600">
        Frontend Developer
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mb-8">
        I build exceptional digital experiences that combine beautiful design with efficient functionality. Focused on creating responsive, user-friendly web applications.
      </p>
      <div className="flex gap-4">
        <SocialLink href="https://github.com/jdmghk" icon={<Github size={20} />} label="GitHub" />
        <SocialLink href="https://www.linkedin.com/in/jacinth-david-990a03211/" icon={<Linkedin size={20} />} label="LinkedIn" />
        <SocialLink href="mailto:jacinthdavid70@gmail.com" icon={<Mail size={20} />} label="Email" />
      </div>
    </div>
  );
};

export default Hero;