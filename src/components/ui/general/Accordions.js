'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function FAQAccordion({ faqs }) {
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

export function TipsAccordion() {
  const tips = [
    {
      title: 'Add a Professional Photo',
      desc: 'A professional, high-quality photo on your online digital visiting card adds a personal touch and helps others remember you. Choose an image with a friendly smile to create a strong and lasting impact.',
    },
    {
      title: 'Use Short, Compelling Text',
      desc: 'For your digital biz card, concise and impactful text is key. Highlight your services, achievements, or offerings in a few words to quickly grab attention.',
    },
    {
      title: 'Showcase Your Recent Projects',
      desc: 'Feature links to recent projects, testimonials, or portfolio highlights. This enhances the credibility of your card and builds trust with potential clients or collaborators.',
    },
    {
      title: 'Optimize for Easy Sharing',
      desc: 'Simplify sharing your online visiting card by using a QR code or an easy-to-remember link. Share it effortlessly on WhatsApp, email, or social media for maximum reach.',
    },
    {
      title: 'Customize Your Design',
      desc: <p>Design your business cards online by selecting a template that aligns with your brand identity. Choose colors, fonts, and themes that reflect your professional style and make your digi business card unique. <br/> Pro Tip: Check out our guide on <a href='#'>How to Design Digital Business Cards In 4 Easy Steps</a></p>
    },
    {
      title: 'Leverage Analytics',
      desc: 'Use built-in analytics on your digital cards for business to track views, clicks, and inquiries. This data helps you understand what works and improve engagement on your digibcard.',
    },
    {
      title: 'Add Call-to-Action Buttons',
      desc: 'Boost interaction by including buttons like “Call Now,” “Book a Meeting,” or “Visit My Website.” These features on your best digital business card make it easy for viewers to take the next step.',
    },
    {
      title: 'Include Social Media Links',
      desc: 'Add clickable icons for your social media profiles to your digital visiting card. This drives traffic to your platforms and enhances your online presence.',
    },
    {
      title: 'Highlight Your Services and Products',
      desc: 'With the mini e-commerce feature on your digi business card, you can list services, products, and prices. Integrate payment options for seamless transactions and maximize the functionality of your digital business card.',
    },
    {
      title: 'Keep Your Card Updated',
      desc: 'Regularly update your online digital visiting card with the latest contact details, achievements, or projects. Fresh content ensures your digital cards for business remain relevant and impressive.',
    },
  ];
  
  const [showAll, setShowAll] = useState(false);

  const visibleTips = showAll ? tips : tips.slice(0, 4);
  const half = Math.ceil(visibleTips.length / 2);
  const leftColumn = visibleTips.slice(0, half);
  const rightColumn = visibleTips.slice(half);

  return(
    <section className="bg-[#F3FBFC] px-4 md:px-12 py-10">
      <div className="max-w-4xl mx-auto text-start">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
          Expert Tips to Maximize the Impact of Your Online Digital Visiting Card
        </h2>
        <p className="text-gray-800 mb-10">
          Elevate your digital business card and stand out in a competitive market by following these expert strategies. Whether you're designing the best digital business card or exploring ways to make your card more engaging, these tips will ensure your card leaves a lasting impression.
        </p>
      </div>

      {/* 2 Column Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-4">
          {leftColumn.map((tip, index) => (
            <details key={index} className="bg-white rounded-lg shadow p-2">
              <summary className="font-semibold cursor-pointer text-lg text-black">
                {index + 1}. {tip.title}
              </summary>
              <p className="text-sm mt-2 text-gray-700">{tip.desc}</p>
            </details>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {rightColumn.map((tip, index) => (
            <details key={index + half} className="bg-white rounded-lg shadow p-2">
              <summary className="font-semibold cursor-pointer text-lg text-black">
                {index + 1 + half}. {tip.title}
              </summary>
              <p className="text-sm mt-2 text-gray-700">{tip.desc}</p>
            </details>
          ))}
        </div>
      </div>

      {/* Toggle Button */}
      <div className="text-center mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-sm text-white bg-orange-600 hover:bg-orange-700 px-5 py-2 rounded-full transition duration-300"
        >
          {showAll ? 'Show Less' : 'Show More Tips'}
        </button>
      </div>
    </section>
  );
}
