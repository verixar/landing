import React from "react";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <>
      <section className="bg-[#000556] py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-15">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full max-w-[320px] lg:max-w-100"
            >
              <img src="/images/white-logo.png" alt="Verixar Logo" />
            </motion.div>

            {/* RIGHT SIDE: CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl text-left md:mr-10"
            >
              <div className="flex items-center gap-4 mb-4">
                {/* The dash line from the image */}
                <div className="w-12 h-0.5 bg-white opacity-80" />
                <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Building trust through
                </h3>
              </div>

              <h2 className="text-[#F15A29] text-4xl md:text-5xl lg:text-6xl font-bold mb-8 -mt-2">
                transparency
              </h2>

              <div className="space-y-6">
                <p className="text-white text-lg md:text-xl leading-relaxed font-light">
                  We're on a mission to make insurance verification accessible,
                  instant, and reliable for everyone. At Verixar, we're building
                  a smarter way to verify insurance status — one that removes
                  uncertainty, reduces fraud, and helps people make confident
                  decisions before they buy.
                </p>

                <p className="text-white text-lg md:text-xl leading-relaxed font-light">
                  Learn more about our journey, the problem we're solving, and
                  the passionate team working behind the scenes to make secure
                  verification available to all.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        className="border-t border-[#D9D9D9] w-full md:mt-40 mt-20 origin-right max-w-360 mx-auto"
      />
    </>
  );
};

export default Mission;
