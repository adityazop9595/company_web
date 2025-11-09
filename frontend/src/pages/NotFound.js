import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 text-center">
      {/* Optional Image */}
      <img
        src="https://illustrations.popsy.co/gray/web-error.svg"
        alt="404 Illustration"
        className="w-72 md:w-96 mb-8"
      />

      <h1 className="text-5xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">Oops! The page you're looking for doesn't exist.</p>

      <Link
        to="/"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
