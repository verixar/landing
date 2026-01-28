import React from "react";
import { motion } from "framer-motion";
import { FiSearch, FiCpu, FiCheckCircle, FiExternalLink } from "react-icons/fi";

const steps = [
  {
    title: "Enter Serial Number",
    desc: "Input the serial number or unique identifier of the item you want to verify through our web platform or API.",
    icon: <FiSearch size={24} />,
  },
  {
    title: "Database Search",
    desc: "Our system searches through millions of insurance records across multiple databases in real-time.",
    icon: <FiCpu size={24} />,
  },
  {
    title: "Instant Results",
    desc: "Receive detailed verification results including insurance status, policy information, and validity period.",
    icon: <FiCheckCircle size={24} />,
  },
  {
    title: "Take Action",
    desc: "Make informed decisions based on accurate verification data. Download reports or integrate results.",
    icon: <FiExternalLink size={24} />,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-0.5 bg-[#F26430]" />
            <span className="text-slate-500 font-bold uppercase tracking-[0.3em] text-[10px]">
              The Process
            </span>
            <div className="w-8 h-0.5 bg-[#F26430]" />
          </div>
          <h2 className="text-[#020A1E] text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            How verification works
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Our streamlined four-step process ensures fast, accurate, and
            reliable insurance verification every time.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute -top-15 left-0 w-full z-0">
            <div className="flex justify-between px-[5%]">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.8 }}
                >
                  <svg
                    width="280"
                    height="120"
                    viewBox="0 0 280 120"
                    fill="none"
                  >
                    <path
                      d="M10 100 
                    C 70 60, 210 60, 270 100"
                      stroke="#000556"
                      strokeWidth="2"
                      strokeDasharray="12 8"
                      className="opacity-20"
                    />

                    <path
                      d="M265 95 L270 100 L265 105"
                      stroke="#000556"
                      strokeWidth="2"
                      className="opacity-40"
                    />
                  </svg>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group h-full"
              >
                <div className="h-full p-4 mt-15 bg-white border border-slate-50 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-500 hover:duration-300 group-hover:bg-[#000556] group-hover:shadow-2xl group-hover:shadow-blue-900/30 group-hover:-translate-y-2">
                  <div className="w-20 h-20 rounded-full border border-slate-100 flex items-center justify-center mb-5 mx-auto bg-white transition-all duration-500 group-hover:border-blue-400 group-hover:scale-110">
                    <div className="text-[#000556] transition-transform duration-500 group-hover:rotate-360">
                      {step.icon}
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-[#020A1E] text-xl font-bold mb-4 transition-colors duration-500 group-hover:text-white">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed transition-colors duration-500 group-hover:text-blue-100/70">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
