import React from 'react';
import './Information.css';

const Information = () => {
  return (
    <div className="wrapper">
      <div className="information" >
        <div className="info-title">
          <h3>Important Information</h3>
        </div>
        <div className="info-container">
          <div className='card-group'>
            <h3 className='important-title'>Operating Hours</h3>
            <div className="important-info">
              <p>Daily: 8:00 AM - 6:00 PM</p>
              <p>Last entry: 5:00 PM</p>
            </div>
          </div>
          <div className='card-group'>
            <h3 className='important-title'>Entry Fee</h3>
            <div className="important-info">
              <p>Adults: Rp 25.000</p>
              <p>Children: Rp 15.000</p>
            </div>
          </div>
          <div className='card-group'>
            <h3 className='important-title'>Safety Rules</h3>
            <div className="important-info">
              <p>Swimming at your own risk</p>
              <p>Children must be supervised</p>
            </div>
          </div>
          <div className='card-group'>
            <h3 className='important-title'>Contact Info</h3>
            <div className="important-info">
              <p>Phone: +62 812-3456-7890</p>
              <p>Email: curugleuwihejo@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;