'use client';

import React from 'react';
import { ServiceCarouselVcard2 } from '../ui/Swiper';
import styles from './vcard2.module.css';

const Services = () => {
  const services = [
    {
      title: 'UI/UX',
      desc: 'Landing Page User Flow, Wireframing Prototyping mobile app design',
      img: '/images/template/img/vcard2/service1.png',
    },
    {
      title: 'Icons',
      desc: 'Landing Page User Flow, Wireframing Prototyping mobile app design',
      img: '/images/template/img/vcard2/service2.png',
    },
    {
      title: 'Branding',
      desc: 'Logo design, color palette, typography and brand system',
      img: '/images/template/img/vcard2/service1.png',
    },
    {
      title: 'App Design',
      desc: 'Mobile application wireframes, screen UI and interactions',
      img: '/images/template/img/vcard2/service2.png',
    },
    {
      title: 'Motion',
      desc: 'Microinteractions, loading animations and transitions',
      img: '/images/template/img/vcard2/service1.png',
    },
    {
      title: 'Development',
      desc: 'Frontend/Backend coding, full-stack solutions',
      img: '/images/template/img/vcard2/service2.png',
    },
  ];

  return (
    <div className={styles.wrapper}>
      {/* Shapes */}
      <img
        src="/images/template/img/vcard2/shape2.png"
        alt="shape2"
        loading="lazy"
        className="absolute right-0 top-0 w-20 sm:w-auto"
      />
      <img
        src="/images/template/img/vcard2/shape3.png"
        alt="shape3"
        loading="lazy"
        className="absolute left-0 bottom-0 md:top-0 w-20 sm:w-auto"
      />

      <h4 className={`${styles.section_heading}`}>
        Our Services
      </h4>

      {/* Carousel for mobile */}
      <div className={`${styles.serviceCarousel}`}>
        <ServiceCarouselVcard2 services={services}/>
      </div>

      {/* Grid for tablet and desktop */}
      <div className={`${styles.serviceGrid}`}>
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`${styles.serviceCard}`}
          >
            <div className={`${styles.serviceIcon}`}>
              <img
                src={service.img}
                alt={service.title}
                loading="lazy"
                className={`${styles.iconImg}`}
              />
            </div>
            <div className={`${styles.serviceContent}`}>
              <h4 className={`${styles.serviceTitle}`}>{service.title}</h4>
              <p className={`${styles.serviceDesc}`}>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
