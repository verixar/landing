import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const faqData = {
  General: [
    {
      id: 1,
      q: "What is Verixar?",
      a: "Verixar is an insurance verification platform that enables insurers to confirm whether a product or asset is actively insured when it appears outside the original point of sale.",
    },
    {
      id: 2,
      q: "What problem does Verixar solve for insurers?",
      a: "Verixar reduces insurance fraud by preventing cancelled, expired, or transferred policies from being reused or misrepresented during secondary transactions.",
    },
    {
      id: 3,
      q: "How does insurance verification work?",
      a: "Insurers provide Verixar with approved policy or asset identifiers. When a verification request is made, Verixar securely confirms the current insurance status in real time.",
    },
    {
      id: 4,
      q: "Is Verixar involved in underwriting or claims decisions?",
      a: "No. Verixar operates strictly as a verification layer and does not issue policies, assess risk, or make underwriting or claims decisions.",
    },
  ],

  Support: [
    {
      id: 5,
      q: "What does it mean when a product cannot be verified?",
      a: "An unverified result may indicate expired coverage, a cancelled policy, ownership transfer, or data that has not yet been synced by the insurer.",
    },
    {
      id: 6,
      q: "How is insurer data protected?",
      a: "Verixar does not expose sensitive policyholder data. All verification responses are controlled, encrypted, and limited to insurance status only.",
    },
    {
      id: 7,
      q: "Can insurers monitor verification activity?",
      a: "Yes. Insurers can access reporting and monitoring tools to track verification volume, outcomes, and potential fraud signals.",
    },
  ],

  Contact: [
    {
      id: 8,
      q: "How can insurance companies work with Verixar?",
      a: "Insurance providers can contact Verixar to discuss onboarding, data integration, and verification workflows.",
    },
    {
      id: 9,
      q: "Does Verixar support enterprise integrations?",
      a: "Yes. Verixar supports enterprise-grade integrations via API or structured data exchange, depending on insurer requirements.",
    },
    {
      id: 10,
      q: "Where does Verixar operate?",
      a: "Verixar operates as a global verification layer and works with insurers across multiple regions, subject to local compliance requirements.",
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
