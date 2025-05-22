'use client';
import React from 'react';
import { FaCalendar } from 'react-icons/fa';


const BusinessHours = ({styles}) => {
  const days = [
    'Sunday', 'Monday', 'Tuesday',
    'Wednesday', 'Thursday', 'Friday', 'Saturday',
  ];

  return (
    <div className={`${styles.wrapper}`}>
      <div className={styles.break}></div>
      {/* Background Images */}
      {/* <img
        src="/images/template/img/vcard2/shape5.png"
        alt="business time"
        loading="lazy"
        className="hidden md:block absolute w-36 h-88 left-0 top-0"
      />

      <img
        src="/images/template/img/vcard2/shape1.png"
        alt="business time"
        loading="lazy"
        className="hidden md:block absolute w-36 h-88 right-0 top-0"
      /> */}

      {/* Business Hours */}
      <div className={styles.hoursContainer}>
        <h4 className={styles.section_heading}>Business Hours</h4>

        {days.map((day, i) => (
          <div key={i} className={styles.timeRow}>
            <span className={styles.dayIcon}><FaCalendar/></span>
            <span className={styles.dayLabel}>{day} :</span>
            <span className={styles.timeValue}>08:10 - 20:00</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessHours;
