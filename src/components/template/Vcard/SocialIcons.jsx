'use client';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaTwitter, FaGlobe, FaYoutube, FaTumblr, FaPinterest, FaTiktok } from 'react-icons/fa';


const SocialIcons = ({styles}) => {
    return (
        <section className={styles.socialSection}>
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
        </section>
    )
}

export default SocialIcons;