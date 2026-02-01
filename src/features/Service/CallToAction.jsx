import React from "react";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="bg-white overflow-hidden border-y border-slate-100 my-40">
      <div className="max-w-380 mx-auto">
        <div className="flex flex-col lg:flex-row min-h-150">
          <div className="w-full lg:w-1/2 px-6 py-16 md:px-12 lg:px-20 lg:py-24 flex flex-col justify-center bg-[#F8FAFC]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-10">
                <img
                  src="images/verixar-blue-logo.png"
                  alt="Verixar logo"
                  className="h-12 w-auto object-contain"
                />
              </div>

              <h2 className="text-[#020A1E] text-3xl md:text-5xl font-extrabold mb-8 tracking-tight leading-[1.1]">
                Ready to Verify with Confidence?
              </h2>

              <p className="text-[#131927] text-lg leading-relaxed mb-10 max-w-xl">
                Verixar gives buyers and insurers instant access to reliable
                insurance verification. Eliminate uncertainty, reduce fraud, and
                make smarter decisions with real-time policy data you can trust.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{
                    y: -3,
                    shadow: "0 12px 20px -10px rgba(242, 100, 48, 0.5)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#F26430] text-white px-10 py-4 rounded-xl font-bold text-lg transition-all"
                >
                  Request a Demo
                </motion.button>

                <motion.button
                  whileHover={{ y: -3, backgroundColor: "#f1f5f9" }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-transparent text-[#000556] border-2 border-[#000556] px-10 py-4 rounded-xl font-bold text-lg transition-all"
                >
                  Know more
                </motion.button>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 relative min-h-75 lg:min-h-full">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src="images/laptop.jpg"
                alt="Dashboard"
                className="w-full h-full object-cover object-top-right"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
