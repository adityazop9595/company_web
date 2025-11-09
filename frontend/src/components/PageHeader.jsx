import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { HiChevronRight } from 'react-icons/hi';

const PageHeader = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  const currentPage = pathSegments[pathSegments.length - 1] || 'home';

  const formatLabel = (text) =>
    text
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          {formatLabel(currentPage)}
        </h1>
        <hr className="border-t border-gray-300 my-6 w-3/4 mx-auto" />

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 flex justify-center items-center gap-2">
          <Link to="/" className="hover:text-gray-700">
            Home
          </Link>
          {pathSegments.map((segment, index) => (
            <React.Fragment key={index}>
              <HiChevronRight className="text-gray-400" />
              <span
                className={`${
                  index === pathSegments.length - 1
                    ? 'text-gray-900 font-medium'
                    : 'hover:text-gray-700'
                }`}
              >
                {formatLabel(segment)}
              </span>
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default PageHeader;
