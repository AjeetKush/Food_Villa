// Shimmer.js
import React from 'react';

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {Array.from({ length: 24 }, (_, index) => (
        <div
          key={index}
          className="shimmer-card m-2"
          style={{
            width: '200px', // Set your preferred width
            height: '300px', // Set your preferred height
            background:
              'linear-gradient(to right, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
            borderRadius: '8px', // Add rounded corners if desired
            overflow: 'hidden',
          }}
        >
          {/* Shimmer Image Placeholder */}
          <div
            className="shimmer-image w-full h-32 mb-2"
            style={{
              background:
                'linear-gradient(to right, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 1.5s infinite',
            }}
          ></div>

          {/* Shimmer Text Placeholder */}
          <div
            className="shimmer-text w-full h-8"
            style={{
              background:
                'linear-gradient(to right, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 1.5s infinite',
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
