import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const FeatureCard = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      whileHover={{ y: -10 }}
      className="group relative flex flex-col items-center text-center p-10 border border-gray-200 bg-transparent transition-all duration-500 ease-in-out cursor-pointer hover:shadow-md h-full min-h-100"
    >
      <motion.div 
        whileHover={{ scale: 1.1 }}
        className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:bg-[#0056D6]/5 shrink-0"
      >
        <Icon className="text-3xl text-[#252B42] transition-colors duration-500 group-hover:text-[#0056D6]" />
      </motion.div>

      <h3 className="text-[#252B42] text-2xl font-bold mb-5 group-hover:text-[#0056D6] transition-colors duration-500">
        {title}
      </h3>

      <p className="text-[#5D666F] text-base leading-relaxed mb-8 grow">
        {description}
      </p>

      <div className="flex items-center gap-2 text-[#FF5722] font-bold transition-all duration-500 group-hover:gap-4 mt-auto">
        <span className="text-lg">Know more</span>
        <motion.div
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <FiArrowRight className="text-xl" />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-blue-50/0 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10" />
    </motion.div>
  );
};

export default FeatureCard;