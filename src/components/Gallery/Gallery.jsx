import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase'; // pastikan path-nya benar
import './Gallery.css';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  // Fetch image URLs from Firestore
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'images'));
        const urls = querySnapshot.docs.map(doc => doc.data().imageUrl);
        setImages(urls);
      } catch (error) {
        console.error('❌ Error fetching images from Firestore:', error);
      }
    };

    fetchImages();
  }, []);

  const openLightbox = (imgSrc) => {
    setSelectedImage(imgSrc);
    setIsZoomed(false);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setIsZoomed(false);
  };

  const toggleZoom = (e) => {
    e.stopPropagation();
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="gallery-wrapper">
      <h1 className="gallery-title">GALLERY</h1>

      <div className="gallery-container">
        {images.map((img, idx) => (
          <img key={idx} src={img} alt={`gallery-${idx}`} onClick={() => openLightbox(img)} />
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <img 
            src={selectedImage} 
            alt="preview" 
            className={isZoomed ? 'enlarged' : ''}
            onClick={toggleZoom}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
