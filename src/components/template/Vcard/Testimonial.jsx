'use client';
import React from 'react';
import {TestimonialCarouselVcard2} from './ui/Swiper';


const Testimonial = ({styles}) => {
  const testimonials = [
    {
      name: 'Shane Watson',
      title: 'CEO at Tarsons',
      image: '/images/template/img/vcard/vcard-testimonial.png',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim porttitor sollicitudin. Duis tellus ante, aliquet a nisl ac, pharetra suscipit quam.',
    },
    {
      name: 'Jessica Lee',
      title: 'Marketing Head at Optima',
      image: '/images/template/img/vcard/vcard-testimonial.png',
      message:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    },
  ];

  return (
    <div className={`${styles.wrapper}`}>
      <div className={styles.break}></div>
      <h4 className={styles.section_heading}>Testimonial</h4>
      <TestimonialCarouselVcard2 styles={styles} testimonials={testimonials}/>
    </div>
  );
};

export default Testimonial;
