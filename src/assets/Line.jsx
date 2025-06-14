// src/components/icons/LineIcon.jsx
import React from 'react';

const Line = ({ color = 'white', height = '1px' }) => (
  <svg
    width="100%"              
    height={height}
    viewBox="0 0 1180 1"      
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <rect width="1180" height="4" rx="2" fill={color} />
  </svg>
);

export default Line;
