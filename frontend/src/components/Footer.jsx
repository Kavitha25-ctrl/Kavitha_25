import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-bold text-xl text-white">
            <span className="p-2 bg-sky-600 rounded-lg text-white">🎓</span>
            <span>CareerTracker</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Empowering students to build skills, track career goals, generate resumes, and get AI-guided career direction.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/careers" className="hover:text-white transition-colors">Career Pathways</Link></li>
            <li><Link to="/login" className="hover:text-white transition-colors">Login</Link></li>
            <li><Link to="/register" className="hover:text-white transition-colors">Register</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Student Tools</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/skills" className="hover:text-white transition-colors">Skill Tracker</Link></li>
            <li><Link to="/projects" className="hover:text-white transition-colors">Project Portfolio</Link></li>
            <li><Link to="/roadmap" className="hover:text-white transition-colors">Career Roadmap</Link></li>
            <li><Link to="/resume" className="hover:text-white transition-colors">Resume Builder</Link></li>
            <li><Link to="/ai-assistant" className="hover:text-white transition-colors">AI Career Assistant</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Connect</h3>
          <p className="text-sm text-gray-400 mb-4">
            Built for college students and recent graduates aiming for high-impact technical careers.
          </p>
          <div className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Smart Student Career & Skill Tracker. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
