'use client';
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaCakeCandles } from 'react-icons/fa6';
import { MdLocationPin, MdEmail   } from 'react-icons/md';


const EventDetails = ({styles}) => {
  const items = [
    {
      icon: <MdEmail  className={styles.eventIcons}/>,
      text: 'trickywart376@gmail.com',
      alt: 'email',
    },
    {
      icon: <FaCakeCandles className={styles.eventIcons}/>,
      text: '30 - October 1997',
      alt: 'birthday',
    },
    {
      icon: <FaPhoneAlt className={styles.eventIcons}/>,
      text: '+94 83066 14769',
      alt: 'phone',
    },
    {
      icon: <MdLocationPin  className={styles.eventIcons}/>,
      text: 'Surat - India',
      alt: 'location',
    },
  ];

  return (
    <section className={styles.eventDetailsSection}>
      <div className={`${styles.eventdetails}`}>
        {items.map((item, index) => (
          <div key={index} className={`${styles.event_list}`}>
            <div className={`${styles.event_items}`}>
              {item.icon}
            </div>
            <span className={`${styles.event_label}`}>{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventDetails;
