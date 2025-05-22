'use client';

import React from 'react';
import { ServiceCarouselVcard2 } from './ui/Swiper';


const Services = ({styles}) => {
  const services = [
    {
      title: 'Residential Construction',
      desc: 'Building and renovating homes, including single-family houses, townhouses, and apartment buildings. Services include everything from initial design and site preparation to final finishes and landscaping.',
      img: '/images/template/img/vcard/vcard3-service1.jpg',
    },
    {
      title: 'Commercial Construction',
      desc: 'This includes managing all phases of construction, ensuring compliance with commercial building codes, and delivering on schedule and budget.',
      img: '/images/template/img/vcard/vcard3-service2.jpg',
    },
    {
      title: 'Industrial Construction',
      desc: 'Developing large-scale industrial facilities such as factories, power plants, and storage facilities. This includes site selection, design, construction, and maintenance of industrial buildings and infrastructure.',
      img: '/images/template/img/vcard/vcard3-service3.jpg',
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.break}></div>
      {/* Shapes */}
      {/* <img
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
      /> */}

      <h4 className={`${styles.section_heading}`}>
        Our Services
      </h4>

      {/* Carousel for mobile */}
      <div className={`${styles.serviceCarousel}`}>
        <ServiceCarouselVcard2 styles={styles} services={services}/>
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
