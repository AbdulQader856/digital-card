'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

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
    <div className="w-full max-w-4xl mx-auto testimonial-slider">
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
            <div className="card testimonial-card flex flex-col sm:flex-row items-center gap-4 p-6 bg-white shadow rounded mb-10">
              <div className="sm:order-2">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full w-24 h-24 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="sm:order-1 text-center sm:text-left">
                <p className="text-gray-600 mb-2">{testimonial.message}</p>
                <div className="text-blue-600 font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.title}</div>
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
          <div className="bg-white rounded-xl shadow-sm flex flex-col items-center p-4">
            <div className="w-16 h-16 flex items-center justify-center mb-3">
              <img
                src={service.img}
                alt={service.title}
                loading="lazy"
                className="w-12 h-12 object-contain"
              />
            </div>
            <div className="text-center">
              <h4 className="text-md font-semibold mb-1">{service.title}</h4>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};


