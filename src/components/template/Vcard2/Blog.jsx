'use client';
import React from 'react';
import styles from './vcard2.module.css';

const Blog = () => {
  const blogs = [
    {
      img : "/images/template/img/vcard2/blog.png", 
      title: "Men's Wear", 
      desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim porttitor sollicitudin. Duis tellus ante, aliquet a nisl ac, pharetra suscipit quam."
    },
    {
      img : "/images/template/img/vcard2/blog.png", 
      title: "Women's Wear", 
      desc : "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    }
  ]
  return (
    <div className={`${styles.wrapper} md:mt-20`}>
      {/* Background Shape (Right Positioned) */}
      <img
        src="/images/template/img/vcard2/shape2.png"
        alt="shape"
        loading="lazy"
        className="hidden sm:block absolute right-0 top-0 h-auto z-0"
      />

      <h4 className={styles.section_heading}>Blog</h4>

      <div className={styles.blogGrid}>
        {blogs.map((blog, index) => (
          <div key={index} className={styles.blogCard}>
            {/* Image */}
            <div className={styles.blogImageWrapper}>
              <img
                src={blog.img}
                alt="blog"
                className={styles.blogImage}
                loading="lazy"
              />
            </div>

            {/* Details */}
            <div className={styles.blogContent}>
              <h5 className={styles.blogTitle}>{blog.title}</h5>
              <p className={styles.blogDesc}>{blog.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
