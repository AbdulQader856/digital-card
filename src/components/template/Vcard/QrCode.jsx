'use client';
import React from 'react';


const QrCode = ({styles}) => {
  return (
    <div className={`${styles.wrapper}`}>
      <div className={styles.break}></div>
      <h4 className={styles.section_heading}>
        QR Code
      </h4>

      <div className={styles.qrGrid}>
        <div className={styles.qrProfileSection}>
          <img
            src="/images/template/img/vcard/vcard4-profile.jpg"
            alt="QR Profile"
            loading="lazy"
            className={styles.qrProfileImage}
          />
          <button className={styles.desktopButton}>
            Download My QR Code
          </button>
        </div>

        <div className={styles.qrSection}>
          <img
            src="/images/template/img/vcard/vcard2-qr-code.png"
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
