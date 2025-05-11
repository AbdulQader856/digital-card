'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

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
  const [expanded, setExpanded] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

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
      desc: "Design your business cards online by selecting a template that aligns with your brand identity. Choose colors, fonts, and themes that reflect your professional style and make your digi business card unique."
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
      desc: 'Turn your digital business card into a powerful Mini Website for Business with a built-in e-commerce feature. List your services, showcase products, display prices, and even integrate secure payment options for smooth, on-the-go transactions. Maximize the functionality of your digital business card and make it a complete business solution in your pocket.',
    },
    {
      title: 'Keep Your Card Updated',
      desc: 'Regularly update your online digital visiting card with the latest contact details, achievements, or projects. Fresh content ensures your digital cards for business remain relevant and impressive.',
    },
  ];

  return (
    <section className="bg-[#F3FBFC] px-4 md:px-12 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-black mb-4">
            Expert Tips to Maximize the Impact of Your Online Digital Visiting Card
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
          Elevate your digital business card and stand out in a competitive market by following these expert strategies. Whether you're designing the best digital business card or exploring ways to make your card more engaging, these tips will ensure your card leaves a lasting impression.
          </p>
        </motion.div>

        <div className="mt-8 text-left bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Main Accordion */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-100 transition"
          >
            {expanded ? 'Hide Tips' : 'Read Expert Tips'}
            {expanded ? (
              <ChevronUpIcon className="h-5 w-5 text-gray-500" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-gray-500" />
            )}
          </button>

          {/* Animated Tips */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="divide-y divide-gray-200"
              >
                {tips.map((tip, index) => (
                  <div key={index} className="px-6 py-4">
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full flex justify-between items-center font-medium text-gray-800 text-left"
                    >
                      {index + 1}. {tip.title}
                      <ChevronDownIcon
                        className={`w-5 h-5 ml-2 transform transition-transform ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-2 text-sm text-gray-600"
                        >
                          {typeof tip.desc === 'string' ? <p>{tip.desc}</p> : tip.desc}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

