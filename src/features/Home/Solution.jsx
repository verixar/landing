import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiUploadCloud,
  FiLayout,
  FiPieChart,
  FiCheckCircle,
  FiShield,
  FiBarChart2,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const Solution = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const solutionFeatures = [
    {
      id: 0,
      title: "Automated Data Sync",
      description:
        "Keep insured item data up to date with scheduled uploads and zero manual work.",
      icon: <FiUploadCloud className="text-blue-600 text-2xl" />,
    },
    {
      id: 1,
      title: "Live Verification Dashboard",
      description:
        "See verification activity, item status, and buyer interactions in real time.",
      icon: <FiLayout className="text-blue-600 text-2xl" />,
    },
    {
      id: 2,
      title: "Fraud Risk Insights",
      description:
        "Spot expired or cancelled policies early to prevent fraudulent claims.",
      icon: <FiPieChart className="text-blue-600 text-2xl" />,
    },
    {
      id: 3,
      title: "Instant Buyer Checks",
      description:
        "Let buyers instantly confirm if a second-hand item is currently insured.",
      icon: <FiCheckCircle className="text-blue-600 text-2xl" />,
    },
    {
      id: 4,
      title: "Secure & Compliant",
      description:
        "Protect insurer data with encryption, access control, and audit logs.",
      icon: <FiShield className="text-blue-600 text-2xl" />,
    },
    {
      id: 5,
      title: "Impact Reporting",
      description:
        "Measure verification volume, engagement, and fraud reduction clearly.",
      icon: <FiBarChart2 className="text-blue-600 text-2xl" />,
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const featureGroups = [];
  for (let i = 0; i < solutionFeatures.length; i += 3) {
    featureGroups.push(solutionFeatures.slice(i, i + 3));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab(
        (prev) =>
          (prev + 1) %
          (isMobile ? solutionFeatures.length : featureGroups.length),
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [isMobile]);

  const currentFeatures = isMobile
    ? [solutionFeatures[activeTab]]
    : featureGroups[activeTab] || featureGroups[0];

  const nextSlide = () => {
    setActiveTab(
      (prev) =>
        (prev + 1) %
        (isMobile ? solutionFeatures.length : featureGroups.length),
    );
  };

  const prevSlide = () => {
    setActiveTab((prev) =>
      prev === 0
        ? isMobile
          ? solutionFeatures.length - 1
          : featureGroups.length - 1
        : prev - 1,
    );
  };

  return (
    <>
      <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 z-10">
            <h2 className="text-[#0A1D37] text-3xl md:text-3xl font-bold leading-tight mb-6">
              The Solution We Built - The
              <span className="text-[#FF5A1F]"> Complete </span>Insurance
              Verification Platform
            </h2>

            <div className="w-24 h-0.5 bg-[#FF5A1F] mb-8" />

            <p className="text-[#425466] text-lg leading-relaxed mb-12 max-w-xl">
              We built a unified system that brings speed, accuracy, and trust
              to insurance verification. From instant serial number checks to
              advanced risk detection, our platform connects buyers and insurers
              through one reliable source of truth.
            </p>

            {/* Updated Sliding Features Section */}
            <div className="min-h-55">
              <div className="relative">
                {isMobile && (
                  <div className="flex justify-between mb-6">
                    <button
                      onClick={prevSlide}
                      className="w-10 h-10 rounded-full border border-blue-200 bg-white flex items-center justify-center text-blue-500 hover:shadow-lg transition-all"
                    >
                      <FiChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="w-10 h-10 rounded-full border border-blue-200 bg-white flex items-center justify-center text-blue-500 hover:shadow-lg transition-all"
                    >
                      <FiChevronRight size={20} />
                    </button>
                  </div>
                )}

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-3"} gap-8`}
                  >
                    {currentFeatures.map((feature, index) => (
                      <motion.div
                        key={feature.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="space-y-4 flex flex-col items-center text-center p-1 rounded-xl hover:shadow-lg transition-all duration-300 bg-white border border-gray-100"
                      >
                        <div className="w-16 h-16 rounded-full border-2 border-blue-100 flex items-center justify-center mb-4">
                          {feature.icon}
                        </div>
                        <h3 className="text-[#6D717F] text-xl font-regular">
                          {feature.title}
                        </h3>
                        <p className="text-[#6D717F] text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="flex gap-2 mt-8 mb-12 justify-center">
              {Array.from({
                length: isMobile
                  ? solutionFeatures.length
                  : featureGroups.length,
              }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeTab === idx
                      ? "w-8 bg-[#2E3192]"
                      : "w-2 bg-blue-200 hover:bg-blue-300"
                  }`}
                />
              ))}
            </div>

            <div className="flex flex-col gap-4 justify-center items-center lg:flex-row lg:justify-start">
              <button className="w-full lg:w-auto px-8 py-3 cursor-pointer bg-[#FF5A1F] text-white font-bold rounded-md hover:bg-[#e44e1a] transition-colors shadow-lg shadow-orange-200">
                See how it works
              </button>
              <button className="w-full lg:w-auto px-12 py-3 cursor-pointer bg-white border-2 border-[#2E3192] text-[#2E3192] font-bold rounded-md hover:bg-blue-50 transition-colors">
                Know more
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative ml-20 hidden lg:block">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-50 bg-[#0A1D37] -skew-y-12 z-0" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <img
                src="images/illustration.png"
                alt="Verixar Platform Dashboard"
                className="w-full h-auto drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        className="border-t border-[#D9D9D9] w-full md:mt-40 mt-20 origin-right max-w-360 mx-auto md:mb-40 mb-20"
      />
    </>
  );
};

export default Solution;
