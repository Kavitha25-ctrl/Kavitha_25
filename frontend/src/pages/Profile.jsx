import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';

const Profile = () => (
  <DashboardLayout>
    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Student Profile</h1>
      <p className="text-gray-500 text-sm mb-6">Manage your educational details and professional social links.</p>
      <div className="bg-sky-50 p-4 rounded-lg text-sky-800 text-sm">
        Profile management functionality enabled in upcoming stage.
      </div>
    </div>
  </DashboardLayout>
);

export default Profile;
