import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import FeaturedWork from './sections/FeaturedWork';
import PortfolioGrid from './sections/PortfolioGrid';
import Showreel from './sections/Showreel';
import Clients from './sections/Clients'; // Brands Worked With
import Process from './sections/Process';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-accent selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <FeaturedWork />
        <PortfolioGrid />
        <Showreel />
        <Clients />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
