import React from 'react';
import { Download, Code, Palette, Database, Monitor, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'Java', level: 90, icon: <Code className="w-6 h-6" /> },
    { name: 'HTML', level: 85, icon: <Palette className="w-6 h-6" /> },
    { name: 'CSS', level: 80, icon: <Palette className="w-6 h-6" /> },
    { name: 'JavaScript', level: 75, icon: <Code className="w-6 h-6" /> },
    { name: 'PHP', level: 70, icon: <Code className="w-6 h-6" /> },
    { name: 'MySQL', level: 75, icon: <Database className="w-6 h-6" /> },
  ];

  const tools = [
    'Eclipse IDE',
    'Visual Studio',
    'Git',
    'XAMPP',
    'phpMyAdmin',
    'Jupyter',
    'Google Colab',
  ];

  const softSkills = [
    'Problem-Solving',
    'Team Collaboration',
    'Time Management',
    'Effective Communication',
  ];

  const hobbies = [
    'Learning New Technologies',
    'Problem-Solving',
    'Team Collaboration',
    'Continuous Learning',
  ];

  const handleDownloadResume = () => {
    // In a real application, this would download the actual resume
    alert('Resume download would be implemented here');
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Motivated Computer Science student with solid knowledge of Java programming and foundational software development skills
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-600 dark:text-gray-300">
              <p className="mb-6">
                Hello! I'm Prabhu, a motivated Computer Science student with solid knowledge of Java programming 
                and foundational software development skills. I'm eager to learn and contribute as a junior software developer.
              </p>
              
              <p className="mb-6">
                My journey in software development started with Java programming and has evolved into 
                a comprehensive understanding of web technologies including HTML, CSS, JavaScript, PHP, and MySQL. 
                I enjoy building practical applications that solve real-world problems.
              </p>
              
              <p className="mb-8">
                I'm passionate about continuous learning and always eager to explore new technologies. 
                My goal is to contribute to meaningful projects while developing my skills in software development.
              </p>
            </div>

            <button
              onClick={handleDownloadResume}
              className="group flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download Resume
            </button>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Technical Skills
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center mb-3">
                    <div className="text-blue-600 dark:text-blue-400 mr-3">
                      {skill.icon}
                    </div>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </span>
                  </div>
                  
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  
                  <div className="text-right mt-1">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Developer Tools */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Developer Tools & IDEs
              </h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Certifications
              </h4>
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
                <div className="flex items-center">
                  <BookOpen className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" />
                  <span className="text-gray-900 dark:text-white">
                    Object Oriented Programming System (OOPs) with Java Application
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Education
          </h3>
          
          <div className="space-y-6">
            {/* Bachelor's Degree */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Bachelor of Engineering (BE) in Computer Science Engineering
                    </h4>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-600 dark:text-gray-300 mb-2">
                      <div className="flex items-center mb-1 sm:mb-0">
                        <Monitor className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                        <span className="font-medium">B.N.M. Institute of Technology, Bangalore, India</span>
                      </div>
                      
                      <div className="flex items-center">
                        <span className="font-semibold text-green-600 dark:text-green-400">CGPA: 7.24</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h5 className="font-semibold text-gray-900 dark:text-white">
                    Highlights:
                  </h5>
                  <ul className="space-y-1">
                    <li className="flex items-start text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Gained hands-on experience through real-time projects</span>
                    </li>
                    <li className="flex items-start text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Improved problem-solving and teamwork skills</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pre-University */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Pre-University Course (PUC)
                    </h4>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-600 dark:text-gray-300 mb-2">
                      <div className="flex items-center mb-1 sm:mb-0">
                        <Monitor className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                        <span className="font-medium">Allama Iqbal Independent PU College, Bidar, India</span>
                      </div>
                      
                      <div className="flex items-center">
                        <span className="font-semibold text-green-600 dark:text-green-400">Percentage: 100%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h5 className="font-semibold text-gray-900 dark:text-white">
                    Highlights:
                  </h5>
                  <ul className="space-y-1">
                    <li className="flex items-start text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Secured first class with distinction</span>
                    </li>
                    <li className="flex items-start text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Built a strong foundation in core science subjects</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* High School */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      SSLC / Class 10
                    </h4>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-600 dark:text-gray-300 mb-2">
                      <div className="flex items-center mb-1 sm:mb-0">
                        <Monitor className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                        <span className="font-medium">BTVP High School, Hallikhed (B), Bidar, India</span>
                      </div>
                      
                      <div className="flex items-center">
                        <span className="font-semibold text-green-600 dark:text-green-400">Percentage: 96.16%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h5 className="font-semibold text-gray-900 dark:text-white">
                    Highlights:
                  </h5>
                  <ul className="space-y-1">
                    <li className="flex items-start text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Consistently performed well academically</span>
                    </li>
                    <li className="flex items-start text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Active participation in school activities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Relevant Coursework */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Relevant Coursework
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Data Structures and Algorithms',
              'Database Management Systems',
              'Operating Systems',
              'Web Development',
              'Software Engineering'
            ].map((course, index) => (
              <div
                key={course}
                className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-gray-900 dark:text-white font-medium">{course}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills & Hobbies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Soft Skills
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {softSkills.map((skill, index) => (
                <div
                  key={skill}
                  className="flex items-center p-3 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-900 dark:text-white">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hobbies */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Hobbies & Interests
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {hobbies.map((hobby, index) => (
                <div
                  key={hobby}
                  className="flex items-center p-3 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-gray-900 dark:text-white">{hobby}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;