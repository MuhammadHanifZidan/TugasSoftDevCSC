import React from 'react'
import "./hero.css";
import { Link } from 'react-router-dom';
const hero = () => {
  return (
    <div className='header'>
      <div className='wrapper'>
        <h3 className='sub-title'>Step Into a World of Pristine Waterfalls and Emerald Greenery</h3>
        <h1>CURUG LEUWI HEJO</h1>
        <Link to="/gallery" className='cta'>See Photos</Link>
      </div>
    </div>
  )
}

export default hero
