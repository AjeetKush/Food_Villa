// Shimmer.js
import React from 'react';

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {Array.from({ length: 20 }, (_, index) => (
        <div key={index} className="shimmer-card m-2"></div>
      ))}
    </div>
  );
};

export default Shimmer;