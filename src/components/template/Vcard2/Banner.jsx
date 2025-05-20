'use client';
import React, { useState } from "react";
import { FaLanguage } from "react-icons/fa";
import styles from './vcard2.module.css';

const languages = [
  { label: "English", icon: "/images/template/img/vcard2/english.png" },
  { label: "Spanish", icon: "/images/template/img/vcard2/spain.png" },
  { label: "French", icon: "/images/template/img/vcard2/france.png" },
  { label: "Arabic", icon: "/images/template/img/vcard2/arabic.svg" },
  { label: "German", icon: "/images/template/img/vcard2/german.png" },
  { label: "Russian", icon: "/images/template/img/vcard2/russian.jpeg" },
  { label: "Turkish", icon: "/images/template/img/vcard2/turkish.png" },
];

const Banner = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.banner}`}>
      {/* Background Image */}
      <img
        src="/images/template/img/vcard2/vcard2-banner.png"
        alt="background"
        className={`${styles.banner_image}`}
        loading="lazy"
      />


      {/* Language Dropdown */}
      <div className={`${styles.language_dropdown}`}>
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className={`${styles.language_btn}`}
          >
            <FaLanguage />
            Language
          </button>

          {open && (
            <ul className={`${styles.language_list}`}>
              {languages.map((lang) => (
                <li key={lang.label} className={`${styles.language_items}`}>
                  {/* <img
                    src={lang.icon}
                    alt={lang.label}
                    width={25}
                    height={20}
                    className="rounded-sm"
                    loading="lazy"
                  /> */}
                  <span className="text-sm">{lang.label}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
