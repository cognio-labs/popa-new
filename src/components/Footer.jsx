import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-rose-900 to-pink-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img 
              src="https://growth-99-graph-production.up.railway.app/uploads/logos/logo_9f19cd1c17314981b0808f1dc6579197.png" 
              alt="Popa Dental Logo"
              className="h-10 w-auto object-contain uploaded-logo mb-4"
            />
            <p className="text-pink-200">Your trusted dental care provider</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase">Services</h4>
            <ul className="space-y-2 text-pink-200">
              <li>Teeth Whitening</li>
              <li>Dental Implants</li>
              <li>Root Canal</li>
              <li>Cosmetic Dentistry</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase">Contact</h4>
            <div className="space-y-2 text-pink-200">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>123 Dental Street, City, State 12345</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@popadental.com</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase">Hours</h4>
            <div className="space-y-2 text-pink-200">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>Mon-Fri: 9AM-6PM</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>Sat: 9AM-2PM</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>Sun: Closed</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-pink-700 mt-8 pt-8 text-center text-pink-200">
          <p>&copy; 2024 Popa Dental. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;