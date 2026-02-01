import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiX, FiMenu } from "react-icons/fi";
import TopNav from "./TopNav";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 48);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const navLinks = [
    { id: "/", label: "Home" },
    { id: "/about", label: "About" },
    { id: "/services", label: "Services" },
    // { id: "/demo", label: "Product Demo" },
    { id: "/contact", label: "Contact" },
  ];

  return (
    <div className="header-container w-full font-gilroy">
      <TopNav />

      <header
        className={`w-full z-40 transition-all duration-500 ${
          isSticky
            ? "fixed top-0 left-0 right-0 bg-white shadow-md py-2"
            : "absolute top-22 left-0 right-0 py-4"
        }`}
      >
        <div className="container mx-auto px-4 md:px-10">
          <div
            className={`flex items-center justify-between px-6 py-4 transition-all duration-300 ${
              !isSticky
                ? "border-b border-white/20"
                : "border-b border-transparent"
            }`}
          >
            {/* Logo */}
            <Link to="/" className="z-50">
              <img
                src={
                  isSticky
                    ? "/images/verixar-blue-logo.png"
                    : "/images/verixar-white-logo.png"
                }
                alt="Verixar"
                className="h-8 md:h-9 w-auto"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.id;
                return (
                  <Link
                    key={link.id}
                    to={link.id}
                    className={`text-base font-normal transition-colors duration-300 ${
                      isActive
                        ? "text-[#EB4210]"
                        : isSticky
                          ? "text-gray-700 hover:text-[#EB4210]"
                          : "text-white hover:text-[#EB4210]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <button
                className={`flex items-center space-x-2 px-6 py-2.5 rounded-lg font-medium transition-all ${
                  isSticky
                    ? "bg-[#0056D6] text-white hover:bg-[#0047B3]"
                    : "bg-white text-[#0056D6] hover:bg-gray-100"
                }`}
              >
                <span>Sign up</span>
                <FiArrowRight />
              </button>
            </nav>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden z-50 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className={isSticky ? "text-gray-800" : "text-white"}>
                <FiMenu className="text-2xl" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
              x: "45%",
              y: "-45%",
              borderRadius: "100px",
            }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0, borderRadius: "0px" }}
            exit={{ opacity: 0, scale: 0, x: "45%", y: "-45%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-white z-60 lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100">
              <img
                src="/images/verixar-blue-logo.png"
                alt="Verixar"
                className="h-7"
              />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2"
              >
                <FiX className="text-gray-800 text-3xl" />
              </button>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 flex flex-col items-center justify-center space-y-10">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.id}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-normal transition-colors ${
                    location.pathname === link.id
                      ? "text-[#EB4210]"
                      : "text-gray-800"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-4 w-full px-10">
                <Link
                  to="/demo"
                  className="flex items-center justify-center bg-[#0056D6] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-100 w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>Sign up</span>
                  <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
