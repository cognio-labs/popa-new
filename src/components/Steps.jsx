import React from 'react';

function Steps() {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description: "Meet our specialists for initial assessment",
      image: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=300&h=200&fit=crop"
    },
    {
      number: "02",
      title: "Treatment Plan",
      description: "Customized plan for your needs",
      image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=300&h=200&fit=crop"
    },
    {
      number: "03",
      title: "Procedure",
      description: "Expert care during treatment",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=200&fit=crop"
    },
    {
      number: "04",
      title: "Follow-up",
      description: "Regular check-ups and maintenance",
      image: "https://images.unsplash.com/photo-1598257006626-48b0c252070d?w=300&h=200&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="luxury-heading text-4xl text-center mb-12 text-white">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="relative">
                <img src={step.image} alt={step.title} className="w-full h-48 object-cover" />
                <div className="absolute top-2 left-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold shadow-lg">
                  {step.number}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-rose-900">{step.title}</h3>
                <p className="text-pink-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Steps;