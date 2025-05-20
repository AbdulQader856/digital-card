'use client';
import React from 'react';
import styles from './vcard2.module.css';

const ProfileInfo = () => {
  return (
    <div className={`${styles.profile}`}>
    {/* Shape Image */}
      <img
        src="/images/template/img/vcard2/shape1.png"
        alt="shape"
        className="absolute mt-[-4rem] top-10 right-0 w-24 h-56 z-0"
        loading="lazy"
      />

      <div className="relative z-10">
        <img
          src="/images/template/img/vcard2/vcard2-profile.png"
          alt="profile-img"
          className={`${styles.profile_image}`}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
