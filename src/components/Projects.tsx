import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Code, Maximize2 } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Expense Tracker",
      description: "Designed and developed an intuitive Expense Tracker application to help users manage their finances effectively. The tool allows users to log transactions, categorize them by type, and track expenses over time. Key features include a clear display of total expenses, transaction dates, and current balance, ensuring users have a comprehensive view of their financial health. Built with a user-friendly interface, the app simplifies budget management and promotes better financial planning.",
      image: "/Expense-tracker.png",
      tags: ["Html", "Css","JavaScript","Bootstrap"],
      category: "web",
      demoLink: "https://expense-tracker-ebon-zeta.vercel.app/",
      codeLink: "https://github.com/gunjivinay/Expense-Tracker",
      longDescription: "Designed and developed an intuitive Expense Tracker application to help users manage their finances effectively. The tool allows users to log transactions, categorize them by type, and track expenses over time. Key features include a clear display of total expenses, transaction dates, and current balance, ensuring users have a comprehensive view of their financial health. Built with a user-friendly interface, the app simplifies budget management and promotes better financial planning."
    },
    {
      id: 2,
      title: "Weather App ",
      description: "Designed and developed a comprehensive weather application that provides real-time weather updates and forecasts. The app displays current weather conditions, including temperature, pressure, humidity, and Air Quality Index (AQI) metrics such as CO, SO2, NO2, and O3. It also features sunrise and sunset times, a 5-day weather forecast, and hourly temperature updates throughout the day. The user-friendly interface ensures easy access to detailed weather information, making it a reliable tool for users to stay informed about weather conditions.",
      image: "/weatherApp.png",
      tags: ["Html", "Css", "JavaScript","Bootstrap","API's","JQuery"],
      category: "web",
      demoLink: "https://weather-app-beta-vert-70.vercel.app/",
      codeLink: "https://github.com/gunjivinay/Weather-App",
      longDescription: "Designed and developed a comprehensive weather application that provides real-time weather updates and forecasts. The app displays current weather conditions, including temperature, pressure, humidity, and Air Quality Index (AQI) metrics such as CO, SO2, NO2, and O3. It also features sunrise and sunset times, a 5-day weather forecast, and hourly temperature updates throughout the day. The user-friendly interface ensures easy access to detailed weather information, making it a reliable tool for users to stay informed about weather conditions."
    },
    {
      id: 3,
      title: "E-commerce Shopping Website",
      description: "The ecommerce shopping website showcased in the screenshot features a clean and structured shopping cart interface, built using core web technologies including HTML for content structure, CSS for styling, and JavaScript for dynamic functionality. The design emphasizes responsiveness, ensuring seamless user experience across devices, achieved through media queries that adapt the layout for different screen sizes. The cart displays a comprehensive list of numbered items, likely representing product quantities or prices, formatted for readability with comma-separated values. This modern, user-friendly approach highlights efficient front-end development practices, combining aesthetic clarity with robust technical execution to deliver an intuitive shopping experience.",
      image: "/E-commerce.png",
      tags: ["Html", "Css", "JavaScript"],
      category: "web",
      demoLink: "https://e-commerce-shopping-website-dun.vercel.app/",
      codeLink: "https://github.com/gunjivinay/E-commerce-Shopping-Website",
      longDescription: "The ecommerce shopping website showcased in the screenshot features a clean and structured shopping cart interface, built using core web technologies including HTML for content structure, CSS for styling, and JavaScript for dynamic functionality. The design emphasizes responsiveness, ensuring seamless user experience across devices, achieved through media queries that adapt the layout for different screen sizes. The cart displays a comprehensive list of numbered items, likely representing product quantities or prices, formatted for readability with comma-separated values. This modern, user-friendly approach highlights efficient front-end development practices, combining aesthetic clarity with robust technical execution to deliver an intuitive shopping experience."
    },
   
   

   
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const openProjectDetails = (id: number) => {
    setSelectedProject(id);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const getSelectedProject = () => {
    return projects.find(project => project.id === selectedProject);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 blue-theme:bg-blue-950 purple-theme:bg-purple-950 green-theme:bg-green-950">
       <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary-500 dark:bg-primary-400 blue-theme:bg-blue-500 purple-theme:bg-purple-500 green-theme:bg-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 blue-theme:text-gray-300 purple-theme:text-gray-300 green-theme:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects. Each project is a unique piece of development.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-white dark:bg-gray-800 blue-theme:bg-blue-900 purple-theme:bg-purple-900 green-theme:bg-green-900 p-1 rounded-lg shadow-md">
            <motion.button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'all' 
                  ? 'bg-primary-500 dark:bg-primary-600 blue-theme:bg-blue-600 purple-theme:bg-purple-600 green-theme:bg-green-600 text-white' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700 blue-theme:hover:bg-blue-800 purple-theme:hover:bg-purple-800 green-theme:hover:bg-green-800'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All
            </motion.button>
            <motion.button 
              onClick={() => setFilter('web')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'web' 
                  ? 'bg-primary-500 dark:bg-primary-600 blue-theme:bg-blue-600 purple-theme:bg-purple-600 green-theme:bg-green-600 text-white' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700 blue-theme:hover:bg-blue-800 purple-theme:hover:bg-purple-800 green-theme:hover:bg-green-800'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Web
            </motion.button>
            <motion.button 
              onClick={() => setFilter('mobile')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'mobile' 
                  ? 'bg-primary-500 dark:bg-primary-600 blue-theme:bg-blue-600 purple-theme:bg-purple-600 green-theme:bg-green-600 text-white' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700 blue-theme:hover:bg-blue-800 purple-theme:hover:bg-purple-800 green-theme:hover:bg-green-800'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Mobile
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 blue-theme:bg-blue-900 purple-theme:bg-purple-900 green-theme:bg-green-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
              whileHover={{ 
                y: -10,
                boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.15)"
              }}
            >
              <div className="relative overflow-hidden group h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-end space-x-2">
                      <motion.button
                        onClick={() => openProjectDetails(project.id)}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Maximize2 size={18} className="text-white" />
                      </motion.button>
                      <motion.a 
                        href={project.demoLink}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={18} className="text-white" />
                      </motion.a>
                      <motion.a 
                        href={project.codeLink}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={18} className="text-white" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 blue-theme:text-gray-300 purple-theme:text-gray-300 green-theme:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <motion.span 
                      key={index}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/50 blue-theme:bg-blue-800/50 purple-theme:bg-purple-800/50 green-theme:bg-green-800/50 text-primary-700 dark:text-primary-300 blue-theme:text-blue-300 purple-theme:text-purple-300 green-theme:text-green-300 text-xs font-medium rounded-full"
                      whileHover={{ scale: 1.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a 
            href="https://github.com/gunjivinay"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-800 dark:bg-gray-700 blue-theme:bg-blue-800 purple-theme:bg-purple-800 green-theme:bg-green-800 hover:bg-gray-700 dark:hover:bg-gray-600 blue-theme:hover:bg-blue-700 purple-theme:hover:bg-purple-700 green-theme:hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} className="mr-2" />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProjectDetails}
          >
            <motion.div 
              className="bg-white dark:bg-gray-800 blue-theme:bg-blue-900 purple-theme:bg-purple-900 green-theme:bg-green-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {getSelectedProject() && (
                <div>
                  <div className="relative h-64 md:h-80">
                    <img 
                      src={getSelectedProject()?.image} 
                      alt={getSelectedProject()?.title} 
                      className="w-full h-full object-cover"
                    />
                    <button 
                      onClick={closeProjectDetails}
                      className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-heading font-bold mb-2">{getSelectedProject()?.title}</h2>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {getSelectedProject()?.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/50 blue-theme:bg-blue-800/50 purple-theme:bg-purple-800/50 green-theme:bg-green-800/50 text-primary-700 dark:text-primary-300 blue-theme:text-blue-300 purple-theme:text-purple-300 green-theme:text-green-300 text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 blue-theme:text-gray-300 purple-theme:text-gray-300 green-theme:text-gray-300 mb-6">
                      {getSelectedProject()?.longDescription}
                    </p>
                    <div className="flex space-x-4">
                      <motion.a 
                        href={getSelectedProject()?.demoLink}
                        className="px-4 py-2 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 blue-theme:bg-blue-600 blue-theme:hover:bg-blue-700 purple-theme:bg-purple-600 purple-theme:hover:bg-purple-700 green-theme:bg-green-600 green-theme:hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} className="inline mr-2" />
                        Live Demo
                      </motion.a>
                      <motion.a 
                        href={getSelectedProject()?.codeLink}
                        className="px-4 py-2 bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 blue-theme:bg-blue-800 blue-theme:hover:bg-blue-700 purple-theme:bg-purple-800 purple-theme:hover:bg-purple-700 green-theme:bg-green-800 green-theme:hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} className="inline mr-2" />
                        View Code
                      </motion.a>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;