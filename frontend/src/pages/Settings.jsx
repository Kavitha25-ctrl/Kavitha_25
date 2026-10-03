import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';

const Settings = () => (
  <DashboardLayout>
    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Account Settings</h1>
      <p className="text-gray-500 text-sm mb-6">Manage preferences, notifications, and security settings.</p>
      <div className="bg-sky-50 p-4 rounded-lg text-sky-800 text-sm">
        Account settings placeholder.
      </div>
    </div>
  </DashboardLayout>
);

export default Settings;
