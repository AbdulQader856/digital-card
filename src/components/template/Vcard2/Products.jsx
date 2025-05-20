'use client';
import React from 'react';
import styles from './vcard2.module.css';

const Products = () => {
  return (
    <div className={`${styles.wrapper} mt-6 md:mt-20`}>
      {/* Shape images */}
      <img
        src="/images/template/img/vcard2/shape3.png"
        alt="shape3"
        loading="lazy"
        className="absolute left-0 bottom-0 w-20 sm:w-auto"
      />

      <h4 className={styles.section_heading}>Products</h4>

      <div className={styles.productsGrid}>
        {/* Product Card 1 */}
        <div className={styles.productsCard}>
          <img
            src="/images/template/img/vcard2/men-wear1.jpeg"
            alt="Men's Wear"
            className={styles.productsImage}
            loading="lazy"
          />
          <div className={styles.productsDetails}>
            <h4 className={styles.productsTitle}>Men&apos;s Wear</h4>
            <p className={styles.productsDesc}>Men Regular Formal Suit</p>
            <span className={styles.productsPrice}>$150</span>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className={styles.productsCard}>
          <img
            src="/images/template/img/vcard2/men-wear2.jpeg"
            alt="Men's Wear"
            className={`${styles.productsImage} m-2`}
            loading="lazy"
          />
          <div className={styles.productsDetails}>
            <h4 className={styles.productsTitle}>Men&apos;s Wear</h4>
            <p className={styles.productsDesc}>Men Regular Formal Suit</p>
            <span className={styles.productsPrice}>$150</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
