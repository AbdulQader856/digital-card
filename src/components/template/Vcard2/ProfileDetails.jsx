'use client';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import styles from './vcard2.module.css';

const ProfileDetails = () => {
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
        <FaFacebookF className="text-blue-600 cursor-pointer" />
        <FaInstagram className="text-pink-500 cursor-pointer" />
        <FaLinkedinIn className="text-blue-700 cursor-pointer" />
        <FaWhatsapp className="text-green-500 cursor-pointer" />
        <FaTwitter className="text-sky-400 cursor-pointer" />
      </div>
    </div>
  );
};

export default ProfileDetails;
