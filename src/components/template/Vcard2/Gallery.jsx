'use client';
import React, { useState } from 'react';
import styles from './vcard2.module.css';

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.section_heading}>Gallery</h1>

      <div className={styles.mediaGrid}>
        {/* Video Thumbnail */}
        <div className={styles.mediaCard} onClick={() => setIsModalOpen(true)}>
          <img
            src='/images/template/img/vcard2/v1.jpg'
            // "https://vcard.waptechy.com/assets/img/video-thumbnail.png"
            alt="Video thumbnail"
            loading="lazy"
            className={styles.mediaImage}
          />
        </div>

        {/* Image */}
        <div className={styles.mediaCard}>
          <img
            src='/images/template/img/vcard2/v2.jpg'
            alt="Gallery item"
            loading="lazy"
            className={styles.mediaImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
