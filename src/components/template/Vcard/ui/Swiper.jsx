'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

export const TestimonialCarouselVcard2 = ({testimonials, styles}) => {
 return (
    <div className={styles.testimonialWrapper}>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        className={styles.testimonialSwiper}
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

export const ServiceCarouselVcard2 = ({ services, styles}) => {
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
                className={`${styles.iconImg}`}
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


