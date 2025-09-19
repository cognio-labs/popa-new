import React, { useState } from 'react';

function Insurance() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-r from-pink-500 to-rose-500">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="luxury-heading text-4xl mb-6 text-white">Insurance Accepted</h2>
        <p className="text-xl text-pink-100 mb-8">
          We accept most major insurance plans. Contact us to verify your coverage.
        </p>
        <button 
          onClick={() => setShowPopup(true)}
          className="px-8 py-4 bg-white text-rose-900 font-bold rounded-md hover:bg-pink-100 transition-colors shadow-lg"
        >
          CHECK COVERAGE
        </button>
      </div>

      {showPopup && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setShowPopup(false)}
        >
          <div 
            className="bg-white rounded-lg p-8 shadow-2xl max-w-sm mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-rose-900">Coverage Check</h3>
              <button 
                onClick={() => setShowPopup(false)}
                className="text-rose-500 hover:text-rose-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <p className="text-pink-700 text-center text-lg">wassup bromie</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Insurance;