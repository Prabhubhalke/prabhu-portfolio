import React from 'react';
import { ExternalLink, Github, ArrowRight, Guitar as Hospital, CreditCard, Zap, GraduationCap } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Hospital Management System',
      description: 'Designed and developed a dynamic Hospital Management System for managing patients, doctors, and appointments. Improved hospital record management and appointment scheduling efficiency by 20%.',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL', 'phpMyAdmin', 'XAMPP', 'Git'],
      icon: <Hospital className="w-6 h-6" />,
      githubUrl: 'https://github.com/Prabhubhalke',
      featured: true,
      category: 'Web Development',
    },
    {
      id: 2,
      title: 'ATM Simulation System',
      description: 'Built a secure Java application simulating ATM functions including login, balance inquiry, withdrawals, and deposits. Implemented OOP principles to improve user experience by 15%.',
      image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Java', 'Eclipse IDE', 'Git', 'OOP'],
      icon: <CreditCard className="w-6 h-6" />,
      githubUrl: 'https://github.com/Prabhubhalke',
      featured: true,
      category: 'Java Application',
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my projects that showcase my skills in web development and Java programming
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 p-2 bg-white/90 dark:bg-gray-800/90 rounded-lg">
                  <div className="text-blue-600 dark:text-blue-400">
                    {project.icon}
                  </div>
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                  
                  <button className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors duration-200">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>



        {/* Call to Action */}
        <div className="text-center">
          <a
            href="https://github.com/Prabhubhalke"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
          >
            View More on GitHub
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;