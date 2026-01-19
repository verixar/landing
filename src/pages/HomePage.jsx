import React, { useEffect, useRef } from 'react'
import Hero from '../components/sections/Hero/Hero'
import Features from '../components/sections/Features/Features'
import About from '../components/sections/About/About'
import WaitlistForm from '../components/sections/Waitlist/WaitlistForm'

const Home = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    // Ensure page starts at the top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      {/* Hero Section with proper margin */}
      <div id="home" ref={heroRef}>
        <Hero />
      </div>
      
      {/* Other sections */}
      <Features />
      <About />
      <WaitlistForm />
    </div>
  )
}

export default Home