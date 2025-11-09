import React from "react";

export default function RecentProjects() {
  const projects = [
    {
      image: "https://via.placeholder.com/600x400?text=Finance+Website",
      tags: ["Web Design", "Landing Page"],
      title: "Finance Management Landing Page Responsive Website",
    },
    {
      image: "https://via.placeholder.com/600x400?text=Digital+Bank+Website",
      tags: ["Web Design", "Landing Page"],
      title: "Nexacard – Digital Bank Card Responsive Page Website",
    },
    {
      image: "https://via.placeholder.com/600x400?text=Marketing+Platform",
      tags: ["UI/UX", "Web Design"],
      title: "Marketing Platform Dashboard Design",
    },
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 text-center md:text-left">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-blue-600 font-medium">
              Our Projects
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
              Our <span className="text-blue-600">Recent</span> Projects
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto md:mx-0 mt-3">
              Unveiling the extraordinary power. Delving into the exceptionally powerful features of modern design and development.
            </p>
          </div>

          <button className="mt-6 md:mt-0 px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:opacity-90 transition-all duration-200">
            View All Projects
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden w-full max-w-[400px]"
            >
              {/* Image */}
              <div className="w-full h-[230px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="border border-blue-500 text-blue-600 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-semibold text-lg text-gray-900 leading-snug">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
