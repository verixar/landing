import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const WhatIsVerixar = () => {
  const stats = [
    { label: "Candidate data uploaded for easy access", value: "500M+" },
    { label: "Accuracy of data collected", value: "99.999%" },
    { label: "Talents matchmaking with Hiring firms", value: "80%" },
  ];

  return (
    <>
      <section className="bg-white pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-24 px-6">
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="h-1.5 w-20 bg-[#252B42]" />
            <h2 className="text-[#0A1D37] font-bold text-4xl md:text-5xl">
              What is Verixar?
            </h2>
            <div className="h-1.5 w-20 bg-[#252B42]" />
          </div>
          <p className="text-[#425466] text-lg">
            Let's tell you about the solution we built!
          </p>
        </div>

        <div
          className="relative bg-[#000556] pt-40 pb-24 px-6 md:px-12 lg:px-24"
          style={{
            clipPath: "polygon(0 12%, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none z-0">
            <img
              src="images/global.png"
              alt="Global Network"
              className="w-full h-full object-contain object-right opacity-60 mix-blend-screen"
            />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-2xl">
              <span className="text-white font-bold uppercase tracking-widest text-sm mb-4 block">
                VERIXAR?
              </span>
              <h3 className="text-white text-4xl md:text-5xl font-semibold leading-tight mb-8">
                Built on trust and security for Global Usage
              </h3>
              <p className="text-white text-lg leading-relaxed mb-10">
                Verixar closes the transparency gap by delivering instant
                insurance verification through a secure, decentralized network.
                Whether across borders or within local markets, we remove
                guesswork from high-value transactions using real-time data and
                bank-grade security you can trust.
              </p>

              <button className="flex items-center gap-3 bg-white text-[#FF5A1F] px-8 py-3.5 rounded-lg font-bold hover:bg-gray-100 transition-all mb-20 group shadow-lg">
                Know more
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-0.5 h-8 bg-white rounded-full" />
                    <div>
                      <div className="text-white text-3xl font-bold mb-1">
                        {stat.value}
                      </div>
                      <p className="text-[#F8F8F9] text-xs tracking-wider font-medium leading-snug">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        className="border-t border-[#D9D9D9] w-full mt-20 origin-right max-w-360 mx-auto h-3"
      />
    </>
  );
};

export default WhatIsVerixar;
