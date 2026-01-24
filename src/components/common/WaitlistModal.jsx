import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiX,
  FiCheckCircle,
  FiLoader,
  FiUser,
  FiMail,
  FiAlertCircle,
} from "react-icons/fi";
import confetti from "canvas-confetti";

const WaitlistModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  // Function to trigger the celebration
  const fireConfetti = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 200 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 350);
  };

  useEffect(() => {
    if (isOpen) {
      setStatus("idle");
      setMessage("");
      setFormData({ name: "", email: "" });
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbzGkdZ-Z20-rFen5xJ9QjU6qvvvGLU6E1a6F-EpQdLvsS1nPxLxLnRNNh1p8keJlRKz/exec";

      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const resData = await response.json();

      if (resData.result === "success") {
        setStatus("success");
        setMessage("You're on the waitlist!");
        fireConfetti(); // Boom! Celebration
        setFormData({ name: "", email: "" });
      } else if (resData.result === "duplicate") {
        setStatus("duplicate");
        setMessage(resData.message);
      } else {
        throw new Error("Server error");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again in a moment.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          {/* Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#020A1E]/80 backdrop-blur-xl"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 md:p-10 z-110"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
            >
              <FiX size={20} />
            </button>

            {status === "success" || status === "duplicate" ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-6"
              >
                <div className="relative inline-block mb-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="absolute inset-0 bg-green-500 rounded-full"
                  />
                  <FiCheckCircle className="relative w-16 h-16 text-green-500 mx-auto" />
                </div>

                <h2 className="text-2xl font-bold text-[#020A1E] mb-2 tracking-tight">
                  {status === "success"
                    ? "Welcome Aboard!"
                    : "Already Subscribed"}
                </h2>
                <p className="text-gray-500 leading-relaxed">{message}</p>

                <button
                  onClick={onClose}
                  className="mt-8 w-full py-4 bg-[#020A1E] text-white rounded-2xl font-bold hover:bg-blue-600 transition-all active:scale-95 shadow-lg shadow-blue-900/10"
                >
                  Close & Explore
                </button>
              </motion.div>
            ) : status === "error" ? (
              <div className="text-center py-6">
                <FiAlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-[#020A1E] mb-2">
                  Something went wrong
                </h2>
                <p className="text-gray-500">{message}</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 w-full py-4 bg-[#020A1E] text-white rounded-2xl font-bold"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-[#020A1E] tracking-tight">
                    Get Early Access
                  </h2>
                  <p className="text-gray-500 mt-2">
                    Be among the first to experience Verixar.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      required
                      type="text"
                      placeholder="Full Name"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div className="relative">
                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      required
                      type="email"
                      placeholder="Email Address"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <button
                  disabled={status === "loading"}
                  className="w-full py-4 bg-[#020A1E] text-white rounded-2xl font-bold text-lg hover:bg-[#000055] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-xl shadow-blue-900/10 cursor-pointer"
                >
                  {status === "loading" ? (
                    <>
                      <FiLoader className="animate-spin" /> Verifying...
                    </>
                  ) : (
                    "Secure My Spot"
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WaitlistModal;
