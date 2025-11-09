// import React from "react";
// import CountUp from "react-countup";
// import { useInView } from "react-intersection-observer";
// import { motion } from "framer-motion";

// export default function StatusBar() {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   const stats = [
//     { value: 100, suffix: "%", label: "Commitment to Quality" },
//     { value: 2, suffix: "+", label: "Years Building Digital Brands" },
//     { value: 15, suffix: "+", label: "Websites Delivered" },
//     { value: 25, suffix: "+", label: "Happy Clients" },
//   ];

//   return (
//     <section
//       ref={ref}
//       className="w-full bg-black py-10 md:py-14 flex justify-center items-center"
//     >
//       <div className="max-w-5xl mx-auto px-6">
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               className="flex flex-col items-center group"
//             >
//               <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight group-hover:scale-110 transition-transform duration-300">
//                 {inView ? (
//                   <CountUp
//                     start={0}
//                     end={stat.value}
//                     duration={2}
//                     separator=","
//                   />
//                 ) : (
//                   0
//                 )}
//                 {stat.suffix}
//               </h2>
//               <p className="mt-2 text-xs md:text-sm font-medium text-white/80 tracking-widest uppercase">
//                 {stat.label}
//               </p>
//               <div className="mt-1 h-1 w-8 bg-white/40 rounded-full group-hover:w-14 transition-all duration-300"></div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function StatusBar() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { value: 100, suffix: "%", label: "Commitment to Quality", bg: "bg-green-100" },
    { value: 2, suffix: "+", label: "Years Building Digital Brands", bg: "bg-indigo-100" },
    { value: 15, suffix: "+", label: "Websites Delivered", bg: "bg-rose-100" },
    { value: 25, suffix: "+", label: "Happy Clients", bg: "bg-amber-100" },
  ];

  return (
    <section ref={ref} className="w-full py-10 md:py-14 flex justify-center">
      <div className="max-w-6xl w-full px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`${stat.bg} rounded py-5 flex flex-col items-center justify-center shadow-sm`}
            >
              <h2 className="text-4xl font-bold text-slate-800">
                {inView ? (
                  <CountUp start={0} end={stat.value} duration={2} separator="," />
                ) : (
                  0
                )}
                {stat.suffix}
              </h2>
              <p className="text-sm mt-2 text-slate-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
