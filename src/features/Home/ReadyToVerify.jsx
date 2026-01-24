import React from "react";
import { motion } from "framer-motion";

const ReadyToVerify = () => {
  return (
    <section className="relative h-125 flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect 
        'bg-fixed' keeps the image in place relative to the viewport
      */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000')`,
        }}
      />

      {/* Blue Overlay - matching your screenshot's gradient vibe */}
      <div className="absolute inset-0 bg-[#0A1D37]/85 mix-blend-multiply" />
      <div className="absolute inset-0 bg-linear-to-r from-blue-900/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-white text-4xl md:text-6xl font-bold mb-6"
        >
          Ready to start verifying?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Stop guessing and start knowing. Join thousands of users who trust
          Verixar for instant, secure insurance validation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto px-10 py-4 bg-white text-[#0A1D37] font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg">
            Get Started Now
          </button>
          <button className="w-full sm:w-auto px-12 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ReadyToVerify;
