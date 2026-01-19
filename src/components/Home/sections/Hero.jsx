import React, { useState, useEffect } from "react";
import { FiArrowRight, FiPlay, FiArrowDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      title: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      title: "Sed do eiusmod tempor incididunt ut labore et dolore.",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      title: "Quis autem vel eum iure reprehenderit qui in ea voluptate.",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      title: "At vero eos et accusamus et iusto odio dignissimos.",
      description:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative min-h-screen w-full flex items-center bg-[#020A1E] overflow-hidden mx-auto">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: `url(${slides[currentSlide].image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </AnimatePresence>
        </div>

        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            backgroundImage: "url('/images/transparent-bg.png')",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 1,
          }}
        />

        <div className="absolute inset-0 bg-[#020A1E]/70 mix-blend-multiply z-20" />
        <div className="absolute inset-0 bg-linear-to-r from-[#020A1E] via-[#020A1E]/60 to-transparent z-20" />
      </div>

      <div className="relative z-30 container mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-20">
        <div className="flex flex-col lg:flex-row items-center justify-start gap-8 lg:gap-6">
          <div className="flex-1 flex flex-col justify-center space-y-6 md:space-y-8 text-center lg:text-left max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white tracking-[0.2em] uppercase text-xs md:text-sm font-bold"
            >
              Welcome to Verixar
            </motion.span>

            <div className="min-h-62.5 md:min-h-75 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-white text-4xl md:text-5xl lg:text-[64px] font-bold leading-[1.1] mb-6">
                    {slides[currentSlide].title}
                  </h1>
                  <p className="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                    {slides[currentSlide].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
              <button className="w-full sm:w-auto px-10 py-4 bg-white text-[#0056D6] rounded-sm font-regular text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer">
                Join the Waitlist
              </button>

              <button className="w-full sm:w-auto flex items-center justify-center space-x-3 px-10 py-4 border-2 border-white/30 text-white rounded-sm font-regular text-lg hover:bg-white/10 transition-all cursor-pointer">
                <span>Request Demo</span>
              </button>
            </div>
          </div>

          <div className="hidden lg:flex justify-center lg:justify-start h-full">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, rotate: -10 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              src="/images/arrow.png"
              alt="Decorative Arrow"
              className="w-72 md:w-96 object-contain drop-shadow-2xl -ml-20 mt-10"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full h-2 ${
              currentSlide === index
                ? "w-10 bg-white"
                : "w-2 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-12 right-10 z-20 hidden lg:block">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <button className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/10 hover:border-[#00A3FF] transition-all md:mr-35">
            <FiArrowDown className="text-xl" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
