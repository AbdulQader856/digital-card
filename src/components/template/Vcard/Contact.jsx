'use client';
import React from 'react';


const Contact = ({styles}) => {
  return (
    <section className={styles.contactSection}>
      <div className={`${styles.wrapper}`}>
        <div className={styles.break}></div>
        <h4 className={styles.section_heading}>
          Inquiries
        </h4>

        {/* Contact Form */}
        <div className={styles.contactForm}>
          <input
            type="text"
            id="name"
            placeholder="Full Name"
            className={styles.formInput}
          />
          <input
            type="email"
            id="email"
            placeholder="E-mail Address"
            className={styles.formInput}
          />
          <input
            type="tel"
            id="mobile"
            placeholder="Mobile Number"
            className={styles.formInput}
          />
          <textarea
            id="message"
            placeholder="Type a message here..."
            rows="5"
            className={styles.formTextarea}
          />
          <button
            type="button"
            className={styles.formButton}
          >
            Send Message
          </button>
        </div>


        {/* Buttons - Download / Share
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 pt-10">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            <i className="fas fa-download mr-2"></i> Download Vcard
          </button>
          <button
            type="button"
            className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
          >
            <a href="#" className="text-white no-underline">
              <i className="fas fa-share-alt mr-2"></i> Share
            </a>
          </button>
        </div> */}

        {/* Google Map */}
        <div className={styles.gmapModal}>
          <iframe
            width="100%"
            height="300"
            src="https://maps.google.de/maps?q=White+House,+TN,+USA/&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            style={{ borderRadius: '10px' }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
