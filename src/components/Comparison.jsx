import React from 'react';

function Comparison() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="luxury-heading text-4xl text-center mb-12 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Traditional vs Modern</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-rose-900">Traditional Dentistry</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-pink-700">
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                Longer treatment times
              </li>
              <li className="flex items-center text-pink-700">
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                Metal braces visible
              </li>
              <li className="flex items-center text-pink-700">
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                Frequent office visits
              </li>
              <li className="flex items-center text-pink-700">
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                Higher costs
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg p-6 text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Modern Approach</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Faster results
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Invisible aligners
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Fewer appointments
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Affordable pricing
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Comparison;