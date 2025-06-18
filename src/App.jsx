import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, FacilityPage, GalleryPage, TestimonialPage } from "./pages";
import { SignIn, SignUp, AdminGallery } from './components';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop'; 
import { auth, db } from './Firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const App = () => {
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const docRef = doc(db, 'users', user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserRole(docSnap.data().role); // "admin" / "user"
          } else {
            setUserRole("user");
          }
        } catch (error) {
          console.error("❌ Error getting role:", error);
          setUserRole("user");
        }
      } else {
        setUserRole(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={userRole === "admin" ? <AdminGallery /> : <GalleryPage />} />
          <Route path="/testimonial" element={<TestimonialPage />} />          
          <Route path="/facility" element={<FacilityPage />} />
          <Route path="/sign_in" element={<SignIn />} />
          <Route path="/sign_up" element={<SignUp />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
