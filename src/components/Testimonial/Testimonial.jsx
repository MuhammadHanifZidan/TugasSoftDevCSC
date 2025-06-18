import React, { useState, useEffect } from 'react';
import "./testimonial.css";
import { Line, Star } from '../../assets';
import { db } from '../../Firebase';
import { collection, getDocs } from 'firebase/firestore';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "testimonials"));
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setTestimonials(data);
      } catch (error) {
        console.error("❌ Error fetching testimonials: ", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="wrapper">
      <div className="testimonial">
        <div className="title">
          <h2>Real Stories, Real Adventure</h2>
        </div>
        <div className="line">
          <Line />
        </div>
        <div className="test-container">
          {testimonials.length > 0 ? (
            testimonials.map((item) => (
              <div key={item.id} className="test-sec">
                <div className="img">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} filled={i < item.rating} />
                  ))}
                </div>
                <div className="test">
                  <p style={{ fontWeight: 400 }}>"{item.testimonial}"</p>
                </div>
                <div className="name">
                  <p>- {item.name}</p>
                </div>
              </div>
            ))
          ) : (
            <p style={{ textAlign: 'center' }}>Belum ada testimoni.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
