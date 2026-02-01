import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    id: 1,
    title: "Mobile-Ready Verification",
    desc: "Verify insured assets instantly from any device, with a responsive interface built for real-world, on-the-go checks.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Built-In Fraud Defense",
    desc: "Detect expired, cancelled, or mismatched policies through real-time insurer-linked verification.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Verification Reports",
    desc: "Access clear, structured verification results including coverage status, timestamps, and policy validity.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Accessible Entry, Scalable Power",
    desc: "Start with basic verification access, then scale into advanced insights, automation, and enterprise controls.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];


const ShopWithConfidence = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-lg aspect-square overflow-hidden">
              <div className="absolute inset-0 bg-[#000556]">
                <svg
                  className="absolute inset-0 w-full h-full opacity-20"
                  viewBox="0 0 400 400"
                >
                  <path
                    d="M0 100 Q 100 50 200 100 T 400 100 V 400 H 0 Z"
                    fill="white"
                    fillOpacity="0.1"
                  />
                  <path
                    d="M0 200 Q 100 150 200 200 T 400 200 V 400 H 0 Z"
                    fill="white"
                    fillOpacity="0.1"
                  />
                  <path
                    d="M0 300 Q 100 250 200 300 T 400 300 V 400 H 0 Z"
                    fill="white"
                    fillOpacity="0.1"
                  />
                </svg>
              </div>

              <motion.img
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                src="images/happy-woman.png"
                alt="Confident shopper"
                className="relative z-10 w-full h-full object-contain object-bottom mt-10"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="mb-12 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                <div className="w-12 h-px bg-slate-300" />
                <span className="text-[#425466] font-bold uppercase tracking-[0.2em] text-[10px]">
                  What We Offer
                </span>
                <div className="w-12 h-px bg-slate-300" />
              </div>
              <h2 className="text-[#020A1E] text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
                Shop with confidence
              </h2>
              <p className="text-[#425466] text-lg leading-relaxed max-w-xl">
                Before making any high-value purchase, verify the insurance
                status instantly. Our platform gives you the peace of mind you
                need to buy confidently.
              </p>
            </div>

            <div className="space-y-2 mb-12">
              {features.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ x: 5 }}
                  className="group relative p-6 transition-all duration-300 cursor-pointer border-l-4 border-transparent hover:border-[#000556] hover:bg-white hover:shadow-[0_15px_40px_rgba(0,0,0,0.05)]"
                >
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 bg-slate-100 text-[#000556] group-hover:bg-[#000556] group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>

                    <div className="grow">
                      <h3 className="text-lg font-bold text-slate-700 group-hover:text-[#020A1E] transition-colors mb-1">
                        {item.title}
                      </h3>

                      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out">
                        <p className="text-[#425466] text-sm leading-relaxed overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center lg:text-left">
              <button className="bg-[#F26430] text-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-[#e05626] hover:shadow-xl hover:shadow-orange-200 transition-all active:scale-95">
                Start Verifying
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopWithConfidence;
