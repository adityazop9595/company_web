import React from "react";
import { ArrowUp } from "lucide-react";
import Logo from "./BitContent/Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-l from-purple-800 via-indigo-600 to-blue-800
 text-white pt-16 pb-8 relative overflow-hidden">
      {/* === TOP CTA SECTION === */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 border-b border-indigo-600 pb-12">
        <div>
          <p className="text-sm font-semibold text-lime-400 uppercase tracking-wide">
            Optimize Your Marketing
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold leading-tight mt-2 font-Poppins">
            Discover Your Website’s Google Ranking Today
          </h2>
        </div>
        <div className="flex justify-start md:justify-end">
          {/* <button className="bg-lime-400 text-gray-900 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-lime-300 hover:scale-105 transition-transform duration-200">
            Get Started
          </button> */}
            <a
    href="https://www.whatsmyserp.com"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-lime-400 text-gray-900 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-lime-300 hover:scale-105 transition-transform duration-200"
  >
    Get Started
  </a>
        </div>
      </div>

      {/* === MAIN FOOTER CONTENT === */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 text-left space-y-10">
        {/* LOGO & DESCRIPTION - full width on small screens */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="col-span-1 lg:col-span-2">
           <Logo/>
            <p className="text-indigo-200 leading-relaxed text-sm max-w-xs">
              At FushionTech, we build modern, fast websites and optimize your online presence with smart SEO so your business can stand out and get more customers.
            </p>
          </div>

          {/* LINK COLUMNS */}
          <div className="col-span-1 lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            <FooterColumn
              title="Services"
              links={ [
  { name: "Website Development" },
  { name: "Technical SEO Audits" },
  { name: "Keyword Research" },
  { name: "On-Page SEO" },
  { name: "Logo & Brand Design" },
]}
            />
            <FooterColumn
              title="Quick Linkes"
              links={[{ name:"home",link:"/"}, {name:"About",link:'/about'},{name:'services',link:'/service'},{name:'contact',link:'/contact'}]}
            />
            <FooterColumn
              title="Support"
              links={[{ name:"Privacy Policy",link:"/privacy-policy"}, {name:"Terms & Conditions"}]}
            />
            {/* <FooterColumn
              title="Shop"
              links={["Shop", "Cart", "Checkout", "My Account"]}
            /> */}
          </div>
        </div>
      </div>

      {/* === BOTTOM COPYRIGHT BAR === */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-indigo-600 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center text-sm text-indigo-200 gap-3">
        <p>
          © {new Date().getFullYear()} Lunax Marketing. All Rights Reserved.
        </p>
        <div className="flex flex-wrap space-x-6">
          <a href="#" className="hover:text-lime-400 transition">
            Refund Policy
          </a>
          <a href="#" className="hover:text-lime-400 transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-lime-400 transition">
            Terms
          </a>
        </div>
      </div>

      {/* === SCROLL TO TOP BUTTON === */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute right-6 bottom-6 bg-lime-400 text-gray-900 rounded-full p-3 shadow-md hover:bg-lime-300 transition-all"
        aria-label="Scroll to top"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
};

// Reusable Column Component
const FooterColumn = ({ title, links }) => (
  <div>
    <h4 className="font-semibold text-white mb-4 uppercase text-sm tracking-wide">
      {title}
    </h4>
    <ul className="space-y-2 text-indigo-200 text-sm">
      {links.map((el, i) => (
        <li key={i}>
          <Link to={el.link} className="hover:text-lime-400 transition-colors">
            {el.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
