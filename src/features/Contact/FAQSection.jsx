import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "How does Verixar verify insurance status in real time?",
    answer:
      "Verixar connects securely to verified insurance data sources and partner systems to confirm coverage status using identifiers such as serial numbers, policy IDs, or asset references. Verification results are returned in near real time.",
  },
  {
    question: "How long does it take to integrate Verixar?",
    answer:
      "Most teams complete integration within a few days. For enterprise setups or custom workflows, implementation may take up to one to two weeks, with full technical support provided throughout.",
  },
  {
    question: "How secure is data on Verixar?",
    answer:
      "Data security is a core priority at Verixar. All data is encrypted in transit and at rest, with strict access controls and audit logging. We follow industry best practices and applicable data protection standards.",
  },
  {
    question: "Can Verixar integrate with our existing systems?",
    answer:
      "Yes. Verixar provides a developer-friendly REST API and webhooks, allowing seamless integration with existing insurance platforms, internal tools, and third-party systems.",
  },
  {
    question: "Does Verixar support enterprise and partnership use cases?",
    answer:
      "Verixar works with insurers, underwriters, and enterprise partners through tailored solutions, including custom SLAs, dedicated support, and scalable verification workflows.",
  },
  {
    question: "What support options are available?",
    answer:
      "We offer responsive technical support for all customers, with priority and dedicated support options available for enterprise plans.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-[#0A2540] text-4xl md:text-5xl font-black mb-4 tracking-tight">
            FAQs: Your Questions Answered
          </h2>
          <p className="text-[#425466] text-lg">
            Quick answers to common questions about Verixar Solutions
          </p>
        </div>

        {/* FAQ GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 items-start">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="mb-4">
                <motion.button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className={`w-full flex items-center justify-between p-6 rounded-xl transition-all duration-300 text-left border cursor-pointer ${
                    isOpen
                      ? "bg-[#000556] text-white border-transparent shadow-xl shadow-blue-900/20"
                      : "bg-white text-[#020A1E] hover:bg-slate-50 border-slate-100"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-bold text-base md:text-lg leading-tight">
                      {faq.question}
                    </span>
                  </div>

                  <div className="shrink-0 ml-4">
                    {isOpen ? (
                      <FiPlus size={22} className="text-white" />
                    ) : (
                      <FiMinus size={22} className="text-slate-400" />
                    )}
                  </div>
                </motion.button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        className="p-6 text-[#425466] leading-relaxed text-sm md:text-base bg-white/50 rounded-b-xl border-x border-b border-slate-50"
                      >
                        {faq.answer}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
