import React, { useState } from "react";
import "./carousel.css";

const images = [
  "https://picsum.photos/id/1018/800/400",
  "https://picsum.photos/id/1025/800/400",
  "https://picsum.photos/id/1035/800/400",
  "https://picsum.photos/id/1043/800/400",
];

function Carousel({ interval = 3000 }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <img
          key={activeIndex}
          src={images[activeIndex]}
          alt={`Slide ${activeIndex}`}
          className="carousel-image"
        />
      </div>

      <div className="carousel-dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === activeIndex ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}

export { Carousel };
