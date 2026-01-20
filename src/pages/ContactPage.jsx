import React, { useEffect } from "react";
import Hero from "../components/common/Hero";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactSlides = [
    {
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      title: "Get in Touch with Verixar.",
      description:
        "Whether you’re an insurance company looking to reduce fraud or a partner interested in working with us, we’d love to hear from you.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1556761175-129418cb2dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      title: "Built for Serious Conversations.",
      description:
        "Verixar is designed for real-world use cases. Reach out to discuss integrations, partnerships, or early access to the platform.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      title: "Support You Can Trust.",
      description:
        "Our team is committed to transparency, security, and long-term collaboration with insurers and partners worldwide.",
    },
  ];

  return (
    <div className="relative">
      <Hero
        slides={contactSlides}
        welcomeText="Contact Us"
        showArrow={false}
        primaryBtn={{
          text: "Join the Waitlist",
          onClick: () => {
            const element = document.getElementById("waitlist-section");
            element?.scrollIntoView({ behavior: "smooth" });
          },
        }}
        secondaryBtn={{
          text: "Email Us",
          onClick: () => {
            window.location.href = "mailto:hello@verixar.com";
          },
        }}
      />
    </div>
  );
};

export default ContactPage;
