// import React from 'react';
// import { Briefcase, ArrowRight } from 'lucide-react'; // Changed icon to Briefcase for professional context

// const GetStartedSection = () => {
//   // Image URL from the user's previous code
//   const imageUrl = "https://wp.rrdevs.net/runok/wp-content/uploads/2024/04/cta-img-1.png";

//   return (
//     <section className="py-16 bg-gray-50 font-sans">
//       <div className="max-w-size mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* The Professional Card Container */}
//         <div className="relative p-6 md:p-10 bg-slate-900 text-white rounded
//                         shadow-2xl shadow-gray-400/30 overflow-hidden
//                         flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12
//                         transition-all duration-300 transform hover:shadow-indigo-500/40 hover:-translate-y-1">

//           {/* Subtle Right-Side Fade/Overlay */}
//           <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-500/10 opacity-70 rounded-r-2xl pointer-events-none hidden md:block" />

//           {/* Left Content: Text */}
//           <div className="relative z-10 text-center md:text-left flex-shrink min-w-0">
//             <div className="flex items-center justify-center md:justify-start mb-2">
//                 <Briefcase className="w-5 h-5 text-indigo-400 mr-2" />
//                 <p className="text-sm font-medium uppercase text-indigo-400 tracking-widest">
//                   Strategic Partnership
//                 </p>
//             </div>
            
//             <h3 className="text-3xl md:text-4xl font-bold leading-snug">
//               Ready to launch your project with <span className="text-indigo-400">confidence?</span>
//             </h3>
//             <p className="mt-2 text-gray-400 max-w-sm">
//                 Connect with our expert team to define requirements and establish your development roadmap today.
//             </p>
//           </div>

//           {/* Right Content: Circular Image and Button */}
//           <div className="relative z-10 flex-shrink-0 w-36 h-36 md:w-40 md:h-40">
//             <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center 
//                             shadow-xl shadow-slate-900/50">
              
//               {/* Image */}
//               <img
//                 src={imageUrl}
//                 alt="Professional team collaboration"
//                 // Slightly reduced grayscale/opacity for a cleaner look
//                 className="absolute inset-0 w-full h-full object-cover grayscale opacity-75" 
//                 onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/160x160/1f2937/FFFFFF?text=Team"; }}
//               />
              
//               {/* Circular Call-to-Action Button overlay */}
//               <button 
//                 className="group relative z-10 w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center 
//                            text-white font-semibold transition-all duration-300 
//                            hover:bg-indigo-500 shadow-xl shadow-indigo-500/40
//                            focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:ring-opacity-50"
//                 aria-label="Start Project"
//               >
//                 <span className="sr-only">Start Project</span>
//                 <ArrowRight className="w-8 h-8 transition-transform duration-300 group-hover:rotate-45" />
//               </button>
//             </div>
//           </div>
          
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GetStartedSection;





import React from "react";
import { ArrowRight } from "lucide-react";
import { BottomToTopAnimation, LeftToRightAnimation, RightToLeftAnimation } from "../../features/utiles/animation/MultiAnimation";

export default function GetStartedSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center min-h-[40vh] overflow-hidden 
      bg-gradient-to-br from-purple-800 via-purple-700 to-indigo-800 px-6 md:px-12"
      style={{
        backgroundImage:
          "url('https://z.commonsupport.com/timisoara/wp-content/uploads/2021/07/shape-6.png'), linear-gradient(to bottom right, #5b21b6, #7e22ce, #3730a3)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Floating Shapes */}
      <div className="absolute top-10 left-8 w-16 h-16 bg-gradient-to-br from-orange-400 to-purple-600 rounded-full mix-blend-screen blur-sm animate-bounce-slow"></div>
      <div className="absolute top-16 right-24 w-20 h-20 bg-gradient-to-tr from-orange-500 to-purple-600 rotate-45 clip-triangle mix-blend-screen blur-sm animate-float"></div>
      <div className="absolute bottom-20 left-[45%] w-14 h-14 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full mix-blend-screen blur-sm animate-pulse"></div>

      {/* Text Content */}
      <div className="max-w-3xl text-white mt-10 md:mt-0 relative z-10">
        <h1 className="text-3xl sm:text-3xl md:text-4xl font-semibold leading-tight font-Poppins">
         <LeftToRightAnimation>

          <span className="break-words sm:whitespace-nowrap ">
          We Create Digital Products That Make
          </span>
         </LeftToRightAnimation>
         <RightToLeftAnimation>
<span>
           People Live Easier.
          </span>
         </RightToLeftAnimation>

          
        </h1>

        <div className="mt-8">
          <BottomToTopAnimation>
          <button className="flex items-center gap-2 mx-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300">
            Explore Now <ArrowRight className="w-5 h-5" />
          </button>
          </BottomToTopAnimation>
        </div>
      </div>
    </section>





  );
}
