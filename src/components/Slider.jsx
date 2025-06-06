import React, { useState, useEffect } from 'react';
import './Slider.css';

const images = [
  '/slider1.jpg',
  '/slider2.jpg',
  '/slider3.jpg'
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className="slider-img"
          />
        ))}
      </div>

      <button className="nav-button left" onClick={goToPrev}>&#10094;</button>
      <button className="nav-button right" onClick={goToNext}>&#10095;</button>

      <div className="dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
