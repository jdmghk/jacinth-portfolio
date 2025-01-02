import React, { ReactNode } from 'react';

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => {
  return (
    <a 
      href={href}
      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
};

export default SocialLink;