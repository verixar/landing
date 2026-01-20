import React, { useEffect, useRef } from 'react'
import Hero from '../features/Home/Hero'
import Features from '../features/Home/Features'
import About from '../features/Home/About'
import WaitlistForm from '../features/Home/WaitlistForm'
import Mission from '../features/Home/Mission'

const Home = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
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