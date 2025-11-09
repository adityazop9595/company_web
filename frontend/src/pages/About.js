// import React, { useState } from 'react'
// import { CheckCircle } from "lucide-react";
// import BlogSection from '../components/BlogSection';
// import TakeControlSection from '../components/BitContent/TakeControlSection';
// import WhyChooseUsSection from '../components/BitContent/WhyChooseUsSection';
// import ContectSection from '../components/BitContent/ContectSection';
// import GetStartedSection from '../components/BitContent/GetStartedSection';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import rocketImg from '../assets/about-rocket.png'
// function About() {


//   return (
//     <>
    



















//      <section className="w-full bg-white py-16 md:py-24 border border-b-gray-300 border-t-transparent">
//       <div className="max-w-size mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
//         {/* Left Text Section */}
//         <div>
//           <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
//             About Us
//           </p>
//           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
//             We Do Great Things <br /> Together
//           </h2>
//           <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed max-w-lg">
//             Find a team of digital marketers you can rely on. Every day, we build
//             trust through communication, transparency, and results.
//           </p>
//         </div>

//         {/* Right Image Section */}
//         <div className="flex justify-center md:justify-end">
//           <img
//             src={"https://lunax.keystonedemo.com/wp-content/uploads/2024/04/h1-8-1024x947.png"}
//             alt="Team working illustration"
//             className="w-full max-w-md md:max-w-lg object-contain"
//           />
//         </div>
//       </div>
//     </section>


// {/*  */}

// {/*  */}

// <BlogSection/>
// {/* <WhyChooseUsSection/> */}






//       {/* Boost Section */}
//       <section className="w-full bg-white py-16 px-6 md:px-12">
//         <div className="max-w-size mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 min-h-[50vh]">
//           <motion.div
//             className="md:w-1/2"
//             initial={{ x: -40, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <p className="text-sm font-semibold text-indigo-600 uppercase mb-2">About Us</p>
//             <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
//             Boosts Your Website Traffic!
//             </h2>
//             <p className="text-lg text-gray-600 mb-6">Boost your website traffic with proven SEO strategies, optimized content, and faster load times. We help your brand reach more people, rank higher on search engines, and turn clicks into loyal customers.</p>
//             {/* <p className="text-gray-500 mb-6">Ea pro tibique comprehensam, sed ea verear numquam molestie. Nam te omittam comprehensam.</p> */}
//             <Link to="/services" className="px-6 py-3 rounded-full border border-black text-sm font-semibold hover:bg-black hover:text-white transition">
//               Discover More
//             </Link>
//           </motion.div>

//           <motion.div
//             className="md:w-1/2 relative"
//             initial={{ x: 40, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true  }}
//           >
//             <div className="absolute -z-10 rounded-full w-56 h-56 bg-lime-100 top-0 left-1/2 transform -translate-x-1/2 md:-translate-x-1/3 md:top-1/4 blur-xl"></div>
//             <img src={rocketImg} alt="Rocket illustration" className="w-full max-w-md mx-auto" loading="lazy" />
//           </motion.div>
//         </div>
//       </section>

//       {/* Tabs + Info */}




// {/*  */}
// <TakeControlSection/>




//  <section className="w-full bg-white py-20">
//       <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
        
//         {/* LEFT SIDE – Circles */}
//         <div className="relative flex justify-center md:justify-start">
//           {/* Circle 1 */}
//           <div className="absolute top-0 left-10 w-48 h-48 rounded-full border border-gray-800 flex items-center justify-center text-gray-900 font-medium text-center">
//             Development
//           </div>

//           {/* Circle 2 */}
//           <div className="absolute top-20 left-28 w-56 h-56 rounded-full bg-black flex items-center justify-center text-white font-semibold text-center">
//             Web Design
//           </div>

//           {/* Circle 3 */}
//           <div className="absolute top-52 left-10 w-52 h-52 rounded-full bg-yellow-400 flex items-center justify-center font-semibold text-gray-900 text-center">
//             Mobile Apps <br /> Design
//           </div>

//           {/* For responsive spacing */}
//           <div className="w-[320px] h-[380px] md:w-[380px] md:h-[420px]"></div>
//         </div>

//         {/* RIGHT SIDE – Text */}
//         <div>
//           <button className="text-sm font-medium text-gray-700 bg-gray-100 px-4 py-2 rounded-lg mb-4">
//             About Agency
//           </button>

//           <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
//             Technology Transforming Ideas Into Reality Empowering Brands With
//             Engaging{" "}
//             <span className="bg-yellow-400 px-1">Ridda</span> Agency
//           </h2>

//           <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
//             At our web design agency, we specialize in creating visually stunning
//             and highly functional websites that help businesses stand out in the
//             digital world. Our team of talented designers and developers are
//             passionate about crafting experiences that drive results.
//           </p>

