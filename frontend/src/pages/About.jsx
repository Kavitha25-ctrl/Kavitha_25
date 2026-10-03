import React from 'react';
import MainLayout from '../layouts/MainLayout';

const About = () => (
  <MainLayout>
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">About Smart Student Career & Skill Tracker</h1>
      <p className="text-gray-600 mb-6 leading-relaxed">
        Smart Student Career & Skill Tracker is a comprehensive platform built to bridge the gap between academic education and industry skill requirements for technical students.
      </p>
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Our Mission</h2>
        <p className="text-gray-600">
          To empower students to organize their technical projects, track progress on skill goals, craft professional resumes, and navigate structured learning roadmaps seamlessly.
        </p>
      </div>
    </div>
  </MainLayout>
);

export default About;
