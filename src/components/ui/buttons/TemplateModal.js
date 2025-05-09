'use client';
import { useState } from 'react';
import Image from 'next/image';

const templates = [
  { id: 1, src: '/images/template/vcard1.png', alt: 'Template 1' },
  { id: 2, src: '/images/template/vcard2.png', alt: 'Template 2' },
  { id: 3, src: '/images/template/vcard3.png', alt: 'Template 3' },
  { id: 4, src: '/images/template/vcard4.png', alt: 'Template 4' },
  { id: 5, src: '/images/template/vcard5.png', alt: 'Template 5' },
  { id: 6, src: '/images/template/vcard6.png', alt: 'Template 6' },
  { id: 7, src: '/images/template/vcard7.png', alt: 'Template 7' },
  { id: 8, src: '/images/template/vcard8.png', alt: 'Template 8' },
  { id: 9, src: '/images/template/vcard9.png', alt: 'Template 9' },
  { id: 10, src: '/images/template/vcard10.png', alt: 'Template 10' },
  { id: 1, src: '/images/template/vcard11.png', alt: 'Template 11' },
  { id: 2, src: '/images/template/vcard12.png', alt: 'Template 12' },
  { id: 3, src: '/images/template/vcard13.png', alt: 'Template 13' },
  { id: 4, src: '/images/template/vcard14.png', alt: 'Template 14' },
  { id: 5, src: '/images/template/vcard15.png', alt: 'Template 15' },
  { id: 6, src: '/images/template/vcard16.png', alt: 'Template 16' },
  { id: 7, src: '/images/template/vcard17.png', alt: 'Template 17' },
  { id: 8, src: '/images/template/vcard18.png', alt: 'Template 18' },
  { id: 9, src: '/images/template/vcard19.png', alt: 'Template 19' },
  { id: 10, src: '/images/template/vcard20.png', alt: 'Template 20' },
  { id: 1, src: '/images/template/vcard21.png', alt: 'Template 21' },
  { id: 2, src: '/images/template/vcard22.png', alt: 'Template 22' },
  { id: 3, src: '/images/template/vcard23.png', alt: 'Template 23' },
  { id: 4, src: '/images/template/vcard24.png', alt: 'Template 24' },
  { id: 5, src: '/images/template/vcard25.png', alt: 'Template 25' },
  { id: 6, src: '/images/template/vcard26.png', alt: 'Template 26' },
  { id: 7, src: '/images/template/vcard27.png', alt: 'Template 27' },
  { id: 8, src: '/images/template/vcard28.png', alt: 'Template 28' },

];

export default function TemplateModal({ isOpen, onClose }) {
  const [selectedId, setSelectedId] = useState(null);

  if (!isOpen) return null;

  const handleSave = () => {
    console.log('Saved template ID:', selectedId); // replace this with your API or state logic
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black bg-opacity-70"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative z-50 bg-white rounded-xl max-w-7xl w-full mx-4 px-6 max-h-[90vh] overflow-y-auto">
        {/* HEADER */}
        <div className="sticky top-0 z-10 bg-white flex justify-between items-center mb-6 border-b pb-4 pt-4">
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm"
          >
            Save
          </button>
          <h2 className="text-xl font-semibold">Choose a Template</h2>
          <button
            onClick={onClose}
            className="text-gray-500 text-xl font-bold hover:text-red-500"
          >
            ✕
          </button>
        </div>

        {/* TEMPLATE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {templates.map((template) => (
            <div
              key={template.id}
              onClick={() => setSelectedId(template.id)}
              className={`relative rounded-lg border-2 p-2 cursor-pointer transition-all duration-300 group ${
                selectedId === template.id ? 'border-blue-500' : 'border-gray-300'
              }`}
            >
              <div className="h-[420px] overflow-hidden rounded-md">
                <div className="h-[2820px] group-hover:translate-y-[-2400px] transition-transform duration-[10000ms] ease-in-out blur-[0px] ">
                  <Image
                    src={template.src}
                    alt={template.alt}
                    width={403}
                    height={2820}
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
