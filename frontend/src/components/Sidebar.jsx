import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: '📊' },
    { name: 'Profile', path: '/profile', icon: '👤' },
    { name: 'Skills', path: '/skills', icon: '⚡' },
    { name: 'Projects', path: '/projects', icon: '🚀' },
    { name: 'Career Roadmap', path: '/roadmap', icon: '🗺️' },
    { name: 'Achievements', path: '/achievements', icon: '🏆' },
    { name: 'Resume Builder', path: '/resume', icon: '📄' },
    { name: 'AI Assistant', path: '/ai-assistant', icon: '🤖' },
    { name: 'Settings', path: '/settings', icon: '⚙️' },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-gray-900 bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar container */}
      <aside
        className={`fixed top-0 left-0 z-30 w-64 h-screen bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Sidebar Header */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200">
          <NavLink to="/" className="flex items-center gap-2 font-bold text-xl text-sky-600">
            <span className="p-1.5 bg-sky-100 rounded-lg">🎓</span>
            <span>CareerTracker</span>
          </NavLink>
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-1 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
          >
            ✕
          </button>
        </div>

        {/* User Quick Info */}
        <div className="p-4 bg-sky-50/50 border-b border-gray-100 m-3 rounded-xl">
          <div className="font-semibold text-gray-900 truncate">
            {user?.name || 'Student User'}
          </div>
          <div className="text-xs text-sky-700 font-medium truncate">
            🎯 {user?.careerGoal || 'Career Aspirant'}
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-3 py-2 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => {
                if (window.innerWidth < 1024) toggleSidebar();
              }}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-sky-600 text-white font-semibold shadow-sm'
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <span className="text-base">{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Sidebar Footer / Logout */}
        <div className="p-3 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
          >
            <span>🚪</span>
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
