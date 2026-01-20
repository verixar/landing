import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiArrowRight } from "react-icons/fi";
import {
  LuBrain,
  LuMail,
  LuShield,
  LuTimer,
  LuDatabase,
  LuScale,
} from "react-icons/lu";

const Challenge = () => {
  const [page, setPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const challengeData = [
    {
      id: 1,
      title: "Unknown Status",
      icon: <LuBrain />,
      description:
        "Buyers currently lack a fast, reliable way to verify an item's insurance status before purchasing. This transparency gap forces them to rely on guesswork.",
    },
    {
      id: 2,
      title: "Fraud Risk",
      icon: <LuMail />,
      description:
        "When sellers misrepresent insurance coverage, buyers are left vulnerable to significant financial losses and unforeseen legal complications.",
    },
    {
      id: 3,
      title: "Trust Issues",
      icon: <LuShield />,
      description:
        "A lack of transparency creates deep uncertainty, stifling buyer confidence during high-value transactions. Without verifiable data, critical deals stall.",
    },
    {
      id: 4,
      title: "Verification Lag",
      icon: <LuTimer />,
      description:
        "Manual verification processes take days, causing friction in fast-moving markets where decisions need to be made in seconds.",
    },
    {
      id: 5,
      title: "Data Silos",
      icon: <LuDatabase />,
      description:
        "Insurance data is often locked away in incompatible systems, making it nearly impossible for third parties to access accurate status updates.",
    },
    {
      id: 6,
      title: "Ownership Disputes",
      icon: <LuScale />,
      description:
        "Without a verified insurance trail, transferring ownership of high-stakes assets often leads to disputes between buyers, sellers, and providers.",
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const getCurrentItems = () => {
    if (isMobile) {
      // Mobile: Show 1 item at a time
      return [challengeData[page]];
    } else {
      // Desktop: Show 3 items at a time (2 pages)
      const itemsPerPage = 3;
      return challengeData.slice(
        page * itemsPerPage,
        (page + 1) * itemsPerPage,
      );
    }
  };

  const nextPage = () => {
    if (isMobile) {
      setPage((prev) => (prev + 1) % challengeData.length);
    } else {
      setPage((prev) => (prev === 1 ? 0 : 1));
    }
  };

  const prevPage = () => {
    if (isMobile) {
      setPage((prev) => (prev === 0 ? challengeData.length - 1 : prev - 1));
    } else {
      setPage((prev) => (prev === 0 ? 1 : 0));
    }
  };

  const goToPage = (index) => {
    setPage(index);
  };

  const currentItems = getCurrentItems();

  return (
    <>
      <section className="relative py-16 md:py-24 px-4 md:px-12 lg:px-24 overflow-hidden md:mt-40 mt-20">
        <div className="absolute top-0 right-10 w-88 h-12 bg-[#2D3192] -skew-x-25 hidden lg:block" />
        <div className="absolute bottom-4 left-10 w-88 h-12 bg-[#2D3192] -skew-x-25 rotate-5 hidden lg:block" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1.5px] w-8 md:w-12 bg-[#252B42]" />
              <span className="text-[#6D717F] font-semibold tracking-wide text-sm md:text-lg">
                The challenge
              </span>
              <div className="h-[1.5px] w-8 md:w-12 bg-[#252B42]" />
            </div>
            <h2 className="text-[#0A2540 text-2xl md:text-4xl lg:text-5xl font-bold leading-tight px-4">
              Why insurance verification matters
            </h2>
          </div>

          <div className="relative px-8 md:px-0">
            <button
              onClick={prevPage}
              className="absolute -left-2 md:-left-15 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full border border-blue-200 bg-white flex items-center justify-center text-[#62A0FE] hover:text-white hover:bg-[#62A0FE] hover:shadow-lg transition-all shadow-sm cursor-pointer"
              aria-label="Previous slide"
            >
              <FiChevronLeft size={20} className="md:w-6 md:h-6" />
            </button>

            <button
              onClick={nextPage}
              className="absolute -right-2 md:-right-15 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full border border-blue-200 bg-white flex items-center justify-center text-[#62A0FE] hover:text-white hover:bg-[#62A0FE] hover:shadow-lg transition-all shadow-sm cursor-pointer"
              aria-label="Next slide"
            >
              <FiChevronRight size={20} className="md:w-6 md:h-6" />
            </button>

            <div className="w-full min-h-100 md:min-h-112.5 flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMobile ? page : `page-${page}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className={`w-full ${isMobile ? "max-w-md mx-auto" : ""}`}
                >
                  <div
                    className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-1 md:grid-cols-3"} gap-6 md:gap-8`}
                  >
                    {currentItems.map((item, idx) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{
                          translateY: isMobile ? 0 : -5,
                          boxShadow: isMobile
                            ? "none"
                            : "0px 20px 40px rgba(0,0,0,0.08)",
                        }}
                        className="bg-white p-6 md:p-8 lg:p-10 rounded-xl flex flex-col items-start text-left border border-gray-100 hover:border-blue-100 transition-all shadow-sm hover:shadow-lg"
                      >
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-[#2E3192] rounded-lg flex items-center justify-center text-white text-xl md:text-2xl mb-6">
                          {item.icon}
                        </div>

                        <h3 className="text-[#6D717F] text-xl md:text-xl font-medium mb-3 md:mb-4">
                          {item.title}
                        </h3>
                        <p className="text-[#425466] text-sm md:text-base leading-relaxed mb-6 md:mb-10">
                          {item.description}
                        </p>

                        <button className="flex items-center gap-2 text-[#F15A29] font-semibold text-base md:text-lg group">
                          Know more
                          <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex justify-center gap-2 md:gap-3 mt-10 md:mt-16">
            {isMobile
              ? challengeData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToPage(index)}
                    className={`h-2 transition-all duration-300 rounded-full cursor-pointer
                  ${page === index ? "w-8 md:w-10 bg-[#2D3192]" : "w-2 bg-gray-200 hover:bg-gray-300"}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))
              : [0, 1].map((index) => (
                  <button
                    key={index}
                    onClick={() => goToPage(index)}
                    className={`h-2 transition-all duration-300 rounded-full cursor-pointer
                  ${page === index ? "w-10 bg-[#2D3192]" : "w-2 bg-gray-200 hover:bg-gray-300"}`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
          </div>
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

export default Challenge;
