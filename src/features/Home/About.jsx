import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiZap,
  FiGlobe,
  FiShield,
  FiClock,
  FiAlertCircle,
  FiFileText,
} from "react-icons/fi";

const About = () => {
  const [activeTab, setActiveTab] = useState("verixar");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const comparisonData = {
    verixar: [
      {
        icon: FiZap,
        title: "Instant Verification",
        desc: "Verify insurance status in real time, so decisions are made in seconds — not days.",
      },
      {
        icon: FiGlobe,
        title: "Cross-Border Coverage",
        desc: "Verify insured assets across supported regions through connected insurer networks.",
      },
      {
        icon: FiShield,
        title: "Built-in Fraud Protection",
        desc: "Identify cancelled, expired, or suspicious policies before a transaction happens.",
      },
    ],
    traditional: [
      {
        icon: FiClock,
        title: "Slow Manual Processes",
        desc: "Verification often takes days, relying on emails, calls, and manual document checks.",
      },
      {
        icon: FiAlertCircle,
        title: "Limited Reach",
        desc: "Most systems only work locally, making cross-border verification unreliable.",
      },
      {
        icon: FiFileText,
        title: "Easy to Manipulate",
        desc: "Paper documents and screenshots can be forged and lack real-time validation.",
      },
    ],
  };

  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT COLUMN: TEXT & ILLUSTRATION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 space-y-8"
          >
            <div className="space-y-6 text-center lg:text-left">
              <p className="text-[#000000] text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Verixar simplifies how buyers and insurers verify insurance
                status for second-hand electronics and high-value items. Our
                platform delivers secure, real-time verification to reduce
                uncertainty and prevent fraud in resale transactions.
              </p>

              <p className="text-[#000000] text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Buyers gain confidence before completing a purchase, while
                insurers avoid losses from claims tied to items that have
                already changed ownership. Verixar serves as a neutral
                verification layer that protects both sides.
              </p>

              <p className="text-[#000000] text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                By partnering directly with insurance providers, we sync policy
                status securely and continuously, making insurance verification
                fast, reliable, and transparent.
              </p>
            </div>

            {/* ILLUSTRATION */}
            <div className="relative group">
              <div className="relative overflow-hidden transition-transform duration-500 hover:scale-[1.02]">
                <img
                  src="/images/illustration.png"
                  alt="Verification Workflow"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-[#000556]/10 to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: INTERACTIVE CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 space-y-8 md:space-y-10"
          >
            {/* HEADER */}
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="text-[#131927] text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.1]">
                Verify <span className="text-[#F15A29]">insurance status</span>{" "}
                before you buy
              </h2>
              <p className="text-gray-500 text-base md:text-lg font-medium">
                Compare Verixar with traditional methods
              </p>
            </div>

            {/* TOGGLE SWITCH */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex p-1.5 bg-gray-100 rounded-full border border-gray-200">
                {["verixar", "traditional"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative px-6 py-2.5 md:px-8 md:py-3 rounded-full font-bold text-sm md:text-base transition-colors duration-300 z-10 cursor-pointer ${
                      activeTab === tab ? "text-white" : "text-gray-500"
                    }`}
                  >
                    {activeTab === tab && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-[#000556] rounded-full shadow-md "
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                    <span className="relative z-20 capitalize">
                      {tab} verifying
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* LIST ITEMS - Fixed height container to prevent jumping */}
            <div className="relative min-h-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {comparisonData[activeTab].map((item, index) => (
                    <div
                      key={index}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className={`relative flex gap-4 md:gap-6 p-5 md:p-6 transition-all duration-300 ease-in-out cursor-default hover:shadow-md ease-in-out${
                        hoveredIndex === index
                          ? "bg-blue-50/50"
                          : "bg-transparent"
                      }`}
                    >
                      {/* STRAIGHT BORDER LEFT - Animates height */}
                      <div
                        className={`absolute left-0 top-0 bottom-0 w-1 bg-[#000556] transition-all duration-300 ease-in-out ${
                          hoveredIndex === index
                            ? "opacity-100 h-full"
                            : "opacity-0 h-0"
                        }`}
                      />

                      {/* ICON */}
                      <div
                        className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          hoveredIndex === index
                            ? "bg-[#000556] text-white shadow-lg rotate-3"
                            : "bg-gray-100 text-[#425466]"
                        }`}
                      >
                        <item.icon className="text-xl md:text-2xl" />
                      </div>

                      {/* CONTENT */}
                      <div className="space-y-1 ">
                        <h4 className="text-[#131927] text-lg md:text-xl font-bold transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-[#6D717F] text-sm md:text-base leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTA BUTTON */}
            <div className="pt-4 flex justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#F15A29] text-white px-10 py-4 rounded-sm font-bold text-lg shadow-xl shadow-orange-500/20 hover:bg-[#E64A19] transition-all w-full sm:w-auto cursor-pointer"
              >
                Get Started Now
              </motion.button>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          className="border-t border-[#D9D9D9] w-full md:mt-40 mt-20 origin-right"
        />
      </div>
    </section>
  );
};

export default About;
