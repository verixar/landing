import React, { useEffect } from "react";
import Hero from "../components/common/Hero";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutSlides = [
    {
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      title: "Redefining Trust in Second-Hand Markets.",
      description:
        "Verixar was created to solve a growing problem in the resale economy — uncertainty. We help buyers verify insurance status instantly, reducing risk and building confidence before purchase.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522071823991-b9671f99128f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      title: "Protecting Buyers. Empowering Insurers.",
      description:
        "Our platform acts as a neutral verification layer, protecting buyers from risky purchases while helping insurers prevent fraudulent claims on items that have already changed ownership.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1556761175-129418cb2dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      title: "Built for Scale and Reliability.",
      description:
        "Verixar is designed to process large volumes of verification requests securely, ensuring fast and reliable results even as usage grows across markets and insurers.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      title: "A Smarter Future for Insurance Verification.",
      description:
        "By partnering with forward-thinking insurance companies, we enable real-time access to policy status, helping create a safer, more transparent resale ecosystem.",
    },
  ];

  return (
    <div className="relative">
      <Hero
        slides={aboutSlides}
        welcomeText="About Verixar"
        showArrow={false} // Hidden for a cleaner internal page look
        primaryBtn={{
          text: "Learn More",
          onClick: () => console.log("Navigating to contact..."),
        }}
        secondaryBtn={{
          text: "Explore Our Services",
          onClick: () => {
            const element = document.getElementById("services-section");
            element?.scrollIntoView({ behavior: "smooth" });
          },
        }}
      />
    </div>
  );
};

export default AboutPage;
