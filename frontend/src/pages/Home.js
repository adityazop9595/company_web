import React from "react";
import FaqSection from "../components/FaqSection";
import ServicesSection from "../components/ServiceSection";
import TakeControlSection from "../components/BitContent/TakeControlSection";
import ContectSection from "../components/BitContent/ContectSection";
import heroImg from '../assets/social-media-image1.png'
import { BottomToTopAnimation, LeftToRightAnimation, PoPAnimation, RightToLeftAnimation } from "../features/utiles/animation/MultiAnimation";
// import marketingImg from "../assets/marketing-illustration.png"; // your image path
import star from '../assets/stars-dark.png'
import WhyChooseUsSection from "../components/BitContent/WhyChooseUsSection";
import BookAp from "../components/BitContent/BookAp";
import StatusBar from "../components/BitContent/StatusBar";
import PrivacyPolicy from "../components/BitContent/PrivacyPolicy";
import { Link } from "react-router-dom";

const Home = () => {
   




  return (
    <>
    <section className="bg-gradient-to-b from-white to-purple-50 py-16 md:py-24 relative ">


      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10 relative">
         <img src={star} alt="*" className=" absolute
   top-0 -left-2.5"/>
        {/* Left Text Content */}
        <BottomToTopAnimation >
        <div className="text-left space-y-4 ">
          <div className="">
 
</div>
          <p className="uppercase text-sm font-semibold text-purple-700 tracking-widest">
            Optimize your marketing
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 ">
            {/* Make The Most Of Your{" "} */}
            Create your Amazing Website
            <span className="text-purple-700"> </span> 
with 
FushionTech!
            {/* Networks */}
          </h1>
          <p className="text-gray-600 max-w-md">
            Find a team of digital marketers you can rely on. Every day, we build trust
            through communication, transparency, and results.
          </p>

          <Link to="/book-appointment" className="mt-4 border border-gray-400
           text-black font-semibold px-6 py-3 rounded transition duration-300 shadow-md">
            Get Started
          </Link>
        </div>
</BottomToTopAnimation>
        {/* Right Image */}
        <RightToLeftAnimation>
        <div className="flex justify-center md:justify-end">
          <img
            // src={"https://lunax.keystonedemo.com/wp-content/uploads/2024/04/h1-1024x947.png"}
            src={heroImg}
            alt="Marketing illustration"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl"
          />
        </div>
      </RightToLeftAnimation>
      </div>



       

    </section>

{/* 1 */}
 
{/* 2 */}
<ServicesSection/>

 <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20">
    <div className="max-w-size">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* LEFT CONTENT */}
        <LeftToRightAnimation>
        <div className="space-y-6">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
            Optimize Your Marketing
          </p>

          <h2 className="text-3xl md:text-4xl  font-semibold text-gray-900 leading-tight font-Poppins">
            We Can Help You Acquire New  Customers
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Mus mauris vitae ultricies leo integer malesuada nunc. Ac orci
            phasellus egestas tellus. Montes nascetur ridiculus mus mauris.
            Adipiscing elit pellentesque habitant morbi tristique senectus et
            netus.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Vitae ultricies leo integer malesuada nunc vel risus. Pharetra et
            ultrices neque ornare aenean euismod elementum nisi quis. Egestas
            fringilla phasellus faucibus scelerisque.
          </p>

          <button className="mt-4 bg-lime-400 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-lime-300 transition-all">
            Get Started
          </button>
        </div>
</LeftToRightAnimation>

        {/* RIGHT IMAGE SECTION */}
        <PoPAnimation>
        <div className="relative flex justify-center">
          <img
            src="https://lunax.keystonedemo.com/wp-content/uploads/2024/04/2-1-1024x947.png"
            alt="Marketing Illustration"
            className="max-w-md w-full h-auto object-contain"
          />

          {/* Analytics card */}
          <div className="absolute bottom-0 left-0 bg-white shadow-lg rounded-2xl p-4 w-44 md:w-56">
            <p className="text-sm font-semibold text-gray-700 mb-2">
              Design Activity
            </p>
            <img
              src="https://lunax.keystonedemo.com/wp-content/uploads/2024/04/Group-8.png"
              alt="Chart"
              className="w-full h-auto"
            />
          </div>
        </div>
        </PoPAnimation>
        </div>
      </div>
    </section>










    <div className="w-full overflow-hidden bg-[#f7941d] text-white font-semibold text-sm sm:text-base tracking-wide uppercase py-3 relative">
      <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
        <span className="mx-8">*Inspired With Creativity</span>
        <span className="mx-8">*Design & Development Craft</span>
        <span className="mx-8">*Unlock The Potential</span>
        <span className="mx-8">*Transform Ideas Into Reality</span>
        <span className="mx-8">*Inspired With Creativity</span>
        <span className="mx-8">*Design & Development Craft</span>
        <span className="mx-8">*Unlock The Potential</span>
        <span className="mx-8">*Transform Ideas Into Reality</span>
      </div>
    </div>






{/* 3 */}

<section className="min-h-[60vh] max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* LEFT IMAGE */}
      <PoPAnimation>
      <div className="flex justify-center">
        <img
          src="https://lunax.keystonedemo.com/wp-content/uploads/2024/04/5-1024x947.png"
          alt="Digital Marketing Illustration"
          className="w-full max-w-md"
        />
      </div>
      </PoPAnimation>

      {/* RIGHT TEXT */}
      <RightToLeftAnimation>
      <div className="text-center md:text-left">
        <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
          Digital Marketing
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-gray-900 mt-3 font-Poppins">
          Why You Need Digital Marketing
        </h2>

        <p className="text-gray-600 mt-5 leading-relaxed max-w-lg mx-auto md:mx-0">
          In order to scale new customer acquisition and retention for
          e-commerce brands, we work across the entire customer journey. Our
          team has a successful track record of helping brands scale profitably
          based on high-performing strategies.
        </p>

        <button className="mt-8 bg-lime-400 hover:bg-lime-300 text-gray-900 font-semibold px-8 py-3 rounded-full shadow-md transition-all">
          Get Started
        </button>
      </div>
      </RightToLeftAnimation>
    </section>




<StatusBar/>
{/*  */}
<TakeControlSection/>

  {/* 4 */}
<WhyChooseUsSection/>


  {/* 5 */}

<FaqSection/>
{/* <ContectSection/> */}


{/* <PrivacyPolicy/> */}



</>

  );
};

export default Home;
