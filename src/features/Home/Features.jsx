import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiEdit3, FiSearch, FiBarChart2 } from "react-icons/fi";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const scrollRef = useRef(null);
  const [width, setWidth] = useState(0);

  const featuresData = [
    {
      icon: FiEdit3,
      title: "Enter the Serial Number",
      description:
        "Enter the asset’s serial number to begin verification. Verixar supports standard serial formats across insured assets, making checks quick and straightforward.",
    },
    {
      icon: FiSearch,
      title: "Verify in Real Time",
      description:
        "Verixar provides instant coverage confirmation using trusted insurer information, so you get clarity without the hassle.",
    },
    {
      icon: FiBarChart2,
      title: "Clear Coverage Results",
      description:
        "See a simple summary showing whether the asset is currently covered, with easy‑to‑understand information you can rely on.",
    },
  ];

  useEffect(() => {
    if (scrollRef.current) {
      setWidth(scrollRef.current.scrollWidth - scrollRef.current.offsetWidth);
    }
  }, []);

  return (
    <section className="py-24 bg-white font-gilroy overflow-hidden">
      <div className="container mx-auto px-4 md:px-10">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="border-t border-[#D9D9D9] w-full mb-20 origin-left"
        />

        <div className="px-6">
          <motion.div
            ref={scrollRef}
            className="cursor-grab active:cursor-grabbing"
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              dragListener={
                typeof window !== "undefined" && window.innerWidth < 1024
              }
              className="grid grid-flow-col lg:grid-flow-row lg:grid-cols-3 gap-8 lg:translate-x-0"
              style={{
                width:
                  typeof window !== "undefined" && window.innerWidth < 1024
                    ? "max-content"
                    : "100%",
              }}
            >
              {featuresData.map((feature, index) => (
                <div key={index} className="w-[85vw] md:w-[45vw] lg:w-full">
                  <FeatureCard
                    index={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          className="border-t border-[#D9D9D9] w-full mt-20 origin-right"
        />
      </div>
    </section>
  );
};

export default Features;
