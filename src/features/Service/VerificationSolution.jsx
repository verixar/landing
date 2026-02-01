import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiCheckCircle } from "react-icons/fi";

const services = [
  {
    title: "Real-Time Insurance Verification",
    desc: "Instantly confirm active insurance coverage using serial numbers, policy IDs, or asset references—no manual checks required.",
    features: [
      "Sub-second verification responses",
      "Support for multiple asset identifiers",
      "Optimized for web, mobile, and embedded systems",
      "Fast onboarding with minimal configuration",
    ],
  },
  {
    title: "Developer-First Verification API",
    desc: "Embed Verixar’s insurance verification engine directly into your platform through a secure, scalable REST API.",
    features: [
      "RESTful, versioned API architecture",
      "Clear and maintainable documentation",
      "Dedicated sandbox and production environments",
      "Event-driven webhooks for real-time updates",
    ],
  },
  {
    title: "Bulk & Batch Verification",
    desc: "Verify high volumes of insurance records efficiently through automated batch requests or secure CSV uploads.",
    features: [
      "CSV and batch API processing",
      "Designed for high-throughput workloads",
      "Structured and exportable verification reports",
      "Asynchronous processing for large datasets",
    ],
  },
  {
    title: "Enterprise Security & Compliance",
    desc: "Enterprise-grade security and compliance controls built for insurers, underwriters, and regulated organizations.",
    features: [
      "Role-based access control (RBAC)",
      "Comprehensive audit logs and traceability",
      "Custom service-level agreements (SLAs)",
      "Priority enterprise support",
    ],
  },
  {
    title: "Fraud Risk Intelligence",
    desc: "Detect suspicious insurance activity using intelligent verification signals and historical behavior analysis.",
    features: [
      "Dynamic risk-scoring signals",
      "Anomaly and inconsistency detection",
      "Historical verification tracking",
      "Cross-record and asset correlation",
    ],
  },
  {
    title: "Global Data Synchronization",
    desc: "Ensure consistent insurance verification across regions with secure, real-time data synchronization.",
    features: [
      "Cross-border policy data synchronization",
      "GDPR-aware and privacy-first workflows",
      "Multi-region infrastructure support",
      "Integration with localized insurer data sources",
    ],
  },
];


const VerificationSolutions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const isDesktop =
    typeof window !== "undefined" ? window.innerWidth >= 768 : false;

  const next = () => {
    setDirection(1);
    if (window.innerWidth >= 768) {
      // Desktop: Toggle between 0 and 3
      setCurrentIndex((prev) => (prev === 0 ? 3 : 0));
    } else {
      // Mobile: 1 by 1
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }
  };

  const prev = () => {
    setDirection(-1);
    if (window.innerWidth >= 768) {
      setCurrentIndex((prev) => (prev === 0 ? 3 : 0));
    } else {
      setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    }
  };

  const getVisibleItems = () => {
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      return services.slice(currentIndex, currentIndex + 3);
    }
    return [services[currentIndex]];
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 bg-[#F9FAFB] min-h-screen overflow-hidden relative">
      <div className="container mx-auto px-6 relative">
        {/* HEADER */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-slate-300" />
            <span className="text-[#425466] font-semibold uppercase tracking-[0.2em] text-xs">
              What We Offer
            </span>
            <div className="w-12 h-px bg-slate-300" />
          </div>
          <h2 className="text-[#252B42] text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Complete verification solutions
          </h2>
          <p className="text-[#425466] max-w-2xl mx-auto text-lg leading-relaxed">
            Whether you're an individual buyer or an enterprise insurer, we have
            the right solution for your verification needs.
          </p>
        </div>

        {/* SLIDER CONTAINER */}
        <div className="relative max-w-7xl mx-auto">
          {/* Desktop Navigation Buttons */}
          <button
            onClick={prev}
            className="hidden md:flex absolute -left-30 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full bg-white shadow-md hover:bg-[#000556] hover:text-white transition-all cursor-pointer"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="hidden md:flex absolute -right-30 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full bg-white shadow-md hover:bg-[#000556] hover:text-white transition-all cursor-pointer"
          >
            <FiChevronRight size={24} />
          </button>

          {/* Mobile Navigation Buttons (Overlaid on card) */}
          <div className="flex md:hidden absolute top-1/2 -translate-y-1/2 w-full justify-between px-2 z-20 pointer-events-none">
            <button
              onClick={prev}
              className="w-10 h-10 pointer-events-auto rounded-full bg-white/90 shadow-lg flex items-center justify-center text-[#000556]"
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 pointer-events-auto rounded-full bg-white/90 shadow-lg flex items-center justify-center text-[#000556]"
            >
              <FiChevronRight size={20} />
            </button>
          </div>

          {/* CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatePresence mode="wait" custom={direction}>
              {getVisibleItems().map((item) => (
                <motion.div
                  key={item.title}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "circOut" }}
                  className="bg-white p-8 shadow-sm border border-slate-100 flex flex-col h-full"
                >
                  <div className="w-14 h-14 bg-[#000556] rounded-xl flex items-center justify-center mb-6">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-white"
                    >
                      <path
                        d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-[#131927]">
                    {item.title}
                  </h3>
                  <p className="text-[#425466] text-sm leading-relaxed mb-6 grow">
                    {item.desc}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {item.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-[#6D717F] text-sm font-medium"
                      >
                        <FiCheckCircle className="text-[#2E3192]" /> {f}
                      </li>
                    ))}
                  </ul>

                  <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.8 }}
                      className="h-full bg-[#000556]"
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* INDICATORS */}
        <div className="flex justify-center gap-3 mt-12">
          {/* Mobile: 6 dots */}
          <div className="flex md:hidden gap-2">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${currentIndex === i ? "w-8 bg-[#000556]" : "w-2 bg-slate-300"}`}
              />
            ))}
          </div>

          {/* Desktop: 2 long indicators */}
          <div className="hidden md:flex gap-3">
            {[0, 3].map((pageStart, i) => {
              const isActive = currentIndex === pageStart;
              return (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(pageStart > currentIndex ? 1 : -1);
                    setCurrentIndex(pageStart);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-500 ${isActive ? "w-16 bg-[#000556]" : "w-4 bg-slate-300"}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerificationSolutions;
