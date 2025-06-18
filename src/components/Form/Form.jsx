import React, { useState, useEffect } from 'react';
import { Star } from '../../assets'; 
import './Form.css';
import { db, auth } from '../../Firebase';
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
} from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

const Form = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [name, setName] = useState('');
  const [testimonial, setTestimonial] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [userTestimonial, setUserTestimonial] = useState(null);
  const [editing, setEditing] = useState(false);

  // Check login
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setCurrentUser(user);
        setName(user.displayName || user.email);
      } else {
        setCurrentUser(null);
      }
    });
    return unsubscribe;
  }, []);

  // Load testimonial for logged-in user
  useEffect(() => {
    if (!currentUser) return;
    const fetchUserTestimonial = async () => {
      const q = query(
        collection(db, "testimonials"),
        where("uid", "==", currentUser.uid)
      );
      const snapshot = await getDocs(q);
      if (!snapshot.empty) {
        const docData = snapshot.docs[0];
        setUserTestimonial({ id: docData.id, ...docData.data() });
        setTestimonial(docData.data().testimonial);
        setRating(docData.data().rating);
      }
    };
    fetchUserTestimonial();
  }, [currentUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentUser) return;

    if (editing && userTestimonial) {
      const docRef = doc(db, "testimonials", userTestimonial.id);
      await updateDoc(docRef, {
        testimonial,
        rating
      });
      setEditing(false);
    } else {
      const newDoc = await addDoc(collection(db, "testimonials"), {
        uid: currentUser.uid,
        name,
        testimonial,
        rating,
        timestamp: new Date()
      });
      setUserTestimonial({
        id: newDoc.id,
        uid: currentUser.uid,
        name,
        testimonial,
        rating
      });
    }
  };

  const handleDelete = async () => {
    if (userTestimonial) {
      await deleteDoc(doc(db, "testimonials", userTestimonial.id));
      setUserTestimonial(null);
      setTestimonial('');
      setRating(0);
    }
  };

  if (!currentUser) {
    return (
      <div className="testimonial-wrapper">
        <h1 className="testimonial-title">TESTIMONIALS</h1>
        <div className="form-container">
          <p>Please <strong>sign in</strong> to submit your testimonial.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="testimonial-wrapper">
      <h1 className="testimonial-title">TESTIMONIALS</h1>
      <div className="form-container">
        <h2>{userTestimonial ? "Your Testimonial" : "Share Your Experience"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="testimonial">Your Testimonial:</label>
            <textarea
              id="testimonial"
              value={testimonial}
              onChange={(e) => setTestimonial(e.target.value)}
              required
              disabled={!editing && userTestimonial}
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
                  onMouseEnter={() => editing && setHoverRating(star)}
                  onMouseLeave={() => editing && setHoverRating(0)}
                  onClick={() => editing && setRating(star)}
                  disabled={!editing && userTestimonial}
                >
                  <Star filled={star <= (hoverRating || rating)} />
                </button>
              ))}
            </div>
          </div>

          {(editing || !userTestimonial) && (
            <button type="submit" className="submit-button">
              {editing ? "Save Changes" : "Submit"}
            </button>
          )}

          {userTestimonial && !editing && (
            <div className="testimonial-actions">
              <button type="button" onClick={() => setEditing(true)} className="edit-button">Edit</button>
              <button type="button" onClick={handleDelete} className="delete-button">Delete</button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
