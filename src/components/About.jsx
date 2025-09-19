import React from 'react';
import { Heart, Award, Users, Shield, Star, MapPin, Phone, Mail } from 'lucide-react';

function About() {
  const team = [
    {
      name: "Dr. Elena Popa",
      title: "Lead Dentist & Founder",
      credentials: "DDS, MS - Cosmetic Dentistry",
      experience: "15+ Years Experience",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop",
      bio: "Dr. Popa founded our practice with a vision to provide exceptional dental care that transforms lives. With advanced training in cosmetic dentistry and a passion for patient care, she leads our team with expertise and compassion."
    },
    {
      name: "Dr. Michael Rodriguez",
      title: "Orthodontic Specialist",
      credentials: "DMD, MS - Orthodontics",
      experience: "12+ Years Experience",
      image: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=300&h=300&fit=crop",
      bio: "Specializing in orthodontic treatments, Dr. Rodriguez brings precision and artistry to every smile transformation. His commitment to continuing education ensures our patients receive the latest in orthodontic care."
    },
    {
      name: "Dr. Sarah Chen",
      title: "Pediatric Dentist",
      credentials: "DDS - Pediatric Dentistry",
      experience: "10+ Years Experience",
      image: "https://images.unsplash.com/photo-1598257006626-48b0c252070d?w=300&h=300&fit=crop",
      bio: "Creating positive dental experiences for children is Dr. Chen's passion. Her gentle approach and expertise in pediatric dentistry help establish lifelong healthy dental habits for our youngest patients."
    }
  ];

  const certifications = [
    "American Dental Association (ADA)",
    "Academy of General Dentistry (AGD)",
    "American Academy of Cosmetic Dentistry (AACD)",
    "International Congress of Oral Implantologists (ICOI)",
    "American Board of Orthodontics (ABO)"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Practice Story Section */}
        <div className="text-center mb-16">
          <h2 className="luxury-heading text-5xl mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Our Story
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-rose-700 leading-relaxed mb-6">
              Founded in 2010, Popa Dental began with a simple yet powerful vision: to create a dental practice where cutting-edge technology meets compassionate care, and where every patient feels like family.
            </p>
            <p className="text-lg text-rose-600 leading-relaxed">
              What started as a small practice has grown into a state-of-the-art facility serving thousands of patients across the region. Our commitment to excellence, continuous education, and patient-first approach has made us a trusted name in dental care. We believe that everyone deserves a healthy, beautiful smile, and we're dedicated to making that vision a reality for every patient who walks through our doors.
            </p>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="flex items-center mb-4">
              <Heart className="w-8 h-8 text-pink-500 mr-3" />
              <h3 className="text-3xl font-bold text-rose-900">Our Mission</h3>
            </div>
            <p className="text-rose-700 leading-relaxed">
              To provide exceptional dental care that transforms lives through personalized treatment, advanced technology, and compassionate service. We are committed to creating healthy, beautiful smiles while ensuring every patient feels valued, heard, and cared for.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="flex items-center mb-4">
              <Star className="w-8 h-8 text-pink-500 mr-3" />
              <h3 className="text-3xl font-bold text-rose-900">Our Vision</h3>
            </div>
            <p className="text-rose-700 leading-relaxed">
              To be the leading dental practice recognized for excellence in patient care, innovation, and community service. We envision a world where everyone has access to quality dental care and the confidence that comes with a healthy, beautiful smile.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h3 className="luxury-heading text-4xl text-center mb-12 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Meet Our Team
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {member.experience}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-bold text-rose-900 mb-1">{member.name}</h4>
                  <p className="text-pink-600 font-semibold mb-2">{member.title}</p>
                  <p className="text-sm text-rose-700 mb-3">{member.credentials}</p>
                  <p className="text-rose-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Credentials Section */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="luxury-heading text-3xl text-center mb-8 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Our Credentials & Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-bold text-rose-900 mb-4 flex items-center">
                <Award className="w-6 h-6 text-pink-500 mr-2" />
                Professional Affiliations
              </h4>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center text-rose-700">
                    <Shield className="w-4 h-4 text-pink-500 mr-2 flex-shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-rose-900 mb-4 flex items-center">
                <Users className="w-6 h-6 text-pink-500 mr-2" />
                Practice Highlights
              </h4>
              <ul className="space-y-2 text-rose-700">
                <li className="flex items-center">
                  <Shield className="w-4 h-4 text-pink-500 mr-2 flex-shrink-0" />
                  5,000+ Happy Patients Served
                </li>
                <li className="flex items-center">
                  <Shield className="w-4 h-4 text-pink-500 mr-2 flex-shrink-0" />
                  15+ Years of Excellence
                </li>
                <li className="flex items-center">
                  <Shield className="w-4 h-4 text-pink-500 mr-2 flex-shrink-0" />
                  State-of-the-Art Facility
                </li>
                <li className="flex items-center">
                  <Shield className="w-4 h-4 text-pink-500 mr-2 flex-shrink-0" />
                  Emergency Care Available
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Experience Excellence?</h3>
            <p className="text-xl mb-6 text-pink-100">
              Join thousands of satisfied patients who've discovered their best smile with Popa Dental
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-white text-rose-900 font-bold rounded-lg hover:bg-pink-100 transition-colors shadow-lg">
                Schedule Consultation
              </button>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-1" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-1" />
                  <span>info@popadental.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;