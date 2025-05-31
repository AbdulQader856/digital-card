'use client';

import { FaXmark } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Popup({ styles }) {
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
    <div className={styles.popupSection}>
      <div className={styles.popupWrapper}>
        <button
          type="button"
          className={styles.popupClose}
          onClick={() => setVisible(false)}
        >
          <FaXmark className="w-5 h-5" />
        </button>

        <div className={styles.popupContent}>
          <h1 className={styles.popupTitle}>
          {PopupData.title}
          </h1>
          <p className={styles.popupMsg}>
          {PopupData.desc}
          </p>
          <div>
            <Link
              href={PopupData.url||''}
              target="_blank"
              className={styles.popupBtn}
            >
              {PopupData.button}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
