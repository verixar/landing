import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaXTwitter 
} from "react-icons/fa6";
import { 
  FiMail, 
  FiPhone, 
  FiMapPin 
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-[#000556] text-white py-16 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section with Logo Image */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Link to="/" className="inline-block">
              <motion.img 
                src="images/verixar-white-logo.png" // Path to your logo
                alt="Verixar Logo"
                className="h-8 md:h-10 w-auto object-contain"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Trusted insurance verification platform serving millions of users worldwide.
            </p>
            <div className="flex gap-5 pt-2">
              {[
                { icon: <FaFacebookF />, href: "https://facebook.com" },
                { icon: <FaInstagram />, href: "https://instagram.com" },
                { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
                { icon: <FaXTwitter />, href: "https://twitter.com" }
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3, color: "#60a5fa" }}
                  className="text-gray-400 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              {['About', 'Careers', 'Blogs', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="hover:text-white transition-colors flex items-center group">
                    <motion.span whileHover={{ x: 5 }}>{item}</motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Product Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">Product</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              {['Features', 'Pricing', 'Case Studies', 'Demo'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(" ", "-")}`} 
                    className="hover:text-white transition-colors flex items-center"
                  >
                    <motion.span whileHover={{ x: 5 }}>{item}</motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-5 text-gray-400 text-sm">
              <motion.li whileHover={{ x: 5 }} className="flex items-center gap-3 cursor-default">
                <FiMail className="text-white text-lg" />
                <a href="mailto:info@verixartech.com" className="hover:text-white transition-colors">info@verixartech.com</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex items-center gap-3 cursor-default">
                <FiPhone className="text-white text-lg" />
                <a href="tel:+440000000000" className="hover:text-white transition-colors">+44 000 0000 0000</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex items-start gap-3 cursor-default">
                <FiMapPin className="text-white text-lg mt-0.5" />
                <span>London, United Kingdom</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          variants={itemVariants}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-gray-400 text-sm order-2 md:order-1">
            © {currentYear} Verixar. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-gray-400 text-sm order-1 md:order-2">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;