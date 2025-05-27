'use client';

import { FaXmark } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Popup() {
    const PopupData = {
        
            title : "Go Digital, Buy Now!",
            desc : "Impress your contacts with a sleek and eco-friendly digital business card. Instantly share your contact details, social profiles, and more with just a tap or scan. Save paper, stay connected, and stand out from the crowd. Create your digital business card now!",
            url : "https://digibcard.com/admin/vcards/create",
            button : "Create Your Business Card",
    }

  const [visible, setVisible] = useState(true);
  useEffect(() => {}, [PopupData]);

  if (!visible) return null;

  return (
    <div className="mt-0 bottom-0 max-w-xl fixed z-50">
      <div className="flex items-center justify-center bg-gray-100 p-6 relative">
        <button
          type="button"
          className="absolute top-4 right-4 text-gray-700 hover:text-red-500 transition"
          onClick={() => setVisible(false)}
        >
          <FaXmark className="w-5 h-5" />
        </button>

        <div className="text-center max-w-2xl">
          <h1 className="text-2xl font-bold mb-4 support_heading">
          {PopupData.title}
          </h1>
          <p className="mb-4 support_text text-gray-800">
          {PopupData.desc}
          </p>
          <div>
            <Link
              href={PopupData.url||''}
              target="_blank"
              className="act-now inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
            >
              {PopupData.button}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
