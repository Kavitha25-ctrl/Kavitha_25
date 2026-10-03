import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Careers = () => (
  <MainLayout>
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Explore Top Tech Career Pathways</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {[
          { title: 'Full Stack Developer', desc: 'Master front-end & back-end web tech including React, Node.js, Express, & MongoDB.' },
          { title: 'Data Scientist', desc: 'Focus on Python, statistics, data visualization, machine learning, and SQL analytics.' },
          { title: 'Data Analyst', desc: 'Leverage Excel, SQL, Python, Pandas, and BI dashboards for data-driven decisions.' },
          { title: 'AI/ML Engineer', desc: 'Specialize in deep learning, neural networks, computer vision, and NLP models.' },
        ].map((c) => (
          <div key={c.title} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-sky-600 mb-2">{c.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </MainLayout>
);

export default Careers;
