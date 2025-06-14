import React from 'react';
import "./Facility.css";
import { Parking, Food, Toilet, Tube, Hanger, FirstAid, Picnic, Camera } from '../../assets';

const Facility = () => {
  const facilities = [
    {
      icon: Parking,
      title: "PARKING AREA",
      description: "Secure parking space for motorcycles and cars with 24/7 security",
      info: ["Rp5.000 (Bike)", "Rp10.000 (Car)"]
    },
    {
      icon: Food,
      title: "FOOD STALLS",
      description: "Traditional Indonesian food and refreshing drinks available throughout the day",
      info: ["Nasi goreng, mie, coconut water"]
    },
    {
      icon: Toilet,
      title: "TOILET",
      description: "Clean restroom facilities available for all visitors",
      info: ["Available (bring your own tissue)"]
    },
    {
      icon: Tube,
      title: "SWIM TUBE",
      description: "Safe swimming tubes for enjoying the natural pools",
      info: ["Rp15.000/hour"]
    },
    {
      icon: Hanger,
      title: "DRESSING ROOM",
      description: "Private changing areas with lockers for your belongings",
      info: ["Free"]
    },
    {
      icon: FirstAid,
      title: "FIRST AID",
      description: "Basic medical assistance and emergency care available",
      info: ["Free"]
    },
    {
      icon: Picnic,
      title: "PICNIC AREA",
      description: "Designated areas with tables and benches for family gatherings",
      info: ["Free"]
    },
    {
      icon: Camera,
      title: "PHOTO SPOT",
      description: "Marked scenic locations perfect for memorable photos",
      info: ["Free"]
    }
  ];

  return (
    <div className="facility-wrapper">
      <div className="facility-container">
        <h1 className='facility-title'>FACILITY</h1>
        <h3 className='fac-sub-title'>
          Discover all the amazing facilities available at Curug Leuwi Hejo to make your visit comfortable and memorable
        </h3>
        <div className="facility-content">
          {facilities.map((facility, index) => (
            <div className="facility-card" key={index}>
              <div className='icon'>
                <img src={facility.icon} alt={facility.title} />
              </div>
              <h3>{facility.title}</h3>
              <p className="card-desc">{facility.description}</p>
              <div className="card-info">
                {facility.info.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facility;