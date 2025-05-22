'use client';
import React from 'react';


const ProfileInfo = ({styles}) => {
  return (
    <div className={`${styles.profile}`}>
    {/* Shape Image
      <img
        src="/images/template/img/vcard2/shape1.png"
        alt="shape"
        className="absolute mt-[-4rem] top-10 right-0 w-24 h-56 z-0"
        loading="lazy"
      /> */}

      <div className={styles.profileContainer}></div>
    </div>
  );
};

export default ProfileInfo;
