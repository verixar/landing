import React, { useEffect, useState } from "react";
import Hero from "../components/common/Hero";
import OurStory from "../features/About/OurStory";
import WhatDrivesUs from "../features/About/WhatDrivesUs";
import CoreValues from "../features/About/CoreValues";
import MeetTheTeam from "../features/About/MeetTheTeam";
import Mission from "../features/About/Mission";
import TrustedBy from "../features/About/TrustedBy";
import WaitlistModal from "../components/common/WaitlistModal";

const AboutPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutSlides = [
    {
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      title: "Trust Where It Matters Most",
      description:
        "Verixar was built to remove uncertainty from second-hand transactions by giving buyers a fast, reliable way to verify insurance status before purchase.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522071823991-b9671f99128f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      title: "Built for Buyers and Insurers",
      description:
        "We act as a neutral verification layer—helping buyers avoid risky purchases while enabling insurers to reduce fraud and misuse of policies.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1556761175-129418cb2dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      title: "Designed to Scale Securely",
      description:
        "Verixar handles high volumes of verification requests with speed, security, and reliability—built to grow across markets and regions.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      title: "The Future of Insurance Verification",
      description:
        "By working directly with insurers, we provide real-time policy status that creates a safer, more transparent resale ecosystem.",
    },
  ];

  return (
    <div className="relative">
      <Hero
        slides={aboutSlides}
        welcomeText="About Verixar"
        showArrow={false}
        primaryBtn={{
          text: "Join the Waitlist",
          onClick: () => setIsModalOpen(true),
        }}
        secondaryBtn={{
          text: "Explore Our Services",
          onClick: () => {
            window.location.href = "/services";
          },
        }}
      />

      <OurStory />
      <WhatDrivesUs />
      <CoreValues />
      <Mission />
      <MeetTheTeam />
      <TrustedBy />

      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default AboutPage;
