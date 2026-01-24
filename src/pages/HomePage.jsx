import React, { useEffect, useRef } from "react";
import Hero from "../components/common/Hero";
import Features from "../features/Home/Features";
import About from "../features/Home/About";
import WaitlistForm from "../features/Home/WaitlistForm";
import Mission from "../features/Home/Mission";
import Challenge from "../features/Home/Challenge";
import Solution from "../features/Home/Solution";
import WhyChoose from "../features/Home/WHyChoose";
import PathSelection from "../features/Home/PathSelection";

const Home = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Content specific to the Homepage
  const homeSlides = [
    {
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      title: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      title: "Sed do eiusmod tempor incididunt ut labore et dolore.",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      title: "Quis autem vel eum iure reprehenderit qui in ea voluptate.",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      title: "At vero eos et accusamus et iusto odio dignissimos.",
      description:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda.",
    },
  ];

  // Function to handle scroll for the "Join" button if needed
  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div id="home" ref={heroRef}>
        <Hero
          slides={homeSlides}
          welcomeText="Welcome to Verixar"
          showArrow={true}
          primaryBtn={{
            text: "Join the Waitlist",
            onClick: scrollToWaitlist,
          }}
          secondaryBtn={{
            text: "Request Demo",
            onClick: () => console.log("Demo requested"),
          }}
        />
      </div>

      <Features />
      <About />
      <Mission />
      <Challenge />
      <Solution />
      <WhyChoose />
      <PathSelection />
    </div>
  );
};

export default Home;
