import { Code2, Database, Cloud, Brackets, FileCode, Server, CloudLightning, FlaskConical, Terminal, Container } from 'lucide-react';

const skills = [
 { icon: <Code2 size={32} />, name: 'Node.js' },
 { icon: <FileCode size={32} />, name: 'PHP' },
 { icon: <Database size={32} />, name: 'MySQL' },
 { icon: <Cloud size={32} />, name: 'AWS' },
 { icon: <Brackets size={32} />, name: 'TypeScript' },
 { icon: <CloudLightning size={32} />, name: 'GCP' },
 { icon: <Server size={32} />, name: 'Redis' },
 { icon: <FlaskConical size={32} />, name: 'Firebase' },
 { icon: <Terminal size={32} />, name: 'Linux' },
 { icon: <Container size={32} />, name: 'PostgreSQL' }
];

const Skills = () => {
 return (
   <div className="max-w-6xl mx-auto px-4 py-20">
     <h2 className="text-2xl font-bold mb-8">SKILLS</h2>
     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
       {skills.map((skill) => (
         <div key={skill.name} className="skill-icon">
           <div className="text-blue-500 mb-2">{skill.icon}</div>
           <span className="text-gray-400">{skill.name}</span>
         </div>
       ))}
     </div>
   </div>
 );
};

export default Skills;