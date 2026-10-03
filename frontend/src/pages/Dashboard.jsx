import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import DashboardLayout from '../layouts/DashboardLayout';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  const studentName = user?.name || 'Student';
  const careerGoal = user?.careerGoal || 'Data Scientist';

  const stats = [
    { label: 'Total Skills', value: 12, icon: '⚡', color: 'bg-blue-50 text-blue-600' },
    { label: 'Completed Skills', value: 7, icon: '✅', color: 'bg-green-50 text-green-600' },
    { label: 'Projects', value: 4, icon: '🚀', color: 'bg-purple-50 text-purple-600' },
    { label: 'Certificates', value: 3, icon: '🏆', color: 'bg-amber-50 text-amber-600' },
    { label: 'Roadmap Progress', value: '65%', icon: '🗺️', color: 'bg-sky-50 text-sky-600' },
  ];

  const skillProgressData = [
    { name: 'Python', progress: 85 },
    { name: 'C', progress: 70 },
    { name: 'SQL', progress: 80 },
    { name: 'JavaScript', progress: 75 },
    { name: 'DSA', progress: 60 },
    { name: 'Statistics', progress: 65 },
  ];

  const recentProjects = [
    { title: 'Student Career Tracker API', tech: ['Node.js', 'Express', 'MongoDB'], status: 'Completed', date: 'Oct 2026' },
    { title: 'Data Analytics Dashboard', tech: ['Python', 'Pandas', 'Recharts'], status: 'In Progress', date: 'Sep 2026' },
    { title: 'AI Resume Keyword Matcher', tech: ['Python', 'NLP'], status: 'Planned', date: 'Upcoming' },
  ];

  const recommendedSteps = [
    'Complete SQL basics & join queries',
    'Learn Pandas dataframes & transformations',
    'Build a data analysis portfolio project',
    'Practice 5 LeetCode DSA problems per week',
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-sky-600 to-indigo-600 rounded-2xl p-6 sm:p-8 text-white shadow-md flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold">
              Welcome back, {studentName} 👋
            </h1>
            <p className="mt-2 text-sky-100 text-sm sm:text-base">
              Track your skill readiness and take action toward your dream software engineering career.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl border border-white/20 self-start md:self-auto">
            <span className="text-xs text-sky-200 block font-medium uppercase tracking-wider">Target Career Goal</span>
            <span className="text-lg font-bold text-white">{careerGoal}</span>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</span>
                <span className={`p-2 rounded-xl text-lg ${stat.color}`}>{stat.icon}</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-gray-900">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Skills Progress Bars & Preparation Chart Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Skill Progress Bars */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">Core Skill Progress</h2>
              <span className="text-xs font-semibold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-md">Live Proficiency</span>
            </div>
            <div className="space-y-4 pt-2">
              {skillProgressData.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm font-semibold mb-1">
                    <span className="text-gray-700">{s.name}</span>
                    <span className="text-sky-600">{s.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5">
                    <div
                      className="bg-sky-600 h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${s.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Preparation Chart */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Career Preparation Chart</h2>
            <div className="flex-1 min-h-[260px] w-full">
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={skillProgressData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" tick={{ fill: '#64748b', fontSize: 12 }} />
                  <YAxis domain={[0, 100]} tick={{ fill: '#64748b', fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#0f172a', borderRadius: '8px', color: '#fff' }}
                    itemStyle={{ color: '#38bdf8' }}
                  />
                  <Bar dataKey="progress" fill="#0284c7" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Projects & Recommended Next Steps */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Projects */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">Recent Projects</h2>
              <span className="text-xs text-gray-500">3 Logged</span>
            </div>
            <div className="space-y-4">
              {recentProjects.map((p) => (
                <div key={p.title} className="p-4 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{p.title}</h3>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {p.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 text-xs bg-white text-gray-600 rounded border border-gray-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span
                    className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                      p.status === 'Completed'
                        ? 'bg-green-100 text-green-800'
                        : p.status === 'In Progress'
                        ? 'bg-sky-100 text-sky-800'
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {p.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Next Steps */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4">Recommended Next Steps</h2>
              <ul className="space-y-3">
                {recommendedSteps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-sky-600 mt-0.5">📌</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100">
              <button className="w-full py-2 bg-sky-50 text-sky-700 font-semibold text-xs rounded-lg hover:bg-sky-100 transition-colors">
                Generate Full Skill Gap Analysis
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
