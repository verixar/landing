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
      title: "Redefining Trust in Second-Hand Markets.",
      description:
        "Verixar was created to solve a growing problem in the resale economy — uncertainty. We help buyers verify insurance status instantly.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522071823991-b9671f99128f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      title: "Protecting Buyers. Empowering Insurers.",
      description:
        "Our platform acts as a neutral verification layer, protecting buyers from risky purchases while helping insurers prevent fraudulent claims.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1556761175-129418cb2dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      title: "Built for Scale and Reliability.",
      description:
        "Verixar is designed to process large volumes of verification requests securely, ensuring fast and reliable results globally.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      title: "A Smarter Future for Insurance Verification.",
      description:
        "By partnering with forward-thinking insurance companies, we enable real-time access to policy status for a safer ecosystem.",
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
