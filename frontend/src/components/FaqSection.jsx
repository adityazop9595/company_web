import React, { useState } from 'react'
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { Link } from "react-router-dom";
import arrowCirrly from '../assets/shape-1.webp'
import { motion } from 'framer-motion';
function FaqSection() {
    const faqs = [
  {
    question: "WWhat exactly does FushionTech do?",
    answer:
      "FushionTech is a full-service digital solutions agency specializing in website development, SEO optimization, and digital growth strategies. We design, build, and optimize websites that not only look stunning but also rank higher and convert better.",
  },
  {
    question: "How can FushionTech help my business grow?",
    answer:
      "We combine creative website design with powerful SEO and marketing strategies. From building fast, responsive websites to improving your Google visibility, our goal is to increase your online presence, attract more leads, and boost conversions.",
  },
  {
    question:
      "Can you redesign or improve my existing website?",
    answer:
      "Absolutely. We specialize in revamping outdated or underperforming websites into modern, fast, and SEO-friendly platforms that better represent your brand and drive engagement.",
  },
  {
    question:
      "How long does it take to complete a website project?",
    answer:
      "It depends on the project’s complexity. A standard business website typically takes 2–4 weeks, while more complex sites may take longer. We always set clear timelines before starting and keep you updated throughout the process.",
  },
  {
    question: "Will my website be SEO-friendly and mobile responsive?",
    answer:
      "Yes! Every website we build is SEO-ready, mobile-responsive, and optimized for speed and usability — ensuring your visitors have the best experience on any device.",
  },
];

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    
    
  <section className="bg-[#f7f7fb] min-h-[80vh] flex flex-col items-center justify-center py-16 px-4 md:px-10">
      <div className="max-w-size w-full relative  ">
        {/* Header Section */}
        <div className='flex items-center justify-between flex-wrap'>
        <div className="mb-12">
          <p className="text-sm font-semibold text-purple-700 tracking-widest">
            FAQS
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-2 font-Poppins">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl font-DM-sans">
            Find a team of digital marketers you can rely on. Every day, we
            build trust through communication, transparency, and results.
          </p>
        </div>

        {/* Contact Us Button */}
        <div className=" right-0 top-10 flex items-center space-x-2">
  <img 
    src={arrowCirrly} 
    alt=''
    // className="hidden sm:inline w-6 h-6 sm:w-8 sm:h-8 md:w-30 md:h-30 object-contain"
    className='hidden lg:inline w-6 h-6 sm:w-8 sm:h-8 md:w-35 md:h-30 object-contain'
  />
  <Link to="/contact" className="bg-lime-400 hover:bg-lime-500 transition text-black font-semibold py-3 px-6 rounded-full shadow-md">
    Contact Us
  </Link>
</div>
</div>

        {/* FAQ Accordion */}
        <div className="bg-white rounded-md shadow-sm divide-y divide-gray-200 mt-8">
          {faqs.map((faq, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            // className="border border-gray-200 rounded-lg shadow-sm overflow-hidden"
          >
            <div
              key={index}
              className="py-4 px-5 flex flex-col cursor-pointer hover:bg-gray-50 transition"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-900 text-[15px] md:text-base">
                  {`0${index + 1}. ${faq.question}`}
                </h3>
                {activeIndex === index ? (
                  <HiChevronUp className="text-gray-700 text-xl" />
                ) : (
                  <HiChevronDown className="text-gray-700 text-xl" />
                )}
              </div>
              <div
                className={`transition-all overflow-hidden duration-300 text-gray-600 text-sm mt-2 ${
                  activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>





    
    </>
  )
}

export default FaqSection
