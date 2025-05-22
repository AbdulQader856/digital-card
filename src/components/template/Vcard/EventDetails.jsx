'use client';
import React from 'react';


const EventDetails = ({styles}) => {
  const items = [
    {
      icon: '/images/template/img/vcard2/vcard2-email.png',
      text: 'trickywart376@gmail.com',
      alt: 'email',
    },
    {
      icon: '/images/template/img/vcard2/vcard2-birthday.png',
      text: '30 - October 1997',
      alt: 'birthday',
    },
    {
      icon: '/images/template/img/vcard2/vcard2-phone.png',
      text: '+94 83066 14769',
      alt: 'phone',
    },
    {
      icon: '/images/template/img/vcard2/vcard2-location.png',
      text: 'Surat - India',
      alt: 'location',
    },
  ];

  return (
    <div className={`${styles.eventdetails}`}>
      {items.map((item, index) => (
        <div key={index} className={`${styles.event_list}`}>
          <div className={`${styles.event_items}`}>
            {/* <img src={item.icon} alt={item.alt} loading="lazy" className={`${styles.event_icons}`} /> */}
          </div>
          <span className={`${styles.event_label}`}>{item.text}</span>
        </div>
      ))}
    </div>
  );
};

export default EventDetails;
