import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';

const ResumeBuilder = () => (
  <DashboardLayout>
    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Resume Builder</h1>
      <p className="text-gray-500 text-sm mb-6">Build, preview, and download ATS-friendly student resumes.</p>
      <div className="bg-sky-50 p-4 rounded-lg text-sky-800 text-sm">
        Interactive resume builder with PDF download capabilities.
      </div>
    </div>
  </DashboardLayout>
);

export default ResumeBuilder;
