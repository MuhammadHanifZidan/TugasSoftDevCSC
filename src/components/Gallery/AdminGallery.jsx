import React, { useState, useEffect } from 'react';
import { db } from '../../Firebase';
import { collection, addDoc, deleteDoc, doc, getDocs } from 'firebase/firestore';
import './AdminGallery.css';

const AdminGallery = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [images, setImages] = useState([]);

  // Ambil semua data dari Firestore saat komponen dimuat
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'images'));
        const imageList = snapshot.docs.map((doc) => ({
          id: doc.id,
          imageUrl: doc.data().imageUrl,
        }));
        setImages(imageList);
      } catch (err) {
        console.error('❌ Error fetching images:', err);
      }
    };

    fetchImages();
  }, []);

  // Tambah gambar
  const handleAddImage = async (e) => {
    e.preventDefault();
    if (imageUrl.trim() === '') return;

    try {
      const docRef = await addDoc(collection(db, 'images'), { imageUrl });
      setImages((prev) => [...prev, { id: docRef.id, imageUrl }]);
      setImageUrl('');
    } catch (err) {
      console.error('❌ Error adding image:', err);
    }
  };

  // Hapus gambar
  const handleDeleteImage = async (id) => {
    try {
      await deleteDoc(doc(db, 'images', id));
      setImages((prev) => prev.filter((img) => img.id !== id));
    } catch (err) {
      console.error('❌ Error deleting image:', err);
    }
  };

  return (
    <div className="admin-gallery-wrapper">
      <h1 className="admin-gallery-title">Admin Gallery</h1>

      <form className="admin-form" onSubmit={handleAddImage}>
        <input
          type="text"
          placeholder="Paste Image URL here"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <button type="submit">Add Image</button>
      </form>

      <div className="admin-gallery-grid">
        {images.map((img) => (
          <div key={img.id} className="admin-gallery-item">
            <img src={img.imageUrl} alt="gallery" />
            <button onClick={() => handleDeleteImage(img.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminGallery;
