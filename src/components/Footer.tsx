import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com',
      label: 'GitHub',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/prabhu-bhalke-1a258625a/',
      label: 'LinkedIn',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      url: 'mailto:prabhubhalke379@gmail.com',
      label: 'Email',
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Prabhu</h3>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Aspiring Computer Science Engineer passionate about creating beautiful, functional, 
              and user-friendly web experiences. Always learning, always building, always improving.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>India</p>
              <a
                href="mailto:prabhubhalke379@gmail.com"
                className="hover:text-white transition-colors duration-200 block"
              >
                prabhubhalke379@gmail.com
              </a>
              <a
                href="tel:+916363281278"
                className="hover:text-white transition-colors duration-200 block"
              >
                +91 63632 81278
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p className="flex items-center">
                © {currentYear} Prabhu. Made with{' '}
                <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
                using React & Tailwind CSS
              </p>
            </div>
            
            <div className="text-gray-400 text-sm">
              <p>Designed & Built with passion</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;