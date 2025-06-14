import React, { useState, useEffect } from 'react';
import { Star } from '../../assets'; 
import './Form.css';
import {db} from '../../Firebase';
import { collection, addDoc, query, orderBy } from 'firebase/firestore';

const Form = () => {
  const [name, setName] = useState('');
  const [testimonial, setTestimonial] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [testimonials, setTestimonials] = useState([]);

useEffect(() => {
  const fetchTestimonials = async () => {
    try {
      const q = query(collection(db, "testimonials"), orderBy("timestamp", "desc"));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTestimonials(data);
    } catch (error) {
      console.error("❌ Error fetching testimonials: ", error);
    }
  };

  fetchTestimonials();
}, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "testimonials"), {
        name,
        testimonial,
        rating
      });
      console.log("✅ Testimonial saved with ID:", docRef.id);
      setSubmitted(true);
    } catch (error) {
      console.error("Error adding testimonial: ", error);
    }
  };

  if (submitted) {
    return (
      <div className="testimonial-wrapper">
        <h1 className="testimonial-title">TESTIMONIALS</h1>
        <div className="thank-you-message">
          <h2>Thank you for your feedback!</h2>
          <p>We appreciate your time and valuable input.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="testimonial-wrapper">
      <h1 className="testimonial-title">TESTIMONIALS</h1>
      <div className="form-container">
        <h2>Share your experience</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="testimonial">Your Testimonial:</label>
            <textarea
              id="testimonial"
              value={testimonial}
              onChange={(e) => setTestimonial(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Rate your experience:</label>
            <div className="rating-container">
              {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                className="star-button"
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => setRating(star)}
              >
              <Star filled={star <= (hoverRating || rating)} />
              </button>
              ))}
            </div>
          </div>     
          <button type="submit" className="submit-button">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default Form;