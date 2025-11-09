import React from 'react'
import { PoPAnimation, RightToLeftAnimation } from '../../features/utiles/animation/MultiAnimation';


function TakeControlSection() {
     const steps = [
  {
    id: "01",
    title: "Startup",
    description:
      "Share your vision and goals with us. We’ll understand your business and plan the best digital strategy for your website.",
  },
  {
    id: "02",
    title: " Research & Planning",
    description:
      "We analyze your market, audience, and competitors to craft a solid plan that sets your brand apart online.",
  },
  {
    id: "03",
    title: "Design & Development",
    description:
      "Our creative team builds a modern, responsive, and high-performing website tailored to your startup’s goals",
  },
  {
    id: "04",
    title: "Launch & Growth",
    description:
      "We launch your website and help your startup grow with ongoing improvements, updates, and digital support.",
  },
];

  return (
   <>
   
   
 <section className="bg-indigo-800 text-white py-20 md:py-28 relative overflow-hidden 
 
 "
    style={{
        backgroundImage:
          "url('https://lunax.keystonedemo.com/wp-content/uploads/2024/04/vefyuv.png') ",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
 
 >
      <div className="max-w-size mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
<PoPAnimation>
        <div className="space-y-4 ">
          <p className="uppercase text-lime-400 text-sm font-semibold tracking-widest">
            Optimize your marketing
          </p>

          <h2 className="text-4xl md:text-4xl  font-extrabold leading-tight font-Poppins ">
            Take Control Of Your Business Processes With Our SaaS
          </h2>

          <p className="text-gray-200 leading-relaxed max-w-md text-md  font-DM-sans">
        Build, manage, and grow your online presence with our all-in-one website solutions. We help businesses streamline processes, improve performance, and achieve real results with modern, user-friendly websites.
          </p>

          <p className="text-gray-300 leading-relaxed max-w-md font-DM-sans">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus in
            mauris at volutpat. Vestibulum non purus eget dolor euismod vulputate aliquam non ex. */}
            Our team focuses on clean design, fast performance, and seamless user experiences.
From strategy to launch, we make sure your website works beautifully for your business and your customers.
          </p>

          <button className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-6 py-3 rounded-full shadow-md transition duration-300">
            Get Started
          </button>
        </div>
        </PoPAnimation>

        {/* Right Process Cards */}
        <RightToLeftAnimation>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="border border-lime-200/30 rounded-2xl p-8 py-2 hover:border-lime-400 transition duration-300 bg-white/5 backdrop-blur-sm"
            >
              <span className="text-2xl font-extrabold text-lime-300">{step.id}</span>
              <h3 className="text-lg font-semibold mt-2">{step.title}</h3>
              <p className="text-gray-300 mt-2 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </RightToLeftAnimation>
      </div>
    </section>

   
   </>
  )
}

export default TakeControlSection
