'use client';
import React from 'react';
import {TestimonialCarouselVcard2} from '../ui/Swiper';
import styles from './vcard2.module.css';

const Testimonial = () => {
  return (
    <div className={`${styles.wrapper} md:mt-20`}>
      <h4 className={styles.section_heading}>Testimonial</h4>
      <TestimonialCarouselVcard2/>
    </div>
  );
};

export default Testimonial;
