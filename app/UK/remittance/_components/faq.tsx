import React from 'react';

const Remit_Faq: React.FC = () => {
  const faqs = [
    {
      question: 'How do rates compare?',
      answer:
        'TrybeSave shows you the exchange rates and fees from different providers before you send. You see what your family receives and what you pay. No surprises.',
    },
    {
      question: 'Can I track my transfers?',
      answer:
        "Yes. Every transfer appears in your record with the date, amount, and destination. You know exactly where your money goes and how much you've sent over time.",
    },
    {
      question: 'Does this help me save?',
      answer:
        'It does. By comparing rates, you spend less on fees. By tracking what you send, you understand your commitments. This clarity helps you build savings for your own goals.',
    },
    {
      question: 'How do budgets work?',
      answer:
        'You set a monthly amount for family support. TrybeSave helps you stick to it. This way you support those who depend on you while protecting your own financial stability.',
    },
    {
      question: 'Is my data secure?',
      answer:
        'Your information is encrypted and protected. We take security seriously so you can focus on what matters—supporting family and building your future.',
    },
  ];

  return (
    <section className="bg-[#FDF5FD] py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight">
            Questions
          </h2>
          <p className="text-gray-700 text-base md:text-lg">
            Get answers about rates, tracking, and managing your remittances.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="space-y-4">
              <h3 className="text-xl font-bold text-black">{faq.question}</h3>
              <p className="text-gray-700 text-lg leading-relaxed font-medium">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Support CTA */}
        <div className="mt-24 pt-12 border-t border-gray-200 text-center space-y-8">
          <div className="space-y-4">
            <h3 className="text-4xl md:text-5xl font-bold text-black">
              Need more help?
            </h3>
            <p className="text-gray-700 text-lg md:text-xl">
              Reach out to our team anytime.
            </p>
          </div>

          <button className="bg-white border border-black text-black px-10 py-3 rounded-xl font-bold text-sm hover:bg-[#C400D9] hover:text-white transition-all duration-300">
            Contact
          </button>
        </div>
      </div>
    </section>
  );
};

export default Remit_Faq;
