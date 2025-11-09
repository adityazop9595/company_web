import React from "react";
import web from "../assets/icon-service-02-300x293.png";
import keyword from "../assets/icon-service-01-300x300.png";
import { PoPAnimation, BottomToTopAnimation } from "../features/utiles/animation/MultiAnimation";

// 🔹 Single Card Component
const ServiceCard = ({ icon, title, description }) => {
  return (
    <div
      className="group relative flex flex-col items-start justify-between rounded-lg border border-gray-200 bg-white 
      p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl overflow-hidden"
    >
      {/* Gradient Background Layer */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 
      bg-gradient-to-br from-indigo-500 via-blue-500 to-purple-600"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        {icon && (
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 
          transition-transform duration-300 group-hover:scale-110">
            <img src={icon} alt={title} className="h-8 w-8 object-contain" />
          </div>
        )}

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm text-gray-600 group-hover:text-gray-100 transition-colors duration-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

// 🔹 Services Data
const serviceData = [
  {
    icon: web,
    title: "Website Development",
    description:
      "We build fast, secure, and SEO-friendly websites tailored to your business goals for maximum impact online.",
  },
  {
    icon: "https://img.freepik.com/vecteurs-premium/optimisation-moteurs-recherche-seo-vecteur-logo-plat-minimal-logo-seo-loupe-fleche_664675-1298.jpg",
    title: "Technical SEO Audits",
    description:
      "We perform deep SEO audits to find and fix issues, improving your website’s visibility, speed, and ranking potential.",
  },
  {
    icon: keyword,
    title: "Keyword Research",
    description:
      "We discover high-value keywords to target the right audience and maximize your organic traffic growth.",
  },
  {
    icon: "",
    title: "On-Page SEO",
    description:
      "We optimize titles, meta tags, and content to ensure your pages rank higher and attract relevant visitors.",
  },
  {
    icon: "",
    title: "Logo & Brand Design",
    description:
      "We design unique brand identities and logos that reflect your business vision and attract your target audience.",
  },
];

// 🔹 Main Section Component
const ServiceSection = () => {
  return (
    <section
      className="bg-white py-16 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage:
          "url('https://lunax.keystonedemo.com/wp-content/uploads/2024/04/vefyuv.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <PoPAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4 font-Poppins">
              Explore Popular Services
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg font-DM-sans">
              From startups to established brands, we craft digital solutions that drive
              growth and measurable success.
            </p>
          </div>
        </PoPAnimation>

        {/* Services Grid */}
        <BottomToTopAnimation>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
            {serviceData.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </BottomToTopAnimation>
      </div>
    </section>
  );
};

export default ServiceSection;
