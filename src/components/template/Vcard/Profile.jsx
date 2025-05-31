'use client';
import React from 'react';


const ProfileInfo = ({styles}) => {
  return (
    <section className={styles.profileSection}>
      <div className={`${styles.profile}`}>
        <img 
          src="/images/template/img/vcard/vcard4-profile.jpg" 
          alt="Profile Image" 
          className={styles.profileContainer}
        />
      </div>
    </section>
  );
};

export default ProfileInfo;
