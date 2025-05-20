'use client';
import React from 'react';
import styles from './vcard2.module.css';

const AppointmentSection = () => {
  return (
      <div className={styles.wrapper}>
        <h1 className={`${styles.section_heading}`}>
          Make an Appointment
        </h1>

        {/* Date Slot */}
        <div className={`${styles.date_slot} mt-4 mb-4`}>
          <label htmlFor="myID" className={`${styles.date_label}`}>
              Date
          </label>
          <div className="w-full sm:w-2/12">
            <input
              id="myID"
              type="date"
              placeholder="Pick a Date"
              className={`${styles.date_input}`}
            />
          </div>
        </div>

        {/* Time Slots */}
        <div className={`${styles.time_slots} mb-4`}>
          <div className={`${styles.available_slots}`}>
              08:10 - 20:00
          </div>

          <div className={`${styles.available_slots}`}>
              08:10 - 20:00
          </div>
        </div>

        <div className={`${styles.time_slots}`}>
          <div className={`${styles.available_slots}`}>
              08:10 - 20:00
          </div>

          <div className={`${styles.available_slots}`}>
              08:10 - 20:00
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button
            type="button"
            className={`${styles.submit_btn}`}
          >
            Make an Appointment
          </button>
        </div>
      </div>
  );
};

export default AppointmentSection;
