import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const Home = () => {
  const features = [
    {
      title: 'Skill Progress Tracker',
      desc: 'Log proficiency across Programming, Web Dev, Data Science, and Cloud with clear visual progress metrics.',
      icon: '⚡',
    },
    {
      title: 'Interactive Roadmaps',
      desc: 'Follow curated career paths for Full Stack, Data Science, Data Analyst, and AI/ML with step-by-step milestones.',
      icon: '🗺️',
    },
    {
      title: 'Project Showcase',
      desc: 'Keep all your practical projects, GitHub repositories, and live demo links organized in one place.',
      icon: '🚀',
    },
    {
      title: 'AI Career Assistant',
      desc: 'Get automated skill gap analysis and recommended learning steps personalized for your target role.',
      icon: '🤖',
    },
    {
      title: 'One-Click Resume Builder',
      desc: 'Generate clean, professional, ATS-friendly resumes pre-filled with your verified skills and projects.',
      icon: '📄',
    },
    {
      title: 'Achievements Timeline',
      desc: 'Store certificates, hackathon wins, internships, and workshops in a searchable timeline.',
      icon: '🏆',
    },
  ];

  const careerPaths = [
    { title: 'Full Stack Developer', tags: ['React', 'Node.js', 'MongoDB', 'REST APIs'], count: '9 Steps' },
    { title: 'Data Scientist', tags: ['Python', 'Statistics', 'Pandas', 'Machine Learning'], count: '9 Steps' },
    { title: 'Data Analyst', tags: ['Excel', 'SQL', 'Python', 'Power BI'], count: '7 Steps' },
    { title: 'AI/ML Engineer', tags: ['Python', 'Mathematics', 'Deep Learning', 'NLP'], count: '8 Steps' },
  ];

  const steps = [
    { step: '01', title: 'Set Your Career Goal', desc: 'Select your target role (e.g. Data Scientist or Full Stack Engineer) and enter your college details.' },
    { step: '02', title: 'Track Skills & Projects', desc: 'Add technical skills, update proficiency, and log real-world projects with live demos.' },
    { step: '03', title: 'Follow Learning Roadmaps', desc: 'Follow structured roadmaps and analyze skill gaps with AI recommendations.' },
    { step: '04', title: 'Export & Apply', desc: 'Generate an ATS-ready resume with one click and apply to target software and tech roles.' },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-sky-50 to-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100 text-sky-800 text-sm font-semibold mb-6">
            ✨ Smart Student Career Platform
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6 max-w-4xl mx-auto">
            Build Your Skills. Track Your Progress. <span className="text-sky-600">Shape Your Career.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            The all-in-one portfolio and career preparation dashboard for college students to manage technical skills, roadmaps, projects, certificates, and resumes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/register"
              className="px-8 py-3.5 bg-sky-600 text-white font-semibold text-base rounded-xl shadow-lg hover:bg-sky-700 transition-all transform hover:-translate-y-0.5"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="px-8 py-3.5 bg-white text-gray-700 font-semibold text-base rounded-xl border border-gray-300 shadow-sm hover:bg-gray-50 transition-all"
            >
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Everything You Need To Prepare For Tech Careers</h2>
            <p className="text-gray-600 mt-2">Designed specifically for computer science and engineering college students.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Predefined Learning Roadmaps</h2>
            <p className="text-gray-600 mt-2">Follow structured step-by-step guides tailored for high-demand tech roles.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerPaths.map((path) => (
              <div key={path.title} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="inline-block px-2.5 py-1 text-xs font-semibold text-sky-700 bg-sky-50 rounded-md mb-3">
                    {path.count}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{path.title}</h3>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {path.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <Link to="/register" className="text-sm font-semibold text-sky-600 hover:text-sky-700 flex items-center gap-1 mt-2">
                  View Roadmap &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            <p className="text-gray-600 mt-2">4 simple steps to accelerate your college career preparation.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="p-6 rounded-xl border border-gray-100 bg-white relative">
                <div className="text-3xl font-black text-sky-200 mb-2">{s.step}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-sky-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to elevate your career readiness?</h2>
          <p className="text-sky-200 max-w-xl mx-auto mb-8 text-lg">
            Join students using Smart Student Career & Skill Tracker to organize their learning and land top internships.
          </p>
          <Link
            to="/register"
            className="inline-block px-8 py-3.5 bg-white text-sky-900 font-bold rounded-xl shadow-lg hover:bg-sky-50 transition-colors"
          >
            Create Free Account Now
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
