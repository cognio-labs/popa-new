import React from 'react';

function Services() {
  const services = [
    {
      title: "Teeth Whitening",
      description: "Professional whitening for a brighter smile",
      image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=300&h=300&fit=crop"
    },
    {
      title: "Dental Implants",
      description: "Permanent solution for missing teeth",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop"
    },
    {
      title: "Root Canal",
      description: "Pain-free root canal treatments",
      image: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=300&h=300&fit=crop"
    },
    {
      title: "Cosmetic Dentistry",
      description: "Transform your smile with cosmetic procedures",
      image: "https://images.unsplash.com/photo-1598257006626-48b0c252070d?w=300&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-100 to-rose-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="luxury-heading text-4xl text-center mb-12 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-rose-900">{service.title}</h3>
                <p className="text-pink-700 mb-4">{service.description}</p>
                <button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-2 rounded-md hover:from-pink-600 hover:to-rose-600 transition-all">
                  LEARN MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;