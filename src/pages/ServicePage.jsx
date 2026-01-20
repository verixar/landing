import React, { useEffect } from "react";
import Hero from "../components/common/Hero";

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const servicesSlides = [
    {
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      title: "Instant Insurance Verification for Buyers.",
      description:
        "Verixar allows buyers to instantly verify whether a second-hand item is currently insured before making a purchase, reducing risk and increasing confidence.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      title: "Fraud Prevention for Insurance Companies.",
      description:
        "We help insurers prevent fraudulent claims on sold or transferred items by ensuring policy statuses are always up to date and verifiable.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      title: "Automated Data Synchronization.",
      description:
        "Insurance companies securely sync policy data with Verixar using automated CSV-based integrations, ensuring accurate verification without manual work.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      title: "Insightful Dashboards & Reporting.",
      description:
        "Insurers gain access to dashboards showing usage metrics, verification volume, and estimated fraud prevented, helping demonstrate real business value.",
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
          onClick: () => {
            const element = document.getElementById("waitlist-section");
            element?.scrollIntoView({ behavior: "smooth" });
          },
        }}
        secondaryBtn={{
          text: "Contact Us",
          onClick: () => console.log("Navigating to contact..."),
        }}
      />
    </div>
  );
};

export default ServicesPage;
