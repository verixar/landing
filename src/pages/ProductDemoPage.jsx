import React, { useEffect, useState } from "react";
import Hero from "../components/common/Hero";
import WaitlistModal from "../components/common/WaitlistModal";

const ProductDemoPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const demoSlides = [
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      title: "Verify Insurance Status in Seconds.",
      description: "Verixar allows buyers to instantly check whether a second-hand item is currently insured by entering its serial number.",
    },
    {
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      title: "Automated Data from Insurance Providers.",
      description: "Insurance companies securely sync policy data with Verixar through automated CSV integrations.",
    },
    {
      image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      title: "Clear Results, No Guesswork.",
      description: "Buyers receive clear, easy-to-understand results — insured, not insured, or flagged.",
    },
    {
      image: "https://images.unsplash.com/photo-1556761175-129418cb2dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      title: "Insights That Prove Real Value.",
      description: "Insurance companies access dashboards showing verification volume and risk signals.",
    },
  ];

  return (
    <div className="relative">
      <Hero
        slides={demoSlides}
        welcomeText="Product Demo"
        showArrow={false}
        primaryBtn={{
          text: "Join the Waitlist",
          onClick: () => setIsModalOpen(true), 
        }}
        secondaryBtn={{
          text: "Contact Sales",
          onClick: () => console.log("Navigating to contact..."),
        }}
      />

      <WaitlistModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default ProductDemoPage;