import React from 'react';

const BlogCard = ({ category, title, description, imageUrl, imageAlt }) => (
  <div className="bg-white rounded shadow-md hover:shadow-xl transition-shadow duration-300">
    {/* Card Image and Overlay */}
    <div className="relative overflow-hidden rounded">
      <img
        src={imageUrl}
        alt={imageAlt}
        className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
      />
      {/* Optional: Overlay/Badge on image if needed, as seen in the second card example */}
      {category === 'Marketing Technique' && (
        <span className="absolute top-4 left-4 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full opacity-80">
          Blog
        </span>
      )}
    </div>

    {/* Card Content */}
    <div className="p-6">
      <div className="flex items-center space-x-3 mb-3 text-sm font-medium">
        {/* Category Tag */}
        <span
          className={`px-3 py-1 rounded-full ${
            category === 'SEO Services'
              ? 'bg-blue-100 text-blue-600'
              : category === 'Marketing Technique'
              ? 'bg-purple-100 text-purple-600'
              : 'bg-yellow-100 text-yellow-600'
          }`}
        >
          {category}
        </span>
        <span className="text-gray-500">Post by Admin</span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-indigo-600 transition-colors duration-200">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-6 text-base leading-relaxed">
        {description}
      </p>

      {/* Read More Link/Button */}
      <a
        href="#"
        className="inline-block border border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200"
      >
        Read More
      </a>
    </div>
  </div>
);

const BlogSection = () => {
  // Dummy data mirroring the content structure in the image
  const blogPosts = [
    {
      id: 1,
      category: 'SEO Services',
      title: 'How to Craft they Winning Socials Media Strategy from Scratch',
      description:
        'This can take many forms, including blog posts, videos, social media updates',
      imageUrl: 'https://wp.webtend.net/ridda/wp-content/uploads/2024/10/blog1.jpg', // Placeholder for the orange image
      imageAlt: 'Hand holding a megaphone with social media icons',
    },
    {
      id: 2,
      category: 'Marketing Technique',
      title: 'Unlocking the Power of Paid Ads A Social Media Marketing',
      description:
        'This can take many forms, including blog posts, videos, social media updates',
      imageUrl: 'https://wp.webtend.net/ridda/wp-content/uploads/2024/10/blog2.jpg', // Placeholder for the green target image
      imageAlt: 'Target with an arrow in the bullseye',
    },
    {
      id: 3,
      category: 'SEO Optimization',
      title: 'How to Craft they Winning Socials Media Strategy from Scratch',
      description:
        'This can can take many forms, including blog posts, videos, social media updates',
      imageUrl: 'https://wp.webtend.net/ridda/wp-content/uploads/2024/10/blog3.jpg', // Placeholder for the yellow cartoon image
      imageAlt: 'Cartoon character with a computer screen and SEO icons',
    },
  ];

  return (
    // Main container with light background padding
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-size mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
            Blog & News
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Ultimate Guide To Boosting Engagement On Social Media
          </h1>
        </div>

        {/* Blog Cards Grid Layout */}
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 max-sm:px-10 ">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              category={post.category}
              title={post.title}
              description={post.description}
              imageUrl={post.imageUrl}
              imageAlt={post.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;