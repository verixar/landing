import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiUser, FiRepeat, FiShield, FiChevronRight } from "react-icons/fi";

const PathSelection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const paths = [
    {
      title: "For Buyers",
      icon: <FiUser size={24} />,
      points: [
      "Verify insurance status before completing a purchase",
      "Confirm whether coverage is active, expired, or cancelled",
      "Reduce uncertainty around insured goods",
      "Access a single, trusted verification result",
    ],
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000",
    },
    {
      title: "For Sellers & Marketplaces",
      icon: <FiRepeat size={24} />,
      points: [
      "Offer listings with verified insurance status",
      "Reduce post-transaction disputes and claims",
      "Provide buyers with independent verification results",
      "Support safer, more transparent transactions",
    ],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000",
    },
    {
      title: "For Insurers",
      icon: <FiShield size={24} />,
      points: [
        "Sync insured item data via CSV or API",
        "Track verification activity in real time",
        "Detect fraud from expired or cancelled policies",
        "Support risk reduction without exposing sensitive data",
      ],
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[2.5px] w-12 md:w-16 bg-[#252B42]" />
            <span className="text-[#0A1D37] font-bold text-lg md:text-2xl uppercase tracking-widest">
              Choose your path
            </span>
            <div className="h-[2.5px] w-12 md:w-16 bg-[#252B42]" />
          </div>
          <h2 className="text-[#0A1D37] text-3xl md:text-4xl font-extrabold px-4">
            Tailored solutions for the deal.
          </h2>
        </div>

        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 md:gap-10 pb-10 md:pb-0 snap-x snap-mandatory no-scrollbar scroll-smooth">
          {paths.map((path, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative min-w-[85vw] md:min-w-0 min-h-145 md:min-h-155 rounded-xl overflow-hidden shadow-xl transition-all duration-500 md:hover:-translate-y-2 shrink-0 snap-center first:ml-4 last:mr-4 md:first:ml-0 md:last:mr-0"
              >
                <div
                  className={`absolute inset-0 flex flex-col transition-colors duration-500 ${
                    isHovered ? "bg-[#00004d]" : "bg-white"
                  }`}
                >
                  <div
                    className="relative h-55 md:h-60 overflow-hidden"
                    style={{
                      clipPath:
                        "polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)",
                    }}
                  >
                    <img
                      src={path.image}
                      alt={path.title}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        isHovered ? "scale-110 brightness-50" : "brightness-90"
                      }`}
                    />
                    <div
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        isHovered ? "bg-blue-900/40" : "opacity-0"
                      }`}
                    />
                  </div>

                  <div className="absolute top-47.5 md:top-52.5 left-1/2 -translate-x-1/2 z-20">
                    <div
                      className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center border-4 shadow-lg transition-all duration-500 ${
                        isHovered
                          ? "bg-white text-[#00004d] border-white scale-110"
                          : "bg-[#FF5A1F] text-white border-white"
                      }`}
                    >
                      {React.cloneElement(path.icon, { size: 24 })}
                    </div>
                  </div>

                  <div className="flex flex-col grow px-6 md:px-8 pt-12 md:pt-16 pb-8 text-center">
                    <h3
                      className={`text-xl md:text-2xl font-bold mb-4 md:mb-6 transition-colors ${
                        isHovered ? "text-white" : "text-[#0A1D37]"
                      }`}
                    >
                      {path.title}
                    </h3>

                    <ul className="space-y-3 md:space-y-4 text-left mb-8 md:mb-10">
                      {path.points.map((point, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-3 text-sm font-medium transition-colors ${
                            isHovered ? "text-blue-100" : "text-gray-600"
                          }`}
                        >
                          <span
                            className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                              isHovered ? "bg-white" : "bg-[#FF5A1F]"
                            }`}
                          />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto h-12 flex items-center justify-center">
                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: isHovered ? 1 : 0,
                          y: isHovered ? 0 : 20,
                        }}
                        className="px-6 md:px-8 py-2 md:py-2.5 bg-white text-[#FF5A1F] font-bold rounded-full text-sm flex items-center gap-2 hover:bg-gray-100 shadow-md"
                      >
                        Learn more <FiChevronRight />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PathSelection;
