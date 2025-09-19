import React from 'react';

function BeforeAfter() {
  return (
    <section className="py-20 bg-gradient-to-br from-rose-100 to-pink-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="luxury-heading text-4xl text-center mb-12 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Transformations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
            <div className="grid grid-cols-2">
              <div className="p-4">
                <h3 className="text-center font-bold mb-2 text-rose-900">Before</h3>
                <img src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=200&h=200&fit=crop" alt="Before" className="w-full h-48 object-cover rounded" />
              </div>
              <div className="p-4">
                <h3 className="text-center font-bold mb-2 text-rose-900">After</h3>
                <img src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=200&h=200&fit=crop" alt="After" className="w-full h-48 object-cover rounded" />
              </div>
            </div>
            <div className="p-4">
              <p className="text-center text-pink-700">Teeth Whitening Treatment</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
            <div className="grid grid-cols-2">
              <div className="p-4">
                <h3 className="text-center font-bold mb-2 text-rose-900">Before</h3>
                <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop" alt="Before" className="w-full h-48 object-cover rounded" />
              </div>
              <div className="p-4">
                <h3 className="text-center font-bold mb-2 text-rose-900">After</h3>
                <img src="https://images.unsplash.com/photo-1598257006626-48b0c252070d?w=200&h=200&fit=crop" alt="After" className="w-full h-48 object-cover rounded" />
              </div>
            </div>
            <div className="p-4">
              <p className="text-center text-pink-700">Dental Implant Procedure</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeforeAfter;