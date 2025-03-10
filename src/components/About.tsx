import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, GraduationCap, Briefcase, Heart } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get to know more about me, my background, and what drives me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
              <img 
                src="/profile.jpg" 
                alt="Profile" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-primary-400 dark:border-primary-600 rounded-lg z-0"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-heading font-bold mb-6">
              A passionate Frontend Developer 
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm a frontend developer with a passion for creating beautiful,dynamic,responsive websites. I am always looking to learn new technologies and improve my skills.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              I believe that design is about solving problems and creating intuitive, enjoyable experiences for users. When I'm not coding or pushing pixels, you'll find me exploring new technologies, reading, or traveling.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center">
                <User className="text-primary-500 mr-3" size={20} />
                <div>
                  <p className="font-medium">Name</p>
                  <p className="text-gray-600 dark:text-gray-300">Vinay Kumar</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <GraduationCap className="text-primary-500 mr-3" size={20} />
                <div>
                  <p className="font-medium">Education</p>
                  <p className="text-gray-600 dark:text-gray-300">B.Tech in Electrical and Electronics Engineering</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Briefcase className="text-primary-500 mr-3" size={20} />
                <div>
                  <p className="font-medium">Experience</p>
                  <p className="text-gray-600 dark:text-gray-300">1 Year</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Heart className="text-primary-500 mr-3" size={20} />
                <div>
                  <p className="font-medium">Interests</p>
                  <p className="text-gray-600 dark:text-gray-300">Web Development, Responsive designs, UI</p>
                </div>
              </div>
            </div>
            
            <motion.a 
              href="#contact"
              className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-medium rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;