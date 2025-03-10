import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Palette, 
  Globe, 
  Database, 
  Smartphone, 
  FileCode 
} from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code size={24} />,
      skills: ["React", , "Next.js","Bootstrap", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Backend Development",
      icon: <Database size={24} />,
      skills: ["Node.js", "MySQL", "Java"]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone size={24} />,
      skills: ["Responsive Design"]
    },
    {
      title: "Web Technologies",
      icon: <Globe size={24} />,
      skills: ["HTML5", "CSS3", "JavaScript", "JQuery", "Performance Optimization", "SEO"]
    },
    {
      title: "Tools & Others",
      icon: <FileCode size={24} />,
      skills: ["Git", "GitHub", "VS Code", "Eclipse", "CI/CD", "Vercel","API"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 -z-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I've worked with a variety of technologies in the web development world.
            Here are my main areas of expertise.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 card-3d"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-6">
                <motion.div 
                  className="p-3 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-lg mr-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-xl font-heading font-bold">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    className="flex items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 + (skillIndex * 0.1) }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-primary-500 rounded-full mr-2"
                      whileHover={{ scale: 1.5 }}
                    ></motion.div>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;