//           {/* Services List */}
//           <div className="grid sm:grid-cols-2 gap-4 mb-10">
//             <div className="flex items-center gap-3 text-gray-800">
//               <CheckCircle className="w-5 h-5 text-yellow-500" />
//               <span>Digital Product Design</span>
//             </div>
//             <div className="flex items-center gap-3 text-gray-800">
//               <CheckCircle className="w-5 h-5 text-yellow-500" />
//               <span>SEO Optimization</span>
//             </div>
//             <div className="flex items-center gap-3 text-gray-800">
//               <CheckCircle className="w-5 h-5 text-yellow-500" />
//               <span>Web Development</span>
//             </div>
//             <div className="flex items-center gap-3 text-gray-800">
//               <CheckCircle className="w-5 h-5 text-yellow-500" />
//               <span>Mobile Apps Design</span>
//             </div>
//           </div>

//           {/* Button */}
//           <button className="bg-gray-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition-all">
//             Explore Our Projects
//           </button>
//         </div>
//       </div>
//     </section>




// {/*  */}


//  <GetStartedSection/>

// <ContectSection/>


    
//     </>
//   )
// }
// // import { CheckCircle } from 'lucide-react'

// export default About



import React from 'react';
import GetStartedSection from '../components/BitContent/GetStartedSection';
import ContectSection from '../components/BitContent/ContectSection';
import { PoPAnimation } from '../features/utiles/animation/MultiAnimation';
import about1 from '../assets/about-sect-puhjksm2lu4f1zq1nmzjuocvg38aocc5vwetj6wfw8.jpg';
import about2 from '../assets/ideas-sect-pui10wbk83cxhn2h5i421js4gl2g4e2n2kc1io23xo.jpg';
import WhyChooseUsSection from '../components/BitContent/WhyChooseUsSection';
import RecentProjects from '../components/BitContent/RecentProjects';
import StatusBar from '../components/BitContent/StatusBar';

const contentBlocksData = [
  {
    image: about1,
    alt: 'Two people collaborating on a laptop',
    tag: 'ABOUT US',
    headline: 'We\'re On Mission To Help Business Grow Faster Than Ever.',
    description: `We utilize modular, scalable architecture that allows your site to evolve as quickly as your business does. Whether you need to integrate a new CRM, launch a global marketing campaign, or handle 10x traffic spikes, your Techfusion-built platform is ready.

By providing this future-proof, high-performance digital core, Techfusion ensures your website actively drives your mission, allowing your business to grow faster than ever.',
    reverse: false, // Image on left, text on right for the first block`
  },
  {
    image: about2,
    alt: 'Team collaborating and looking at a screen',
    tag: 'IDEAS',
    headline: 'Bringing your ideas to life',
    description: 'This service transforms a raw concept or business challenge into a fully functional, market-ready digital product. It represents a partnership that guides you through every technical and strategic stage of development.',
    reverse: true, // Text on left, image on right for the second block
  },
  // {
  //   image: 'https://placehold.co/600x400', // Replace with your actual image URL
  //   alt: 'Person coding on a computer with a play button overlay',
  //   tag: 'ABOUT US',
  //   headline: 'Our Values',
  //   description: 'Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra enim. Adipiscing nunc condimentum risus id. Acuam mattis magna facilisi fermentum, euismod vitae. Porttitor alt tincidunt dictum facilisis eget ord velit. Nulla laoreet nunc gravida augue aenean sed elementum, in.',
  //   reverse: false, // Image on left, text on right for the third block
  // },
];

const ContentBlock = ({ image, alt, tag, headline, description, reverse }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8  ${reverse ? 'md:grid-flow-col-dense' : ''}`}>
      
      {/* Image Column */}
      <PoPAnimation>
      <div className={`${reverse ? 'md:col-start-2' : ''}`}>
        <img 
          src={image} 
          alt={alt} 
          className="w-full h-auto rounded-lg shadow-md" 
        />
      </div>
</PoPAnimation>

      {/* Text Content Column */}
      
      <div className={`${reverse ? 'md:col-start-1 md:row-start-1' : ''}`}>
        <p className="text-sm font-semibold text-indigo-600 mb-2">{tag}</p>
        <h2 className="text-2xl sm:text-4xl font-semibold font-Poppins text-gray-900 leading-tight mb-4">
          {headline}
        </h2>
        <p className="text-gray-700 text-base ">
          {description}
        </p>
      </div>
    </div>
  );
};



const AboutUsSection = () => {
  return (
    <>
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {contentBlocksData.map((block, index) => (
          <ContentBlock 
            key={index}
            image={block.image}
            alt={block.alt}
            tag={block.tag}
            headline={block.headline}
            description={block.description}
            reverse={block.reverse}
          />
        ))}
      </div>
    </section>
    <WhyChooseUsSection/>
    <GetStartedSection/>
    {/* <RecentProjects/> */}
    <StatusBar/>
    <ContectSection/>
    </>
  );
};

export default AboutUsSection;