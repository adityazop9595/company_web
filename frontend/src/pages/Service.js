import React from 'react'
import ServiceSection from '../components/ServiceSection'
import WhyChooseUsSection from '../components/BitContent/WhyChooseUsSection'
import { ArrowRight, Link } from 'lucide-react'
import HowWeWork from '../components/BitContent/HowWeWork'
import PricingSection from '../components/BitContent/PrisingSection'
import ContectSection from '../components/BitContent/ContectSection'
import {LeftToRightAnimation,RightToLeftAnimation,BottomToTopAnimation} from '../features/utiles/animation/MultiAnimation.jsx'
import { TbWorld } from 'react-icons/tb'
import { SiCircle } from "react-icons/si";
import {  FaThLarge } from "react-icons/fa";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import AboutBitSec from '../components/BitContent/AboutBitSec.jsx'
import StatusBar from '../components/BitContent/StatusBar.jsx'

function Service() {
  return (
    <>
    <ServiceSection/>



<AboutBitSec/>



    


 

{/* <HowWeWork/> */}






{/* <WhyChooseUsSection/> */}


    
    <section className="bg-slate-900 text-white py-10 px-6 md:px-16 overflow-hidden">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    {/* Left Content */}
    <LeftToRightAnimation>
    <div>
      <p className="text-sm tracking-widest text-gray-400 mb-2">
        01 — 
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-8 break-words">
       Power Your Business with Smart IT Solutions


      </h2>

      <div className="flex flex-col sm:flex-row gap-8 mb-8">
        {/* Video Conferencing Feature */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <TbWorld className="text-xl text-white shrink-0" />
            <h4 className="text-lg font-medium">Website Development</h4>
          </div>
           <hr className=' mt-2 mb-2'/>
          <p className="text-gray-400 text-sm">
            Get a fast, mobile-friendly website that represents your brand and brings in customers.
          </p>
        </div>

        {/* Project Dashboards Feature */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <SiAmazonsimpleemailservice className="text-xl text-white shrink-0" />
            <h4 className="text-lg font-medium">Email & Domain Setup</h4>
          </div>
           <hr className=' mt-2 mb-2'/>
          <p className="text-gray-400 text-sm">
            Set up professional email addresses and domains to give your business a trusted online identity.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-8">
        {/* <Link to="/services" className="px-6 py-3 border rounded-full border-purple-500 text-white hover:bg-purple-700 transition-all">
          Explore the Benefits
        </Link> */}
      </div>
    </div>
</LeftToRightAnimation>
    {/* Right Illustration */}
    <RightToLeftAnimation>
          <div className="w-full flex justify-center items-center">
      <img
        src="https://codi.bold-themes.com/demo-01/wp-content/uploads/sites/2/2023/07/hero_image_02.png"
        alt="AI Chat Illustration"
        className="w-full max-w-md sm:max-w-sm md:max-w-full h-auto object-contain"
      />
    </div>
    </RightToLeftAnimation>
  </div>
</section>


<WhyChooseUsSection/>
<StatusBar/>




<section className="bg-white text-gray-900 py-10 px-6 md:px-16 overflow-hidden transition-colors duration-300">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <BottomToTopAnimation>
      {/* Left Illustration */}
      <div className="w-full flex justify-center items-center">
        <span>
          <img
            src="https://codi.bold-themes.com/demo-01/wp-content/uploads/sites/2/2023/07/illustration_01_blue.png"
            alt="AI Chat Illustration"
            className="w-full max-w-md sm:max-w-sm md:max-w-full h-auto object-contain"
          />
        </span>
      </div>
    </BottomToTopAnimation>

    <RightToLeftAnimation>
      <div>
        <p className="text-sm tracking-widest text-gray-500 mb-2">02 —</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-8 break-words">
          Position Your Business for Growth with IT Services
        </h2>

        <div className="flex flex-col sm:flex-row gap-8 mb-8">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <SiCircle className="text-xl text-purple-600 shrink-0" />
              <h4 className="text-lg font-medium">Improved Functionality</h4>
            </div>
            <hr className="mt-2 mb-2 border-gray-300" />
            <p className="text-sm text-gray-600">
              Maintain financial stability and avoid unexpected expenses, which can disrupt operations and impact profitability.
            </p>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <FaThLarge className="text-xl text-purple-600 shrink-0" />
              <h4 className="text-lg font-medium">Optimized Presence</h4>
            </div>
            <hr className="mt-2 mb-2 border-gray-300" />
            <p className="text-sm text-gray-600">
              Boost your digital footprint through high-performing websites, improved search visibility, and strategic social media that drive engagement and growth.
            </p>
          </div>
        </div>

        <div className="mt-8">
          {/* <button className="px-6 py-3 border rounded-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all">
            Explore the Benefits
          </button> */}
        </div>
      </div>
    </RightToLeftAnimation>
  </div>
</section>











    {/* <WhyChooseUsSection/> */}
    {/* <PricingSection/> */}
    <ContectSection/>
    </>
  )
}

export default Service
