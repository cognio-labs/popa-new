import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What are your office hours?",
      answer: "We are open Monday to Friday 9:00 AM - 6:00 PM and Saturday 9:00 AM - 2:00 PM."
    },
    {
      question: "Do you offer emergency dental services?",
      answer: "Yes, we provide 24/7 emergency dental services. Please call our emergency line for immediate assistance."
    },
    {
      question: "How often should I visit the dentist?",
      answer: "We recommend visiting every 6 months for regular check-ups and cleanings."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, credit cards, debit cards, and most dental insurance plans."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-100 to-rose-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="luxury-heading text-4xl text-center mb-12 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-pink-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-rose-900">{faq.question}</span>
                {openIndex === index ? <ChevronUp className="w-5 h-5 text-pink-500" /> : <ChevronDown className="w-5 h-5 text-pink-500" />}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-pink-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;