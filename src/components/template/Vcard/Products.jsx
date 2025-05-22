'use client';
import React from 'react';


const Products = ({styles}) => {
  const products = [
    {
      src : "/images/template/img/vcard/men-wear1.jpeg",
      alt : "Men's Wear",
      title : "Men's Wear",
      desc : "Men Regular Formal Suit",
      price : "$150",
    },
    {
      src : "/images/template/img/vcard/men-wear2.jpeg",
      alt : "Men's Wear",
      title : "Men's Wear",
      desc : "Men Regular Formal Suit",
      price : "$150",
    },
  ]
  return (
    <div className={`${styles.wrapper}`}>
      <div className={styles.break}></div>
      {/* Shape images */}
      {/* <img
        src="/images/template/img/vcard2/shape3.png"
        alt="shape3"
        loading="lazy"
        className="absolute left-0 bottom-0 w-20 sm:w-auto"
      /> */}

      <h4 className={styles.section_heading}>Products</h4>

      <div className={styles.productsGrid}>
        {products.map((product, index) => (
          <div 
            key={index}
            className={styles.productsCard}
          >
            <img
              src={product.src}
              alt={product.alt}
              loading="lazy"
              className={styles.productsImage}
            />
            <div className={styles.productsDetails}>
              <h4 className={styles.productsTitle}>{product.title}</h4>
              <p className={styles.productsDesc}>{product.desc}</p>
              <span className={styles.productsPrice}>{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
