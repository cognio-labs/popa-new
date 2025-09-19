import React from 'react';

function Header() {
  const handleBookNowClick = () => {
    window.open('https://api.leadconnectorhq.com/widget/bookings/cognio-labs', '_blank');
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img 
              src="https://growth-99-graph-production.up.railway.app/uploads/logos/logo_9f19cd1c17314981b0808f1dc6579197.png" 
              alt="Popa Dental Logo"
              className="h-12 w-auto object-contain uploaded-logo"
            />
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-rose-900 hover:text-pink-500 transition-colors">Services</a>
            <a href="#about" className="text-rose-900 hover:text-pink-500 transition-colors">About</a>
            <a href="#contact" className="text-rose-900 hover:text-pink-500 transition-colors">Contact</a>
          </div>
          <div className="flex space-x-4">
            <button 
              onClick={handleBookNowClick}
              className="px-4 py-2 border border-pink-500 text-pink-500 rounded-md hover:bg-pink-500 hover:text-white transition-colors"
            >
              BOOK NOW
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-md hover:from-pink-600 hover:to-rose-600 transition-all">
              CALL US
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;