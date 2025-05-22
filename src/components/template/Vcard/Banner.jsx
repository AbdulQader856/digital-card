'use client';
import React, { useState } from "react";
import { FaLanguage } from "react-icons/fa";


const languages = [
  { label: "English", icon: "/images/template/img/vcard/english.png" },
  { label: "Spanish", icon: "/images/template/img/vcard/spain.png" },
  { label: "French", icon: "/images/template/img/vcard/france.png" },
  { label: "Arabic", icon: "/images/template/img/vcard/arabic.svg" },
  { label: "German", icon: "/images/template/img/vcard/german.png" },
  { label: "Russian", icon: "/images/template/img/vcard/russian.jpeg" },
  { label: "Turkish", icon: "/images/template/img/vcard/turkish.png" },
];

const Banner = ({styles}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.banner}`}>
      {/* Background Image */}
      {/* <img
        src="/images/template/img/vcard2/vcard2-banner.png"
        alt="background"
        className={`${styles.banner_image}`}
        loading="lazy"
      /> */}


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
                  <img
                    src={lang.icon}
                    alt={lang.label}
                    width={25}
                    height={20}
                    className="rounded-sm"
                    loading="lazy"
                  />
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
