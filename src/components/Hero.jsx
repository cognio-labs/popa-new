import React from 'react';

function Hero() {
  return (
    <section className="relative h-[500px] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="luxury-heading text-5xl md:text-7xl mb-4">Welcome to Popa Dental</h1>
        <p className="text-xl md:text-2xl mb-8 text-pink-100">Your smile is our priority</p>
        <button className="px-8 py-4 bg-gradient-to-r from-rose-400 to-pink-400 text-white font-bold rounded-md hover:from-rose-500 hover:to-pink-500 transition-all shadow-lg">
          SCHEDULE CONSULTATION
        </button>
      </div>
    </section>
  );
}

export default Hero;