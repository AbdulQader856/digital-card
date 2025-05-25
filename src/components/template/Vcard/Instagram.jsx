'use client';
import React, { useState } from 'react';

const Instagram = ({styles}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const instagram =[
    {
      src : '/images/template/img/vcard/instagram.PNG',
      alt : 'Instagram Post'
    },
    {
      src : '/images/template/img/vcard/instagram.PNG',
      alt : 'Instagram Post'
    },
  ]

  return (
    <section className={styles.instagramSection}>
      <div className={styles.wrapper}>
        <div className={styles.break}></div>
        <h1 className={styles.section_heading}>Instagram</h1>

        <div className={styles.mediaGrid}>
          {instagram.map((item, index) => (
            <div 
              key={index}
              className={styles.mediaCard}
              onClick={() => setIsModalOpen(true)}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className={`${styles.mediaImage}`}
              />
            </div>
          ))}
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
                  src="https://www.youtube.com/embed/0NweN13U5l4?si=S_QyI4HPkYDrkjbz"
                  title="Instagram Embed"
                  className={styles.youtubeVideo}
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Instagram;
