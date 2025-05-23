'use client';
import React from 'react';
import { FaCalendar } from 'react-icons/fa';


const BusinessHours = ({styles}) => {
  const days = [
    'Sunday', 'Monday', 'Tuesday',
    'Wednesday', 'Thursday', 'Friday', 'Saturday',
  ];

  return (
    <section className={styles.businessSection}>
      <div className={`${styles.wrapper}`}>
        <div className={styles.break}></div>
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
    </section>
  );
};

export default BusinessHours;
