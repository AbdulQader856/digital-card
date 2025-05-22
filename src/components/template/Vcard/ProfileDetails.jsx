'use client';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaTwitter, FaGlobe, FaYoutube, FaTumblr, FaPinterest, FaTiktok } from 'react-icons/fa';


const ProfileDetails = ({styles}) => {
  return (
    <div className={`${styles.profile_details}`}>
      <h1 className={`${styles.profile_heading}`}>Tricky Stewart</h1>
      <span className={`${styles.profile_subtitle}`}>A Full Stack Developer</span>

      <p className={`${styles.profile_p} mt-12`}>
      Creating Content That Connects. As a YouTuber, I specialize in producing engaging videos that entertain, 
      inform, and inspire. With a passion for storytelling and a commitment to quality, I craft content that resonates 
      with my audience and builds a strong online community. Open to collaborations and brand integrations—let's create 
      something amazing together!
      </p>

      <div className={`${styles.profile_icons}`}>
        <a href='#' className={styles.profile_iconimg}><FaGlobe/></a>
        <a href='#' className={styles.profile_iconimg}><FaTwitter/></a>
        <a href='#' className={styles.profile_iconimg}><FaFacebookF /></a>
        <a href='#' className={styles.profile_iconimg}><FaInstagram /></a>
        <a href='#' className={styles.profile_iconimg}><FaYoutube /></a>
        <a href='#' className={styles.profile_iconimg}><FaTumblr /></a>
        <a href='#' className={styles.profile_iconimg}><FaLinkedinIn /></a>
        <a href='#' className={styles.profile_iconimg}><FaWhatsapp /></a>
        <a href='#' className={styles.profile_iconimg}><FaPinterest /></a>
        <a href='#' className={styles.profile_iconimg}><FaTiktok /></a>
      </div>
    </div>
  );
};

export default ProfileDetails;
