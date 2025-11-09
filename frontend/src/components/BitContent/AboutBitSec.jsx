import React, { useState } from 'react'
import { motion } from 'framer-motion';
import img from '../../assets/about-rocket.png'
function AboutBitSec() {
      const [activeTab, setActiveTab] = useState("Story");
      const tabs = ["Story", "Mission", "Vision"];
        const tabContent = {
        Story: `Fushion Tech was born from a simple idea: to fuse creativity with technology and help businesses thrive in the digital era. What started as a small team of passionate developers and designers has grown into a full-fledged IT solutions partner, committed to building meaningful digital experiences. We’ve helped startups scale, brands connect, and ideas turn into impactful platforms — all through strategy, code, and design.`,
        Mission: `To empower businesses with smart, scalable, and beautifully crafted digital solutions. We aim to simplify technology and make it work for our clients — whether through websites, applications, or IT infrastructure — by staying innovative, agile, and always aligned with their goals.`,
        Vision: `To become a trusted global technology partner for startups and enterprises alike — known not just for what we build, but how we think. We envision a digital future where every business, regardless of size, has access to world-class technology that drives real growth and lasting impact.`,
      };
  return (
    <>
    
    
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-size mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            className="w-full"
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true ,amount:0.5}}
          >
            <img
              src={img}
              alt="Two men on calling"
              className="  w-full object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            className="w-full"
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <button className="bg-blue-100 text-blue-600 text-sm font-medium px-4 py-1 rounded-full mb-4">
              About Us
            </button>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4">
              We Help Our Clients To <br />
              <span className="text-blue-800">Grow Their Business</span>
            </h2>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
            </p>
            <div className="w-full bg-white rounded border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex border-b border-gray-200">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 text-sm font-medium px-3 py-3 transition-all duration-200 text-center ${
                      activeTab === tab ? "bg-white text-blue-700 border-b-2 border-blue-700" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="p-5 text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                {tabContent[activeTab]}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
  className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16 px-4 sm:px-6"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {[
    {
      title: "No Hidden Cost",
      icon: "💰",
      desc: "We believe in transparent pricing. No surprises or extra fees — ever.",
      borderColor: "from-green-400 to-lime-400",
    },
    {
      title: "Dedicated Team",
      icon: "🧑‍💻",
      desc: "Get a consistent team that understands your business goals deeply.",
      borderColor: "from-indigo-500 to-purple-500",
    },
    {
      title: "24/7 Available",
      icon: "📞",
      desc: "Our experts are ready to support you day or night, every day.",
      borderColor: "from-pink-500 to-red-500",
    },
  ].map(({ title, icon, desc, borderColor }, idx) => (
    <div
      key={idx}
      className={`bg-white dark:bg-gray-800 rounded-2xl p-6 border border-transparent shadow-lg hover:shadow-xl transition duration-300 relative group`}
    >
      {/* Gradient Accent Ring */}
      <div
        className={`absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-br ${borderColor} flex items-center justify-center text-white text-2xl shadow-md`}
      >
        {icon}
      </div>

      <div className="pl-16">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300">{desc}</p>
      </div>
    </div>
  ))}
</motion.div>

      </section>


    
    
    </>
  )
}

export default AboutBitSec
