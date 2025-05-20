'use client';
import React, { useState } from 'react';
import styles from './vcard2.module.css';

const Instagram = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.section_heading}>Instagram</h1>

      <div className={styles.mediaGrid}>
        {/* Video Thumbnail */}
        <div className={styles.mediaCard} onClick={() => setIsModalOpen(true)}>
          <img
            src='/images/template/img/vcard2/instagram.jpg'
            alt="Video thumbnail"
            loading="lazy"
            className={styles.mediaImage}
          />
        </div>

        {/* Image */}
        <div className={styles.mediaCard}>
          <img
            src='/images/template/img/vcard2/instagram.jpg'
            alt="Gallery item"
            loading="lazy"
            className={styles.mediaImage}
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className={styles.modalBackdrop} onClick={() => setIsModalOpen(false)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/Q1NKMPhP8PY"
                title="YouTube Video"
                className={styles.galleryVideo}
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Instagram;
