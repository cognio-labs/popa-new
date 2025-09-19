import React from 'react';
import { Star } from 'lucide-react';

function Reviews() {
  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Amazing experience! Dr. Popa and team are incredibly professional and caring."
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "Best dental clinic I've ever been to. Highly recommend!"
    },
    {
      name: "Emily Davis",
      rating: 5,
      text: "The staff is so friendly and the results exceeded my expectations."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="luxury-heading text-4xl text-center mb-12 text-white">Patient Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex mb-2">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-pink-500 fill-current" />
                ))}
              </div>
              <p className="text-pink-700 mb-4">"{review.text}"</p>
              <p className="font-bold text-rose-900">- {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;