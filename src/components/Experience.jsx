import React from 'react';
import { Award, Clock, Users, Heart, Shield, Smile } from 'lucide-react';

function Experience() {
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Expert Excellence",
      description: "Our board-certified specialists bring over a decade of advanced training and clinical expertise to every procedure, ensuring world-class dental care.",
      highlight: "10+ Years Experience"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Scheduling",
      description: "We understand busy lifestyles. Enjoy extended hours, weekend appointments, and emergency dental care when you need it most.",
      highlight: "Convenient Hours"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Family-Centered Care",
      description: "From toddlers to grandparents, we create personalized treatment plans for every family member in a warm, welcoming environment.",
      highlight: "All Ages Welcome"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Compassionate Approach",
      description: "Experience gentle, anxiety-reducing techniques and a caring team that prioritizes your comfort and emotional well-being.",
      highlight: "Patient-First Care"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Advanced Technology",
      description: "State-of-the-art equipment including digital imaging, laser dentistry, and 3D scanning for precise, minimally invasive treatments.",
      highlight: "Cutting-Edge Tech"
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: "Lasting Results",
      description: "Our comprehensive approach ensures not just immediate improvements, but long-term oral health and beautiful, confident smiles.",
      highlight: "Guaranteed Results"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="luxury-heading text-5xl mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Why Choose Popa Dental
          </h2>
          <p className="text-xl text-rose-700 max-w-3xl mx-auto leading-relaxed">
            Discover the difference that personalized, expert dental care can make. We're committed to transforming smiles and lives through exceptional dentistry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-100"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-2xl mb-6 shadow-lg">
                {feature.icon}
              </div>
              
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700 text-sm font-semibold rounded-full mb-3">
                  {feature.highlight}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-rose-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-rose-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Experience Excellence?</h3>
            <p className="text-xl mb-6 text-pink-100">
              Join thousands of satisfied patients who've discovered their best smile with Popa Dental
            </p>
            <button className="px-8 py-4 bg-white text-rose-900 font-bold rounded-lg hover:bg-pink-50 transition-colors shadow-lg">
              Schedule Your Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;