import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiChevronLeft,
  FiChevronRight,
  FiUsers,
  FiGlobe,
} from "react-icons/fi";

const Mission = () => {
  const [activeTab, setActiveTab] = useState("General");

  return (
    <div className="bg-white">
      <section className="relative py-28 bg-[#000040] overflow-hidden text-center text-white">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url('images/world.png')`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Join Us on Our Mission
          </motion.h2>
          <p className="text-white text-base md:text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            Whether you are an insurance provider looking to integrate, a
            business seeking to protect your assets, or a professional driven by
            innovation, there is a place for you in the Verixar ecosystem.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="flex flex-col items-center">
              <div className="mb-4 text-white">
                <FiUsers size={40} />
              </div>
              <h4 className="text-xl font-bold mb-2">For Insurers</h4>
              <p className="text-sm text-white">
                Whether you're hiring or looking for opportunities, we've got
                you covered.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 text-white">
                <FiGlobe size={40} />
              </div>
              <h4 className="text-xl font-bold mb-2">For Buyers</h4>
              <p className="text-sm text-white">
                Whether you're hiring or looking for opportunities, we've got
                you covered.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-12 py-4 bg-white text-[#000040] font-bold rounded-sm hover:bg-blue-50 transition-all shadow-xl">
              Get in touch
            </button>
            <button className="px-12 py-4 bg-transparent border border-white text-white font-bold rounded-sm hover:bg-white/10 transition-all">
              Request a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
