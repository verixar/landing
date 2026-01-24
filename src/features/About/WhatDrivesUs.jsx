import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiChevronLeft,
  FiChevronRight,
  FiCpu,
  FiUsers,
  FiTarget,
  FiShield,
  FiZap,
  FiGlobe,
} from "react-icons/fi";

const values = [
  {
    id: 1,
    title: "Trust First",
    icon: <FiCpu size={24} className="text-white" />,
    content:
      "We build trust through transparency, security, and reliable verification services that users can depend on.",
  },
  {
    id: 2,
    title: "Global Impact",
    icon: <FiUsers size={24} className="text-white" />,
    content:
      "We continuously innovate to make insurance verification faster, easier, and more accessible for everyone.",
  },
  {
    id: 3,
    title: "Customer Focus",
    icon: <FiTarget size={24} className="text-white" />,
    content:
      "Our users are at the heart of everything we do. We listen, adapt, and deliver solutions that matter.",
  },
  {
    id: 4,
    title: "Security",
    icon: <FiShield size={24} className="text-white" />,
    content:
      "Top-tier security protocols protect every transaction, ensuring data integrity and user privacy.",
  },
  {
    id: 5,
    title: "Innovation",
    icon: <FiZap size={24} className="text-white" />,
    content:
      "Pushing boundaries with cutting-edge technology to solve real-world verification challenges.",
  },
  {
    id: 6,
    title: "Collaboration",
    icon: <FiGlobe size={24} className="text-white" />,
    content:
      "Building partnerships with insurers and businesses to create a seamless verification ecosystem.",
  },
];

const WhatDrivesUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const cardsPerView = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(values.length / cardsPerView);
  const minSwipeDistance = 50;

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setCurrentIndex(0);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) handleNext();
    if (distance < -minSwipeDistance) handlePrev();
  };

  const getVisibleCards = () => {
    const startIndex = currentIndex * cardsPerView;
    return values.slice(startIndex, startIndex + cardsPerView);
  };

  return (
    <>
      <section className="py-16 md:py-24 bg-[#000040] overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 md:gap-6 mb-4">
              <div className="h-[1.5px] w-12 md:w-20 bg-white" />
              <h2 className="text-white text-3xl md:text-5xl font-bold">
                What drives us forward
              </h2>
              <div className="h-[1.5px] w-12 md:w-20 bg-white" />
            </div>
            <p className="text-white text-lg max-w-2xl mx-auto leading-relaxed">
              Our mission is to eliminate fraud and build trust in every
              transaction through instant, reliable insurance verification.
            </p>
          </div>

          <div className="relative">
            {!isMobile && (
              <>
                <button
                  className="absolute -left-12 top-1/2 -translate-y-1/2 z-20 p-3 bg-white rounded-full shadow-xl text-[#000040] hover:scale-110 transition-transform flex items-center justify-center"
                  onClick={handlePrev}
                >
                  <FiChevronLeft size={24} />
                </button>
                <button
                  className="absolute -right-12 top-1/2 -translate-y-1/2 z-20 p-3 bg-white rounded-full shadow-xl text-[#000040] hover:scale-110 transition-transform flex items-center justify-center"
                  onClick={handleNext}
                >
                  <FiChevronRight size={24} />
                </button>
              </>
            )}

            <div
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              className="overflow-visible"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex + (isMobile ? "mob" : "desk")}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                  {getVisibleCards().map((item) => (
                    <div
                      key={item.id}
                      className="bg-white p-10 rounded-sm shadow-2xl flex flex-col items-start min-h-87.5 w-full"
                    >
                      <div className="bg-[#2E3192] p-5 rounded-full mb-8 shadow-inner">
                        {item.icon}
                      </div>
                      <h3 className="text-black text-2xl font-bold mb-6">
                        {item.title}
                      </h3>
                      <div className="w-12 h-0.5 bg-[#2E3192] mb-8 opacity-30" />
                      <p className="text-black text-lg leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {isMobile && (
              <div className="flex flex-col items-center gap-6 mt-12">
                <div className="flex items-center gap-8">
                  <button
                    className="p-4 bg-white/10 rounded-full text-white active:scale-90 transition-transform"
                    onClick={handlePrev}
                  >
                    <FiChevronLeft size={24} />
                  </button>
                  <button
                    className="p-4 bg-white/10 rounded-full text-white active:scale-90 transition-transform"
                    onClick={handleNext}
                  >
                    <FiChevronRight size={24} />
                  </button>
                </div>
                <div className="flex gap-2">
                  {Array.from({ length: totalSlides }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all ${currentIndex === i ? "bg-white w-4" : "bg-white/20"}`}
                    />
                  ))}
                </div>
              </div>
            )}

            {!isMobile && (
              <div className="mt-16 flex justify-center">
                <div className="bg-white/10 backdrop-blur-sm p-1.5 rounded-full flex gap-2 border border-white/20">
                  {Array.from({ length: totalSlides }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${currentIndex === i ? "bg-white scale-125" : "bg-white/30"}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        className="border-t border-[#D9D9D9] w-full md:mt-30 md:mb-30 mt-20 mb-20 origin-right max-w-360 mx-auto"
      />
    </>
  );
};

export default WhatDrivesUs;
