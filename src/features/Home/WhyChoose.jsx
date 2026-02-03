import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSmartphone,
  FiShield,
  FiFileText,
  FiCheckSquare,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const WhyChoose = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const features = [
    {
      title: "Built for Insurance Workflows",
      description:
        "Verixar is designed to support underwriting, policy validation, and operational verification without disrupting existing insurance processes.",
      icon: <FiSmartphone className="text-white text-3xl" />,
    },
    {
      title: "Extended Verification During Underwriting",
      description:
        "Enable additional verification checks beyond initial policy issuance, helping insurers maintain accurate coverage status over time.",
      icon: <FiShield className="text-white text-3xl" />,
    },
    {
      title: "Clear, Auditable Verification Records",
      description:
        "Every verification produces structured records that support audits, compliance reviews, and internal decision-making.",
      icon: <FiFileText className="text-white text-3xl" />,
    },
    {
      title: "Scales With Policy Volume",
      description:
        "From low-volume checks to large-scale verification activity, Verixar scales reliably as insurance operations grow.",
      icon: <FiCheckSquare className="text-white text-3xl" />,
    },
  ];

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isMobile]);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  const goToCard = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <section className="relative w-full min-h-screen flex flex-col overflow-hidden bg-[#0A1D37] mt-20">
        <div className="w-full h-32 bg-[#020646] relative z-20" />

        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000')`,
            }}
          />
          <div className="absolute inset-0 bg-[#0A1D37]/85 backdrop-brightness-75" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 relative z-10 w-full grow flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-sm text-white md:text-base font-medium mb-4 flex items-center gap-2">
              <span className="opacity-60 text-[#4FD1C5]">{"<<<"}</span>
              Let's tell what makes our platform unique.
              <span className="opacity-60 text-[#4FD1C5]">{">>>"}</span>
            </p>
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
              Why Choose Verixar?
            </h2>
            <p className="text-gray-300 text-lg md:text-xl font-light">
              The standard in instant insurance intelligence.
            </p>
          </motion.div>

          {!isMobile ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full border border-white/10 overflow-hidden shadow-2xl">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                  className={`p-10 flex flex-col items-start gap-8 transition-all duration-300
                  backdrop-blur-xl bg-white/5 group
                  ${index !== 0 ? "lg:border-l border-white/10" : ""} 
                  ${index < 2 ? "border-b md:border-b-0" : "border-b lg:border-b-0"} 
                  border-white/10`}
                >
                  <div className="mb-2 p-3 rounded-lg bg-white/5 group-hover:bg-[#4FD1C5]/20 transition-colors">
                    {feature.icon}
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-white text-xl font-semibold group-hover:text-[#4FD1C5] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="relative w-full">
              {/* Navigation Arrows for Mobile(Not sure) */}
              {/* <div className="flex justify-between items-center mb-8">
                <button
                  onClick={prevCard}
                  className="w-10 h-10 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white hover:bg-white/20 hover:border-white/30 transition-all"
                  aria-label="Previous card"
                >
                  <FiChevronLeft size={20} />
                </button>

                <div className="text-white text-sm font-medium">
                  <span className="text-[#4FD1C5]">{currentIndex + 1}</span> /{" "}
                  {features.length}
                </div>

                <button
                  onClick={nextCard}
                  className="w-10 h-10 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white hover:bg-white/20 hover:border-white/30 transition-all"
                  aria-label="Next card"
                >
                  <FiChevronRight size={20} />
                </button>
              </div> */}

              {/* Card Display for Mobile */}
              <div className="relative h-87.5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="h-full p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl overflow-hidden group"
                    >
                      <div className="mb-8">
                        <div className="inline-block p-4 rounded-xl bg-linear-to-br from-[#4FD1C5]/20 to-[#4FD1C5]/5 border border-[#4FD1C5]/30">
                          {features[currentIndex].icon}
                        </div>
                      </div>

                      <div className="space-y-6">
                        <h3 className="text-white text-2xl font-bold group-hover:text-[#4FD1C5] transition-colors">
                          {features[currentIndex].title}
                        </h3>
                        <p className="text-gray-300 text-base leading-relaxed">
                          {features[currentIndex].description}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex justify-center gap-3 mt-8">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToCard(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === index
                        ? "w-8 bg-[#4FD1C5]"
                        : "w-2 bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to card ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
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

export default WhyChoose;
