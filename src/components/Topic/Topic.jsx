import React, { useEffect, useRef } from 'react';
import { Line, Swimming, Trekking } from '../../assets';
import './topic.css';

const Topic = () => {

  return (
    <div className='wrapper' >
      <div className='title' >
        <h2>Adventure Awaits</h2>
      </div>
      <div className="line" >
        <Line />
      </div>
      <div className="gallery-container">
        <div className="topic-image" >
          <img src={Swimming} alt="Swimming at Curug Leuwi Hejo" />
        </div>
        <div className="topics" >
          <p>
            <span style={{color: '#37B7C3'}}>Swimming</span> at Curug Leuwi Hejo offers a magical experience in nature's own paradise. The waterfall's crystal-clear emerald pools invite visitors to take a refreshing dip, with water depths ranging from 1.5 to 3 meters. The gentle cascade provides a natural massage, while designated safe zones marked by ropes ensure a secure swimming experience, especially on weekends when lifeguards are present. For the best experience, visit between 10 AM and 2 PM when sunlight enhances the water's vibrant hues. Don’t forget to bring a waterproof phone case and non-slip sandals, and avoid jumping from heights due to hidden rocks.
          </p>
        </div>
        <div className="topics" >
          <p>
            <span style={{color: '#37B7C3'}}>Trekking</span> to Curug Leuwi Hejo is an adventure through lush greenery, leading to the breathtaking waterfall. Choose between two routes: the easy 15-minute paved path, accessible even for beginners, or the more adventurous 45-minute forest trail featuring bamboo bridges and stunning mini waterfalls along the way. The trek rewards hikers with sightings of wild orchids, ferns, and occasional birdwatching opportunities. For safety, wear sturdy trekking shoes and consider hiring a local guide for IDR 50K, especially during the rainy season when trails can become muddy. Whether you're seeking a leisurely walk or a thrilling hike, the journey to Curug Leuwi Hejo is as memorable as the destination itself.
          </p>
        </div>
        <div className="topic-image" >
          <img src={Trekking} alt="Trekking to Curug Leuwi Hejo" />
        </div>
      </div>
    </div>
  )
}

export default Topic;