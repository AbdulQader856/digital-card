'use client';
import React from 'react';
import styles from './vcard2.module.css';

const QrCode = () => {
  return (
    <div className={`${styles.wrapper} md:mt-20`}>
      {/* Heading */}
      <h4 className={styles.section_heading}>
        QR Code
      </h4>

      <div className={styles.qrGrid}>
        {/* Profile Image & Button for desktop */}
        <div className={styles.qrProfileSection}>
          <img
            src="/images/template/img/vcard2/vcard2-profile.png"
            alt="QR Profile"
            loading="lazy"
            className={styles.qrProfileImage}
          />
          <button className={styles.desktopButton}>
            Download My QR Code
          </button>
        </div>

        {/* QR Image & Button for mobile */}
        <div className={styles.qrSection}>
          <img
            src="/images/template/img/vcard2/vcard2-qr-code.png"
            alt="QR Code"
            loading="lazy"
            className={styles.qrImage}
          />
          <button className={styles.mobileButton}>
            Download My QR Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default QrCode;
