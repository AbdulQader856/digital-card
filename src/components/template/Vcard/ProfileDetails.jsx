'use client';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaTwitter, FaGlobe, FaYoutube, FaTumblr, FaPinterest, FaTiktok } from 'react-icons/fa';


const ProfileDetails = ({styles}) => {
  return (
    <section className={styles.profileDetailsSection}>
      <div className={`${styles.profile_details}`}>
        <h1 className={`${styles.profile_name}`}>Tricky Stewart</h1>
        <span className={`${styles.profile_occupation}`}>CA</span>
        <span className={`${styles.profile_jobTitle}`}>Finance Manager</span>
        <span className={`${styles.profile_company}`}>Brand Chanakya</span>

        <p className={`${styles.profile_p} mt-12`}>
        Creating Content That Connects. As a YouTuber, I specialize in producing engaging videos that entertain, 
        inform, and inspire. With a passion for storytelling and a commitment to quality, I craft content that resonates 
        with my audience and builds a strong online community. Open to collaborations and brand integrations—let's create 
        something amazing together!
        </p>
      </div>
    </section>
  );
};

export default ProfileDetails;
