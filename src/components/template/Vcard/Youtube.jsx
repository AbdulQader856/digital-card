'use client';
import React, { useState } from 'react';

const Youtube = ({styles}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const youtube =[
    {
      src : 'https://vcard.waptechy.com/assets/img/video-thumbnail.png',
      alt : 'Youtube Video'
    },
    {
      src : 'https://vcard.waptechy.com/assets/img/video-thumbnail.png',
      alt : 'Youtube Video'
    },
  ]

  return (
    <section className={styles.youtubeSection}>
      <div className={styles.wrapper}>
        <div className={styles.break}></div>
        <h1 className={styles.section_heading}>Youtube</h1>

        <div className={styles.mediaGrid}>
          {youtube.map((item, index) => (
            <div 
              key={index}
              className={styles.mediaCard}
              onClick={() => setIsModalOpen(true)}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className={styles.mediaImage}
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
                  title="YouTube Video"
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

export default Youtube;
