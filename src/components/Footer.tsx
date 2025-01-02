import { Mail, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-32 px-4" id="contact">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl font-bold mb-6">Get in Touch</h2>
        <p className="text-xl text-gray-400 mb-16">Got a project we could work on together?</p>
        
        <div className="flex gap-8">
          <a 
            href="mailto:jacinthdavid@brieflynetworks.com" 
            className="bg-[#111111] rounded-full p-6 hover:bg-[#181818] transition-all duration-300 hover:scale-150"
          >
            <Mail size={32} className="text-blue-500" />
          </a>
          <a 
            href="https://twitter.com/jdmghk" 
            className="bg-[#111111] rounded-full p-6 hover:bg-[#181818] transition-all duration-300 hover:scale-150"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size={32} className="text-blue-500" />
          </a>
          <a 
            href="https://www.linkedin.com/in/jacinth-david-990a03211/" 
            className="bg-[#111111] rounded-full p-6 hover:bg-[#181818] transition-all duration-300 hover:scale-150"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={32} className="text-blue-500" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;