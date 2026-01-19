import React, { useEffect, useRef } from 'react'
import Hero from '../components/Home/sections/Hero'
import Features from '../components/Home/sections/Features'
import About from '../components/Home/sections/About'
import WaitlistForm from '../components/Home/sections/WaitlistForm'
import Mission from '../components/Home/sections/Mission'

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

      
      <Features />
      <About />
      <Mission />
      <WaitlistForm />
    </div>
  )
}

export default Home