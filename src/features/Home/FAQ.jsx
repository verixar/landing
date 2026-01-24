import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const faqData = {
  General: [
    {
      id: 1,
      q: "What is Verixar?",
      a: "Verixar is a verification platform that helps buyers instantly confirm whether a second-hand item is actively insured before purchase.",
    },
    {
      id: 2,
      q: "How does Verixar work?",
      a: "We verify item insurance status by securely checking insurer-provided data using unique identifiers like serial numbers or policy references.",
    },
    {
      id: 3,
      q: "Is the verification real-time?",
      a: "Yes. Every check reflects the current insurance status at the moment the request is made.",
    },
    {
      id: 4,
      q: "Who can use Verixar?",
      a: "Verixar is built for buyers, marketplaces, and insurance providers looking to reduce fraud and increase trust.",
    },
  ],

  Support: [
    {
      id: 5,
      q: "What if an item cannot be verified?",
      a: "If an item isn’t found, it may not yet be synced by the insurer or may require further review.",
    },
    {
      id: 6,
      q: "Is my data secure on Verixar?",
      a: "Yes. All data is encrypted in transit and access is strictly controlled to meet security and compliance standards.",
    },
    {
      id: 7,
      q: "How do I get help or report an issue?",
      a: "You can contact our support team via the platform or through our official support email.",
    },
  ],

  Contact: [
    {
      id: 8,
      q: "How can I reach the Verixar team?",
      a: "You can reach us through the contact form on our website or via email.",
    },
    {
      id: 9,
      q: "Do you offer partnerships or enterprise plans?",
      a: "Yes. We work closely with insurers and platforms to provide custom integrations and scalable solutions.",
    },
    {
      id: 10,
      q: "Where does Verixar operate?",
      a: "Verixar operates globally through partnerships with insurance providers across multiple regions.",
    },
  ],
};


const FAQ = () => {
  const [activeTab, setActiveTab] = useState("General");
  const [slideIndex, setSlideIndex] = useState(0);

  const currentFAQs = faqData[activeTab];
  const totalSlides = Math.ceil(currentFAQs.length / 2);

  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSlideIndex(0); // Reset slider when switching tabs
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-12">
          <div className="max-w-lg">
            <h2 className="text-[#0A2540] text-4xl md:text-5xl font-bold leading-tight mb-8">
              FAQs: Your Questions Answered
            </h2>
          </div>

          <div className="flex bg-gray-50 p-1.5 rounded-full border border-gray-100">
            {Object.keys(faqData).map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all cursor-pointer ${
                  activeTab === tab
                    ? "bg-[#00004d] text-white shadow-lg"
                    : "text-[#425466] hover:text-[#0A1D37]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="relative min-h-75">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + slideIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12"
            >
              {/* Render two questions at a time based on slideIndex */}
              {currentFAQs
                .slice(slideIndex * 2, slideIndex * 2 + 2)
                .map((faq) => (
                  <div key={faq.id} className="space-y-4">
                    <h3 className="text-black text-xl font-bold leading-snug">
                      {faq.q}
                    </h3>
                    <p className="text-[#425466] leading-relaxed">{faq.a}</p>
                  </div>
                ))}
            </motion.div>
          </AnimatePresence>

          {/* Bottom Controls Line */}
          <div className="mt-16 pt-8 border-t border-gray-200 flex items-center justify-between">
            <span className="text-gray-400 text-sm font-medium">
              {activeTab} questions
            </span>

            <div className="flex items-center gap-8">
              {/* Small Dot Indicators */}
              <div className="flex flex-col gap-2">
                {[...Array(totalSlides)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      slideIndex === i ? "bg-blue-600 scale-125" : "bg-gray-200"
                    }`}
                  />
                ))}
              </div>

              {/* Nav Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={prevSlide}
                  className="p-4 rounded-full border border-blue-400 text-blue-500 hover:bg-blue-50 transition-all"
                >
                  <FiChevronLeft size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-4 rounded-full border border-blue-400 text-blue-500 hover:bg-blue-50 transition-all"
                >
                  <FiChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;