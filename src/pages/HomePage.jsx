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
// Import the new Modal component
import WaitlistModal from "../components/common/WaitlistModal"; 

const Home = () => {
  const heroRef = useRef(null);
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const homeSlides = [
    {
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      title: "Redefining Trust in Global Commerce.",
      description: "At Verixar, we believe that transparency shouldn't be a luxury. We are building the world's most reliable infrastructure for instant insurance verification.",
    },
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      title: "Seamless Verification for All Assets.",
      description: "From luxury vehicles to industrial equipment, our platform provides instant certainty for every high-value transaction.",
    }
  ];

  // Helper functions for actions
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
            onClick: openModal, // Trigger modal
          }}
          secondaryBtn={{
            text: "Request Demo",
            // onClick: handleDemoRequest,
          }}
        />
      </div>

      {/* 2. Main Content Sections */}
      <Features />
      <About />
      <Mission />
      <Challenge />
      <Solution />
      <WhatIsVerixar />
      <WhyChoose />
      <PathSelection />
      <Testimonial />
      <ReadyToVerify /> 
      
      <FAQ />

      <WaitlistModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      
    </div>
  );
};

export default Home;