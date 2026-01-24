import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    id: 1,
    name: "John Ayiku",
    role: "Solo Traveler from USA",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    quote:
      "I was hesitant to finalize a high-value purchase without knowing the insurance history. Verixar gave me a clear status report in seconds.",
    stars: 5,
  },
  {
    id: 2,
    name: "Grace Anderson",
    role: "Family Trip from UK",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
    quote:
      "The ultimate trust-builder. Proving insurance coverage used to involve a mountain of paperwork. Now, I simply share a serial number.",
    stars: 4,
  },
  {
    id: 3,
    name: "Smith McWilson",
    role: "Analyst",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
    quote:
      "Integrating Verixar into our verification workflow has eliminated the risk of misrepresented coverage. Bank-grade security is essential.",
    stars: 4,
  },
  {
    id: 4,
    name: "Avery Chen",
    role: "Business Owner",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
    quote:
      "The real-time dashboard gives me all the insights I need to manage my risks effectively. Truly a seamless verification process.",
    stars: 5,
  },
  {
    id: 5,
    name: "Sarah Jenkins",
    role: "Marketplace Manager",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    quote:
      "We've seen a 30% reduction in fraudulent listings since we started requiring Verixar checks for our high-end electronics category.",
    stars: 5,
  },
  {
    id: 6,
    name: "Michael Ross",
    role: "Logistics Director",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200",
    quote:
      "The API integration was effortless. We now verify insurance status automatically at the point of dispatch without manual intervention.",
    stars: 4,
  },
];

const Testimonial = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Update items per view based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / itemsPerView) - 1;

  const nextSlide = () => {
    setCurrentPage((prev) => (prev >= totalPages ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages : prev - 1));
  };

  // Calculate visible testimonials based on current page and items per view
  const getVisibleTestimonials = () => {
    const startIndex = currentPage * itemsPerView;
    return testimonials.slice(startIndex, startIndex + itemsPerView);
  };

  return (
    <>
      <section className="py-24 px-4 sm:px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 md:mb-16">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
              <div className="hidden md:block h-1 w-15 bg-[#0A2540]" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0A2540] mb-2">
                What Our Clients Say
              </h2>
              <div className="hidden md:block h-1 w-15 bg-[#0A2540]" />
            </div>
            <p className="text-[#425466] max-w-md mx-auto text-sm md:text-base">
              Yes we have impact and now discover what some of our customers
              have so say about their experience with Verixar
            </p>
          </div>

          <div className="relative">
            <button
              onClick={prevSlide}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 p-3 rounded-full bg-white shadow-lg border border-gray-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-all"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 p-3 rounded-full bg-white shadow-lg border border-gray-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-all"
              aria-label="Next testimonial"
            >
              <FiChevronRight size={24} />
            </button>

            <div className="flex md:hidden justify-between items-center mb-6">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-white shadow-lg border border-gray-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-all"
                aria-label="Previous testimonial"
              >
                <FiChevronLeft size={20} />
              </button>

              <div className="text-sm text-gray-600">
                {currentPage + 1} / {totalPages + 1}
              </div>

              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-white shadow-lg border border-gray-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-all"
                aria-label="Next testimonial"
              >
                <FiChevronRight size={20} />
              </button>
            </div>

            {/* Testimonial Cards */}
            <div className="overflow-hidden">
              <motion.div
                key={itemsPerView}
                animate={{ x: `-${currentPage * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="flex"
              >
                {testimonials.map((item) => (
                  <div
                    key={item.id}
                    className="min-w-full md:min-w-0 px-2"
                    style={{
                      flex: `0 0 ${100 / itemsPerView}%`,
                      maxWidth: `${100 / itemsPerView}%`,
                    }}
                  >
                    <div className="bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col items-center text-center border border-gray-100 rounded-lg">
                      {/* Profile Image */}
                      <div className="relative mb-6">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-orange-100"
                          loading="lazy"
                        />
                        <div className="absolute -bottom-1 -right-1 bg-[#0A1D37] text-white p-2">
                          <svg
                            width="12"
                            height="12"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H14.017C13.4647 8 13.017 8.44772 13.017 9V15C13.017 17.7614 15.2556 20 18.017 20H19.017V21H18.017C15.8079 21 14.017 19.1921 14.017 17V21H14.017Z" />
                            <path d="M4.017 21L4.017 18C4.017 16.8954 4.91243 16 6.017 16H9.017C9.56928 16 10.017 15.5523 10.017 15V9C10.017 8.44772 9.56928 8 9.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V15C3.017 17.7614 5.25558 20 8.017 20H9.017V21H8.017C5.80787 21 4.017 19.1921 4.017 17V21H4.017Z" />
                          </svg>
                        </div>
                      </div>

                      {/* Quote */}
                      <p className="text-[#425466] mb-6 text-sm md:text-base grow">
                        "{item.quote}"
                      </p>

                      {/* Stars */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-lg ${i < item.stars ? "text-[#F15A29]" : "text-gray-200"}`}
                          >
                            ★
                          </span>
                        ))}
                      </div>

                      {/* Name and Role */}
                      <h4 className="text-[#0A2540] font-bold text-base md:text-lg mb-1">
                        {item.name}
                      </h4>
                      <p className="text-[#0A2540] text-xs md:text-sm">
                        {item.role}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="hidden md:flex justify-center gap-3 mt-10">
              {[...Array(totalPages + 1)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`transition-all duration-300 rounded-full ${currentPage === i ? "w-8 bg-blue-600" : "w-2 bg-gray-200"} h-2`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12 md:mt-16">
            <button className="px-8 py-3 md:px-10 md:py-4 bg-[#FF5A1F] text-white font-bold rounded-lg hover:scale-105 transition-transform shadow-lg shadow-orange-200 text-sm md:text-base cursor-pointer">
              Explore Verixar
            </button>
          </div>
        </div>
      </section>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        className="border-t border-[#D9D9D9] w-full md:mt-40 mt-20 origin-right max-w-360 mx-auto"
      />
    </>
  );
};

export default Testimonial;
