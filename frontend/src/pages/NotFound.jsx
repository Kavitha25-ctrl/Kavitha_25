import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const NotFound = () => (
  <MainLayout>
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16">
      <div className="text-6xl font-extrabold text-sky-600 mb-4">404</div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h1>
      <p className="text-gray-600 max-w-md mb-6">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-sky-600 text-white font-medium rounded-lg shadow-sm hover:bg-sky-700 transition-colors"
      >
        Return to Home Page
      </Link>
    </div>
  </MainLayout>
);

export default NotFound;
