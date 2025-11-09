import React from "react";
import { Layers, Target, UserCheck, Users, Gem } from "lucide-react";

export default function WhyChooseUsSection() {
  const features = [
    { icon: <Layers className="w-6 h-6 text-white" />, title: "Versatile Applications" },
    { icon: <Target className="w-6 h-6 text-white" />, title: "Strategic Approach" },
    { icon: <UserCheck className="w-6 h-6 text-white" />, title: "Complete Ownership" },
    { icon: <Users className="w-6 h-6 text-white" />, title: "Collaborative Process" },
    { icon: <Gem className="w-6 h-6 text-white" />, title: "Future-Proof Design" },
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Subtitle */}
        <p className="text-sm uppercase tracking-[0.2em] text-gray-500 font-medium">
          Seamless Approach
        </p>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold font-Poppins text-gray-900 mt-2 leading-11">
          Why choose me for your <br className="hidden sm:block" /> Brand Identity
        </h2>

        {/* Grid */}
        <div className="mt-16 grid gap-6 place-items-center">
          {/* Row 1 - 3 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.slice(0, 3).map((item, i) => (
              <div
                key={i}
                className="flex items-center bg-gray-50 border border-gray-200 hover:shadow-md transition-all duration-200
                           w-[300px] sm:w-[320px] lg:w-[340px] py-2.5 px-5 "
              >
                <div className="bg-blue-600 p-3 flex items-center justify-center mr-4">
                  {item.icon}
                </div>
                <p className="font-medium text-gray-900 text-lg">{item.title}</p>
              </div>
            ))}
          </div>

          {/* Row 2 - 2 items centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center mt-2">
            {features.slice(3).map((item, i) => (
              <div
                key={i}
                className="flex items-center bg-gray-50 border border-gray-200 hover:shadow-md transition-all duration-200
                           w-[300px] sm:w-[320px] lg:w-[340px] py-2.5 px-5 mx-auto"
              >
                <div className="bg-blue-600 p-3 flex items-center justify-center mr-4">
                  {item.icon}
                </div>
                <p className="font-medium text-gray-900 text-lg">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
