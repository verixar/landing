import React from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const ContactSection = () => {
  const contactData = [
    {
      icon: <FiMapPin />,
      title: "Visit Our Office",
      lines: ["123 Liberation Road", "United Kingdom", "London, UK"],
    },
    {
      icon: <FiPhone />,
      title: "Phone",
      lines: ["+44 000 000 000", "+44 000 000 000"],
    },
    {
      icon: <FiMail />,
      title: "Email",
      lines: ["hello@verixar.com", "support@verixar.com"],
    },
  ];

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-slate-600 max-w-2xl mx-auto mb-10 text-lg">
            Whether you're a buyer looking to verify items or an insurer wanting
            to join our platform, we're here to help. Contact us today to learn
            more.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-left gap-2 text-4xl md:text-5xl font-black text-[#020A1E]">
            <span className="border-l-4 border-[#F15A29] pl-4 text-[#F15A29]">
              Get In Touch
            </span>
            <span>With Us</span>
          </div>
        </div>

        <div className="flex overflow-x-auto pb-10 mb-10 gap-6 snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-3 md:overflow-x-visible md:pb-20 md:border-b md:border-slate-100">
          {contactData.map((item, idx) => (
            <div
              key={idx}
              className="min-w-[85%] sm:min-w-[45%] md:min-w-0 snap-center flex flex-col lg:flex-row items-center text-center lg:text-left gap-6 group p-6 md:p-0 bg-slate-50 md:bg-transparent rounded-2xl md:rounded-none"
            >
              <div className="w-20 h-20 shrink-0 rounded-full border-2 border-slate-100 flex items-center justify-center text-[#000556] text-2xl group-hover:bg-[#000556] group-hover:text-white transition-all duration-300 shadow-sm md:shadow-none">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#020A1E] font-bold text-xl mb-2">
                  {item.title}
                </h3>
                {item.lines.map((line, i) => (
                  <p
                    key={i}
                    className="text-[#6D717F] text-sm whitespace-nowrap"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#000556] overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 p-8 md:p-16">
              <h3 className="text-white text-3xl font-bold mb-4">
                Send Us a Message
              </h3>
              <p className="text-blue-100/60 mb-10 text-sm">
                For further questions, including partnership opportunities,
                please email or contact using our contact form.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-white uppercase tracking-widest">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full bg-white px-4 py-3 text-slate-800 outline-none focus:ring-2 focus:ring-[#F15A29] transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-white uppercase tracking-widest">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="hello@example.com"
                      className="w-full bg-white px-4 py-3 text-slate-800 outline-none focus:ring-2 focus:ring-[#F15A29] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-white uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Describe your problem..."
                    className="w-full bg-white px-4 py-3 text-slate-800 outline-none focus:ring-2 focus:ring-[#F15A29] transition-all"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: "#e05626" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#F15A29] text-white font-bold py-4 uppercase tracking-widest text-xs transition-colors shadow-lg shadow-orange-900/20"
                >
                  Send Message
                </motion.button>
              </form>
            </div>

            <div className="w-full lg:w-1/2 p-4 md:p-10 lg:p-16 flex flex-col">
              <h3 className="text-white text-3xl font-bold mb-8 hidden md:block">
                Locate Us
              </h3>
              <div className="grow overflow-hidden min-h-87.5 lg:min-h-full border-4 border-white/5 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.81924302169!2d-0.1306117!3d51.5165239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b2d3080c559%3A0xb35359419137c445!2sLondon!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="transition-all duration-700"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
