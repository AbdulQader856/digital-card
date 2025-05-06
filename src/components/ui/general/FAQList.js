'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function FAQList({ faqs }) {
  const [openLeft, setOpenLeft] = useState(null);
  const [openRight, setOpenRight] = useState(null);

  const mid = Math.ceil(faqs.length / 2);
  const leftColumn = faqs.slice(0, mid);
  const rightColumn = faqs.slice(mid);

  const renderFAQ = (faqList, openIndex, setOpenIndex) =>
    faqList.map((faq, index) => (
      <div key={index} className="mb-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex justify-between items-center w-full text-left text-sm font-semibold text-gray-900"
          >
            {faq.question}
            <ChevronDownIcon
              className={`h-5 w-5 transform transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="mt-3 text-gray-700 text-sm text-left">
              {faq.answer}
            </div>
          )}
        </div>
      </div>
    ));
   return(
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          {renderFAQ(leftColumn, openLeft, setOpenLeft)}
        </div>
        <div className="w-full md:w-1/2">
          {renderFAQ(rightColumn, openRight, setOpenRight)}
        </div>
      </div>
    </div>
   );
}
