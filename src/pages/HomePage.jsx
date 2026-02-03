import React, { useEffect, useRef, useState } from "react";
import Hero from "../components/common/Hero";
import Features from "../features/Home/Features";
import About from "../features/Home/About";
import WhyChoose from "../features/Home/WhyChoose";
import Mission from "../features/Home/Mission";
import Challenge from "../features/Home/Challenge";
import Solution from "../features/Home/Solution";
import PathSelection from "../features/Home/PathSelection";
import Testimonial from "../features/Home/Testimonial";
import ReadyToVerify from "../features/Home/ReadyToVerify";
import FAQ from "../features/Home/FAQ";
import WhatIsVerixar from "../features/Home/WhatIsVerixar";
import WaitlistModal from "../components/common/WaitlistModal";

const Home = () => {
  const heroRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const homeSlides = [
    {
      image: "/hero/designers.avif",
      title: "Redefining Trust in Global Commerce.",
      description:
        "Verixar is building a trusted layer for instant insurance verification, giving buyers and sellers clarity before high-value transactions happen.",
    },
    {
      image: "/hero/happy-workers.avif",
      title: "Know the Status Before You Buy.",
      description:
        "Check whether an asset is insured, active, or cancelled in seconds — using a simple serial number lookup.",
    },
    {
      image: "/hero/technician.avif",
      title: "One Platform. Real-Time Certainty.",
      description:
        "We connect directly with insurers to provide accurate, up-to-date policy information without manual checks or delays.",
    },
    {
      image: "/hero/global-network.avif",
      title: "Built for Scale, Security, and Speed.",
      description:
        "Verixar is designed to support global transactions securely, helping reduce fraud while protecting both buyers and insurers.",
    },
  ];

  const openModal = () => setIsModalOpen(true);

  return (
    <div className="relative">
      <div id="home" ref={heroRef}>
        <Hero
          slides={homeSlides}
          welcomeText="Welcome to Verixar"
          showArrow={true}
          primaryBtn={{
            text: "Join the Waitlist",
            onClick: openModal,
          }}
          secondaryBtn={{
            text: "Request Demo",
            // onClick: handleDemoRequest,
          }}
        />
      </div>

      <Features />
      <About />
      <Mission />
      {/* <Challenge /> */}
      <Solution />
      <WhatIsVerixar />
      <WhyChoose />
      <PathSelection />
      {/* <Testimonial /> */}
      {/* <ReadyToVerify /> */}

      <FAQ />

      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Home;
