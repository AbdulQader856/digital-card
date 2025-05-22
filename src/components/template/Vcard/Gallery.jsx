const Gallery = ({styles}) => {
  const gallery =[
    {
      src : '/images/template/img/vcard/v1.jpg',
      alt : 'Gallery item'
    },
    {
      src : '/images/template/img/vcard/v2.jpg',
      alt : 'Gallery item'
    },
  ]
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.break}></div>
      <h1 className={styles.section_heading}>Gallery</h1>

      <div className={styles.mediaGrid}>
        {gallery.map((item, index) => (
          <div 
            key={index}
            className={styles.mediaCard}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className={styles.mediaImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
