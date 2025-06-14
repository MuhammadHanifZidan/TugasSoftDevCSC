import React from 'react'
import "./Footer.css";
import {Line} from '../../assets'
const footer = () => {
  return (
    <footer className='footer'>
      <div className="wrapper">
        <div className="footer-container">
          <div className="footer-content">
            <h3 className='logo'>LEUWIHEJO.COM</h3>
            <p style={{fontWeight: 400}}>Created by Muhammad Hanif Zidan and Hanif Zakran Effendi for the second major assignment in basic web programming.</p>
          </div>
          <div className="footer-content">
            <h3 >Contact Us</h3>
            <p style={{fontWeight: 400}}>+62 812-3456-7890</p>
            <a href="mailto: curugleuwihejo@gmail.com">curugleuwihejo@gmail.com</a>
          </div>
          <div className="footer-content">
            <h3 >Location</h3>
            <a href='https://maps.app.goo.gl/DrqNYCsfEWSBmuUC6' target='_blank'>Google maps</a>
          </div>
        </div>
        <div className="line" >
          <Line />
        </div>
        <div className="footer-copyright">© 2025 Curug Leuwi Hejo.</div>
      </div>
    </footer>
  )
}

export default footer
