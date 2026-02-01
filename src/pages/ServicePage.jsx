import React, { useEffect, useState } from "react";
import Hero from "../components/common/Hero";
import WaitlistModal from "../components/common/WaitlistModal";
import VerificationSolutions from "../features/Service/VerificationSolution";
import ShopWithConfidence from "../features/Service/ShopWithConfidence";
import HowItWorks from "../features/Service/HowItWorks";
import ReadyToStart from "../features/Service/ReadyToStart";
import CallToAction from "../features/Service/CallToAction";

const ServicesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const servicesSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    title: "Instant Insurance Verification for Buyers",
    description:
      "Buyers can instantly confirm whether a second-hand asset is actively insured before purchase, eliminating uncertainty and reducing transactional risk.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    title: "Fraud Prevention for Insurers",
    description:
      "Verixar helps insurance providers prevent fraudulent claims by ensuring policy status is always current, verifiable, and tied to the correct asset owner.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    title: "Automated Policy Data Synchronization",
    description:
      "Insurers securely synchronize policy data with Verixar through automated integrations, maintaining accurate verification without manual intervention.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    title: "Operational Insights & Reporting",
    description:
      "Comprehensive dashboards provide visibility into verification activity, usage trends, and estimated fraud reduction—turning data into measurable value.",
  },
];


  return (
    <div className="relative">
      <Hero
        slides={servicesSlides}
        welcomeText="Our Services"
        showArrow={false}
        primaryBtn={{
          text: "Join the Waitlist",
          onClick: () => setIsModalOpen(true),
        }}
        secondaryBtn={{
          text: "Contact Us",
          onClick: () => console.log("Navigating to contact..."),
        }}
      />

      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <VerificationSolutions />
      <ShopWithConfidence />
      <HowItWorks />
      <ReadyToStart />
      <CallToAction />
    </div>
  );
};

export default ServicesPage;
