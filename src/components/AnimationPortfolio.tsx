import { ExternalLink } from 'lucide-react';

const AnimationPortfolio = () => {
  return (
    <section className="py-20 px-4" id="animations">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">2D Animations</h2>
        <p className="text-gray-400 mb-12">Check out my animation work</p>
        
        <div className="bg-[#111111] rounded-2xl p-8 hover:bg-[#181818] transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">Animation Portfolio</h3>
            <a 
              href="https://read.cv/jdmghk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors"
            >
              View Portfolio <ExternalLink size={20} />
            </a>
          </div>
          <p className="text-gray-400 mb-6">
            Explore my collection of 2D animations, character designs, and motion graphics work.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Character Animation', '2D Animation'].map((tag) => (
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
    </section>
  );
};

export default AnimationPortfolio;