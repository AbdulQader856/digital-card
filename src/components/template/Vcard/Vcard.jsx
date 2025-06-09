'use client'
import Banner from './Banner';
import Profile from './Profile';
import ProfileDetails from './ProfileDetails';
import EventDetails from './EventDetails';
import Appointment from './Appointment';
import Services from './Services';
import Gallery from './Gallery';
import Products from './Products';
import Testimonial from './Testimonial';
import Blog from './Blog';
import QrCode from './QrCode';
import BusinessHours from './BusinessHours';
import Contact from './Contact';
import styles from './vcard23.module.css';
import Youtube from './Youtube';
import Instagram from './Instagram';
import { FaFacebook, FaQrcode, FaShare, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
import Popup from './Popup';
import SocialIcons from './SocialIcons';

const Vcard = () => {
const [showActions, setShowActions] = useState(false);
const [showShareModal, setShowShareModal] = useState(false);

  return (
    <div className={`${styles.vcard_two}`}>
      {/* FAB Container */}
      <div className={styles.fabContainer}>
        {/* Action Buttons */}
        <div className={`${styles.fabActions} ${showActions ? styles.show : ''}`}>
          <button 
            className={styles.fabAction}
            onClick={() => setShowShareModal(true)}
            title="Share"
          >
            <FaShare size={18} />
          </button>
          <button 
            className={styles.fabAction}
            onClick={() => alert('Download QR')}
            title="QR Code"
          >
            <FaQrcode size={18} />
          </button>
        </div>

        {/* Main FAB */}
        <button 
          className={styles.fabMain} 
          onClick={() => setShowActions(prev => !prev)}
          title="Menu"
        >
        </button>
      </div>

      {/* Share Modal (optional) */}
      {showShareModal && (
        <div className={styles.modalBackdrop} onClick={() => setShowShareModal(false)}>
          <div className={styles.shareModal} onClick={(e) => e.stopPropagation()}>
            <h2 className="text-black mb-4">Share This Page</h2>
            <div className={styles.shareModalList}>
              <a href="https://facebook.com/sharer/sharer.php?u=https://your-site.com" target="_blank" className={styles.shareModalItem}><FaFacebook/> Facebook</a>
              <a href="https://twitter.com/intent/tweet?url=https://your-site.com" target="_blank" className={styles.shareModalItem}><FaTwitter/>Twitter</a>
              <a href="https://wa.me/?text=https://your-site.com" target="_blank" className={styles.shareModalItem}><FaWhatsapp/>WhatsApp</a>
            </div>
          </div>
        </div>
      )}
      <Banner styles={styles}/>
      <Profile styles={styles} />
      <ProfileDetails styles={styles} />
      <SocialIcons styles={styles} />
      <EventDetails styles={styles} />
      <Appointment styles={styles} />
      <Services styles={styles} />
      <Gallery styles={styles} />
      <Youtube styles={styles} />
      <Instagram  styles={styles}/>
      <Products styles={styles} />
      <Testimonial styles={styles} />
      <Blog  styles={styles}/>
      <QrCode styles={styles} />
      <BusinessHours styles={styles} />
      <Contact styles={styles} />
      <Popup styles={styles} />
    </div>
  );
};

export default Vcard;