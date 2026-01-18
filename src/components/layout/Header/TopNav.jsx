// src/components/layout/Header/TopNav.jsx
import { useState, useEffect } from "react";
import { FaSearch, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const TopNav = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size for responsiveness
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast.success(`Searching for: ${searchQuery}`);
      setSearchQuery("");
    }
  };

  const handleContactClick = (type) => {
    const text = type === "email" ? "info@verixar.com" : "+44 000 000 00";
    toast.success(
      `${type === "email" ? "Email" : "Phone number"} copied to clipboard!`,
    );
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="w-full bg-white text-[#252B42] border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-3 md:py-4">
          {/* Contact Information */}
          <div className="w-full md:w-auto flex items-center justify-between md:justify-start mb-3 md:mb-0">
            {/* Contact Info */}
            <div className="flex items-center space-x-4 md:space-x-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleContactClick("email")}
                className="flex items-center space-x-2 cursor-pointer group"
                aria-label="Copy email address"
              >
                <FaEnvelope className="text-lg text-[#252B42] group-hover:text-[#EB4210] transition-colors duration-200" />
                <span className="text-sm font-medium text-[#252B42] group-hover:text-[#EB4210] transition-colors duration-200 hidden sm:inline">
                  info@verixar.com
                </span>
              </motion.button>

              <div className="h-4 w-px bg-gray-300 hidden md:block" />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleContactClick("phone")}
                className="flex items-center space-x-2 cursor-pointer group"
                aria-label="Copy phone number"
              >
                <FaPhone className="text-lg text-[#252B42] group-hover:text-[#EB4210] transition-colors duration-200 transform -scale-x-100" />
                <span className="text-sm font-medium text-[#252B42] group-hover:text-[#EB4210] transition-colors duration-200 hidden sm:inline">
                  +44 000 000 00
                </span>
              </motion.button>
            </div>

            {/* Mobile Search */}
            {isMobile && (
              <form onSubmit={handleSearch} className="relative">
                <div className="flex items-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search"
                    className="w-50 sm:w-40 px-3 py-1.5 text-sm text-[#252B42] bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:border-[#EB4210] focus:ring-1 focus:ring-[#EB4210] transition-all duration-300 placeholder-gray-500"
                    aria-label="Search Verixar"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute right-1 p-1 bg-[#EB4210] text-white rounded-full hover:bg-[#D1390E] transition-colors duration-300"
                    aria-label="Search"
                  >
                    <FaSearch className="text-xs" />
                  </motion.button>
                </div>
              </form>
            )}
          </div>

          {/* Desktop Search Bar - Perfectly aligned to the right */}
          {!isMobile && (
            <div className="w-full md:w-auto flex justify-center md:justify-end">
              <form onSubmit={handleSearch} className="relative group">
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search Verixar"
                    className="w-72 px-5 py-2.5 pl-6 text-[#252B42] bg-white border border-[#000F98] rounded-full focus:outline-none focus:border-[#EB4210] focus:ring-2 focus:ring-[#EB4210]/20 transition-all duration-300 placeholder-[#666B82] text-sm font-medium shadow-sm"
                    aria-label="Search Verixar"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-[#EB4210] text-white rounded-full hover:shadow-lg hover:shadow-[#EB4210]/30 transition-all duration-300 flex items-center justify-center"
                    aria-label="Search"
                  >
                    <FaSearch className="text-sm" />
                  </motion.button>
                </motion.div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
