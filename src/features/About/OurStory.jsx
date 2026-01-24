import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FiChevronLeft,
  FiChevronRight,
  FiBarChart2,
  FiTarget,
  FiHeart,
  FiCheckCircle,
} from "react-icons/fi";

const storyContent = [
  {
    id: "mission",
    title: "Our Mission",
    icon: <FiBarChart2 className="text-white" size={20} />,
    content:
      "Redefining Trust in Global Commerce. At Verixar, we believe that transparency shouldn't be a luxury. We are building the world's most reliable infrastructure for instant insurance verification.",
  },
  {
    id: "vision",
    title: "Our Vision",
    icon: <FiTarget className="text-white" size={20} />,
    content:
      "To become the global standard for asset validation. We envision a world where buyers and sellers can transact instantly across any border, confident that the insurance data is authentic.",
  },
  {
    id: "values",
    title: "Our Values",
    icon: <FiHeart className="text-white" size={20} />,
    content:
      "Security, Transparency, and Innovation. These pillars guide every line of code we write. We prioritize user privacy while ensuring data integrity available in the industry today.",
  },
];

const OurStory = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % storyContent.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + storyContent.length) % storyContent.length);

  return (
    <>
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
          {/* Left Column */}
          <motion.div
            className="flex-1 w-full flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="flex items-center gap-4 mb-6 justify-center lg:justify-start"
              data-aos="fade-up"
            >
              <div className="h-px w-12 bg-gray-400" />
              <span className="text-gray-500 font-bold uppercase tracking-widest text-xs md:text-sm">
                Our Story
              </span>
              <div className="h-px w-12 bg-gray-400" />
            </div>

            <motion.h2
              className="text-black text-3xl md:text-5xl font-bold mb-8 text-center lg:text-left"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Welcome to <span className="text-[#000556]">Verixar</span>
            </motion.h2>

            <motion.div
              className="text-black space-y-6 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <p>
                Verixar was created to solve a growing problem in the
                second-hand economy: uncertainty. Buyers often have no reliable
                way to know whether an item is still insured before making a
                purchase.
              </p>
              <p>
                Verixar bridges this gap by acting as a trusted verification
                layer, enabling instant checks using serial numbers and working
                directly with insurers to sync policy status securely.
              </p>
            </motion.div>

            <motion.div
              className="relative max-w-2xl mx-auto lg:mx-0 mt-auto"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row min-h-80 md:min-h-70 border-t-4 border-[#0A1D37] relative">
                <motion.div
                  className="flex-1 p-6 md:p-10 flex flex-col"
                  key={`content-${index}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div
                      className="bg-[#000080] p-2.5 rounded-lg shadow-lg"
                      key={`icon-${index}`}
                      initial={{ rotate: -180, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                      }}
                    >
                      {storyContent[index].icon}
                    </motion.div>
                    <motion.span
                      className="font-bold text-[#0A1D37]"
                      key={`title-${index}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {storyContent[index].title}
                    </motion.span>
                  </div>

                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-[#6D717F] text-sm md:text-base leading-relaxed"
                  >
                    "{storyContent[index].content}"
                  </motion.p>
                </motion.div>

                <div className="h-24 md:h-auto md:w-1/3 bg-[#000040] flex items-center justify-center p-8 relative md:rounded-r-2xl overflow-visible">
                  <motion.div className="text-white opacity-40">
                    <FiCheckCircle size={60} />
                  </motion.div>

                  {/* Navigation Buttons */}
                  <motion.button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 p-2.5 bg-white rounded-full shadow-2xl border border-[#000080] text-[#000080] hover:scale-110 active:scale-95 transition-all z-50 flex items-center justify-center"
                    aria-label="Previous slide"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiChevronLeft size={20} />
                  </motion.button>

                  <motion.button
                    onClick={nextSlide}
                    className="absolute right-0 md:right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-1/2 p-2.5 bg-white rounded-full shadow-2xl border border-[#000080] text-[#000080] hover:scale-110 active:scale-95 transition-all z-50 flex items-center justify-center"
                    aria-label="Next slide"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiChevronRight size={20} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="w-full lg:w-95 flex"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="border-[1.5px] border-[#FF5A1F] p-2 flex flex-col w-full bg-white shadow-xl shadow-orange-50/50 rounded-sm transition-all duration-300 hover:shadow-2xl">
              <div className="w-full bg-[#000040] py-12 flex justify-center items-center">
                <motion.img
                  src="images/white-logo.png"
                  alt="Verixar Logo"
                  className="h-32 w-32 md:h-40 md:w-40 object-contain opacity-90"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>

              <div className="p-6 md:p-8 flex flex-col grow">
                <h3 className="text-[#0A1D37] font-bold text-xl mb-4 text-center lg:text-left">
                  Why Verixar Exists
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 text-center lg:text-left">
                  Verixar is building the infrastructure that makes insurance
                  verification simple, fast, and reliable. We help buyers make
                  safer decisions and enable insurers to reduce fraud.
                </p>
                <motion.button
                  className="w-full py-4 bg-[#FF5A1F] text-white font-bold rounded-xl hover:bg-[#e64f1a] transition-colors shadow-lg mt-auto uppercase tracking-wider text-xs"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn How It Works
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        className="border-t border-[#D9D9D9] w-full md:mt-30 md:mb-30 mt-20 mb-20 origin-right max-w-360 mx-auto"
      />
    </>
  );
};

export default OurStory;
