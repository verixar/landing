import React from "react";
import { motion } from "framer-motion";

const partners = [
  {
    name: "SmartFinder",
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" />
      </svg>
    ),
  },
  {
    name: "Zoomerr",
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8l-4 4h8l-4-4z" fill="white" />
      </svg>
    ),
  },
  {
    name: "SHELLS",
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    name: "WAVES",
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 12h2v4H2v-4zm4-4h2v12H6V8zm4-4h2v16h-2V4zm4 4h2v12h-2V8zm4 4h2v4h-2v-4z" />
      </svg>
    ),
  },
  {
    name: "ArtVenue",
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
      </svg>
    ),
  },
];

const TrustedBy = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-[#94A3B8] font-bold uppercase tracking-[0.3em] text-xs md:text-sm">
            Trusted by leading investor companies
          </h3>
        </div>

        <div className="hidden md:flex flex-wrap justify-center items-center gap-x-16 lg:gap-x-24 gap-y-10">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.4 }}
              whileHover={{ opacity: 1, y: -2 }}
              className="flex items-center gap-3 text-[#94A3B8] hover:text-[#0A1D37] transition-all duration-300 cursor-default"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                {partner.svg}
              </div>
              <span className="text-xl lg:text-2xl font-bold tracking-tight">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden relative">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-12 items-center whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 25,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-[#94A3B8] opacity-60 scale-90"
                >
                  <div className="w-6 h-6">{partner.svg}</div>
                  <span className="text-lg font-bold">{partner.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="absolute inset-y-0 left-0 w-10 bg-linear-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-10 bg-linear-to-l from-white to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
