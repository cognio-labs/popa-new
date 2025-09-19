import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Experience from './components/Experience';
import BeforeAfter from './components/BeforeAfter';
import Steps from './components/Steps';
import Comparison from './components/Comparison';
import Reviews from './components/Reviews';
import Insurance from './components/Insurance';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      <Header />
      <Hero />
      <Services />
      <About />
      <Experience />
      <BeforeAfter />
      <Steps />
      <Comparison />
      <Reviews />
      <Insurance />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;