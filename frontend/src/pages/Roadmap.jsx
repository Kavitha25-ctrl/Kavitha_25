import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';

const Roadmap = () => (
  <DashboardLayout>
    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Career Roadmap</h1>
      <p className="text-gray-500 text-sm mb-6">Interactive step-by-step career path preparation timeline.</p>
      <div className="bg-sky-50 p-4 rounded-lg text-sky-800 text-sm">
        Predefined career roadmaps for Data Science, Full Stack, Data Analyst, and AI/ML Engineer.
      </div>
    </div>
  </DashboardLayout>
);

export default Roadmap;
