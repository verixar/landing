import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  FiShield,
  FiCpu,
  FiUsers,
  FiEye,
  FiLock,
  FiCheckCircle,
  FiZap,
  FiGlobe,
} from "react-icons/fi";

const values = [
  {
    id: 1,
    title: "Trust",
    icon: <FiShield size={28} />,
    content:
      "Trust is the foundation of every verification. We provide a single, reliable source of truth that insurers, buyers, and partners can depend on with confidence.",
  },
  {
    id: 2,
    title: "Accuracy",
    icon: <FiCheckCircle size={28} />,
    content:
      "Every verification must be precise. Our systems are built to deliver accurate, real-time insurance validation without ambiguity or manual errors.",
  },
  {
    id: 3,
    title: "Transparency",
    icon: <FiEye size={28} />,
    content:
      "We remove uncertainty from high-value transactions by making insurance status clear, auditable, and instantly accessible to all authorized parties.",
  },
  {
    id: 4,
    title: "Security",
    icon: <FiLock size={28} />,
    content:
      "Verixar is built with bank-grade security to protect sensitive asset and insurance data, ensuring privacy, integrity, and resilience at every layer.",
  },
  {
    id: 5,
    title: "Efficiency",
    icon: <FiZap size={28} />,
    content:
      "Verification should be fast and frictionless. We streamline complex insurance checks into simple, instant workflows that save time and reduce risk.",
  },
  {
    id: 6,
    title: "Global Reliability",
    icon: <FiGlobe size={28} />,
    content:
      "Designed for cross-border use, Verixar supports standardized verification across regions, enabling secure transactions in both local and global markets.",
  },
];


const CoreValues = () => {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center gap-4 md:gap-6 mb-6"
          >
            <div className="h-px w-12 md:w-20 bg-[#0A1D37] opacity-20" />
            <h2 className="text-[#0A1D37] text-3xl md:text-5xl font-extrabold px-2 tracking-tight">
              Our Core Values
            </h2>
            <div className="h-px w-12 md:w-20 bg-[#0A1D37] opacity-20" />
          </motion.div>
          <p className="text-gray-500 text-lg md:text-xl font-light">
            The principles that guide every line of code we write.
          </p>
        </div>

        {/* Card Container */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 overflow-x-auto md:overflow-x-visible pb-12 md:pb-0 snap-x snap-mandatory scrollbar-hide gap-0 md:gap-px md:bg-gray-100"
        >
          {values.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ zIndex: 10 }}
              className="
                shrink-0 w-[85vw] md:w-auto snap-center
                relative group p-10 lg:p-14 flex flex-col items-center text-center 
                bg-white cursor-default 
                transition-all duration-500 hover:bg-[#2E3192] 
                min-h-112.5 md:min-h-105
              "
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.5,
                }}
                className="mb-10 text-[#343a96] group-hover:text-white transition-colors duration-500"
              >
                <div className="p-4 rounded-2xl bg-blue-50 group-hover:bg-white/10 transition-colors">
                  {item.icon}
                </div>
              </motion.div>

              <h3 className="text-[#0A1D37] text-2xl font-bold mb-5 group-hover:text-white transition-colors duration-500">
                {item.title}
              </h3>

              <motion.div
                whileHover={{ width: "80px" }}
                className="w-12 h-1 bg-[#0A1D37] mb-8 group-hover:bg-white transition-all duration-500"
              />

              <p className="text-gray-500 text-base leading-relaxed group-hover:text-blue-100/80 transition-colors duration-500 font-light">
                {item.content}
              </p>

              {/* Background number(Might remove later*/}
              <span className="absolute top-6 right-8 text-4xl font-black text-gray-50 group-hover:text-white/5 transition-colors pointer-events-none">
                0{idx + 1}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden mt-8 flex flex-col items-center gap-4">
          <div className="w-48 h-1 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#343a96]"
              style={{ width: `${Math.max(10, scrollProgress)}%` }}
            />
          </div>
          <p className="text-gray-400 text-xs uppercase tracking-widest font-bold animate-pulse">
            Swipe to explore
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
