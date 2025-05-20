'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import styles from '../Vcard2/vcard2.module.css';

export const TestimonialCarouselVcard2 = () => {
  const testimonials = [
    {
      name: 'Shane Watson',
      title: 'CEO at Tarsons',
      image: '/images/template/img/vcard2/vcard-testimonial.png',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim porttitor sollicitudin. Duis tellus ante, aliquet a nisl ac, pharetra suscipit quam.',
    },
    {
      name: 'Jessica Lee',
      title: 'Marketing Head at Optima',
      image: '/images/template/img/vcard2/vcard-testimonial.png',
      message:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    },
  ];

 return (
    <div className={styles.testimonialWrapper}>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className={styles.testimonialSlider}>
              <div className={styles.tesImageContainer}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={styles.tesImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.tesContent}>
                <p className={styles.tesMessage}>{testimonial.message}</p>
                <div className={styles.tesName}>{testimonial.name}</div>
                <div className={styles.tesTitle}>{testimonial.title}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};



export const ServiceCarouselVcard2 = ({ services }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
      spaceBetween={16}
      slidesPerView={1}
      centeredSlides={true}
     
    >
      {services.map((service, idx) => (
        <SwiperSlide key={idx}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <img
                src={service.img}
                alt={service.title}
                loading="lazy"
                className={styles.iconImg}
              />
            </div>
            <div className={styles.serviceContent}>
              <h4 className={styles.serviceTitle}>{service.title}</h4>
              <p className={styles.serviceDesc}>{service.desc}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};


