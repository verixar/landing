import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

const teamMembers = [
  {
    name: "Kazeem",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000",
    bio: "Leads Verixar’s vision and strategy, focused on building trusted infrastructure that enables secure, transparent insurance verification at scale.",
    socials: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Bozoma Duku",
    role: "UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000",
    bio: "Designs intuitive, user-focused experiences that simplify complex verification workflows for buyers and insurance partners.",
    socials: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Basit",
    role: "Frontend Engineer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000",
    bio: "Builds Verixar’s web interfaces with a focus on performance, accessibility, and clean, scalable frontend architecture.",
    socials: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Ridwan",
    role: "Backend Engineer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000",
    bio: "Develops Verixar’s core backend systems, ensuring secure data ingestion, reliable processing, and scalable API infrastructure.",
    socials: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" },
  },
];

const MeetTheTeam = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const socialIcons = [
    { Icon: FiFacebook, key: "facebook" },
    { Icon: FiTwitter, key: "twitter" },
    { Icon: FiInstagram, key: "instagram" },
    { Icon: FiLinkedin, key: "linkedin" },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1.5px] w-12 md:w-24 bg-gray-300" />
            <h2 className="text-[#0A1D37] text-3xl md:text-5xl font-bold tracking-tight px-4">
              Meet the Team
            </h2>
            <div className="h-[1.5px] w-12 md:w-24 bg-gray-300" />
          </div>
          <p className="text-gray-500 max-w-2xl mx-auto text-base">
            Our diverse team brings together expertise in insurance, technology,
            and customer experience to deliver the best verification platform.
          </p>
        </div>

        <div
          className="
          flex md:grid md:grid-cols-4 
          overflow-x-auto md:overflow-visible 
          snap-x snap-mandatory scrollbar-hide
          -mx-6 px-6 gap-6 pb-10 md:pb-0
        "
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="
                relative shrink-0 w-[85vw] md:w-full snap-center
                flex flex-col items-center group cursor-default
              "
            >
              <div className="relative z-20 -mb-20">
                <div className="w-44 h-44 md:w-52 md:h-52 rounded-full border-[6px] border-white overflow-hidden shadow-xl bg-gray-100 transition-transform duration-500 group-hover:scale-105">
                  <img
                    src={member.image}
                    alt={member.name}
                    // Grayscale to color on hover(might remove later)
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>

              {/* Card Body */}
              <div
                className={`
                w-full pt-28 pb-10 px-8 rounded-sm transition-all duration-500 
                border border-gray-50 flex flex-col items-center text-center grow
                ${hoveredIndex === index ? "bg-[#2A337E] shadow-2xl -translate-y-2.5" : "bg-white shadow-sm"}
              `}
              >
                <h3
                  className={`text-2xl font-bold mb-1 transition-colors duration-500
                  ${hoveredIndex === index ? "text-white" : "text-[#0A1D37]"}`}
                >
                  {member.name}
                </h3>

                <p
                  className={`text-xs font-bold tracking-widest mb-6 transition-colors duration-500 uppercase
                  ${hoveredIndex === index ? "text-blue-200" : "text-[#2E3192]"}`}
                >
                  {member.role}
                </p>

                <div className="flex justify-center gap-3 mb-8">
                  {socialIcons.map(({ Icon, key }, i) => (
                    <a
                      key={i}
                      href={member.socials[key]}
                      className={`p-2.5 rounded-full transition-all duration-300
                        ${
                          hoveredIndex === index
                            ? "bg-white/10 text-white hover:bg-white hover:text-[#2A337E]"
                            : "bg-gray-100 text-[#2A337E] hover:bg-[#2A337E] hover:text-white"
                        }`}
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>

                <p
                  className={`text-sm leading-relaxed transition-colors duration-500
                  ${hoveredIndex === index ? "text-gray-200" : "text-[#8C8C8C]"}`}
                >
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Swipe Hint */}
        <div className="flex md:hidden justify-center items-center gap-2 mt-4 text-gray-400">
          <span className="text-xs uppercase tracking-widest animate-pulse">
            Swipe to see team
          </span>
          <div className="h-px w-12 bg-gray-200" />
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
