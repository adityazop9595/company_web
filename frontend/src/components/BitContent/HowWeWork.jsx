
// import React from "react";
// import { motion } from "framer-motion";

// const steps = [
//   {
//     year: "Step 1",
//     title: "Discovery & Planning",
//     description: "Combining ideation, requirements gathering, and setting the technical vision.",
//     color: "text-green-500",
//     position: "left",
//   },
//   {
//     year: "Step 2",
//     title: "Design & Development",
//     description: "Creating prototypes, building the product, and performing internal unit testing.",
//     color: "text-purple-500",
//     position: "right",
//   },
//   {
//     year: "Step 3",
//     title: "Quality Assurance & Release",
//     description: "Final comprehensive testing, packaging, and preparing for deployment or launch.",
//     color: "text-blue-500",
//     position: "left",
//   },
//   {
//     year: "Step 4",
//     title: "✅ Launch & Support",
//     description: "The product is live! We provide shipping, tracking, maintenance, and continued support.",
//     color: "text-cyan-500",
//     position: "right",
//   },
// ];  

// export default function HowWeWork() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="text-center mb-16">
//         <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
//           Our Story
//         </p>
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//           Our Process from Vision to Delivery
//         </h2>
//         <p className="text-gray-500 mt-2 max-w-xl mx-auto">
//           A timeline overview of how we planned, structured, and executed our company foundation.
//         </p>
//       </div>

//       <div className="relative max-w-5xl mx-auto px-4">
//         {/* Vertical line */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-dotted border-gray-300"></div>

//         <div className="space-y-14">
//           {steps.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               className={`relative flex flex-col md:flex-row items-center md:items-start ${
//                 item.position === "left" ? "md:flex-row-reverse" : ""
//               }`}
//             >
//               {/* Dot */}
//               <div className="z-10 w-6 h-6 rounded-full bg-white border-4 border-gray-300 shadow absolute left-1/2 transform -translate-x-1/2"></div>

//               {/* Card with Step */}
//               <div className="w-full md:w-1/2 mt-6 md:mt-0">
//                 <div
//                   className={`w-full md:pr-8 md:pl-8 text-center ${
//                     item.position === "left" ? "md:text-left" : "md:text-right"
//                   }`}
//                 >
//                   <p className={`text-lg font-bold ${item.color}`}>{item.year}</p>
//                 </div>
//                 <div className="bg-white rounded-xl shadow-md p-5 max-w-md mx-auto">
//                   <h3 className="font-semibold text-gray-800 text-lg">{item.title}</h3>
//                   <p className="text-sm text-gray-500 mt-1">{item.description}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }






import React from "react";
import { ArrowRight, ArrowDown } from "lucide-react";

export default function HowWeWork() {
  const steps = [
    { id: 1, title: "Contact Us" },
    { id: 2, title: "Discuss" },
    { id: 3, title: "Finalize Your Needs" },
    { id: 4, title: "Get Your Service Done" },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white mb-12">
          How We Work
        </h2>

        {/* Steps Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 relative">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center relative">
              {/* Circle Step */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-300">
                {step.id}
              </div>

              {/* Title */}
              <p className="mt-3 text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300">
                {step.title}
              </p>

              {/* Arrows */}
              {index < steps.length - 1 && (
                <>
                  {/* Arrow for Desktop (Right) */}
                  <ArrowRight className="hidden md:block absolute right-[-50px] top-1/2 -translate-y-1/2 text-purple-500 w-6 h-6" />

                  {/* Arrow for Mobile (Down) */}
                  <ArrowDown className="md:hidden mt-4 text-purple-500 w-6 h-6" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
