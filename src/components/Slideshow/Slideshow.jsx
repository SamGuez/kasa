import { useState } from "react";
import "./Slideshow.css";

export default function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = pictures.length;

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  if (total === 0) {
    return null;
  }

  return (
    <div className="slideshow">
      <img src={pictures[currentIndex]} alt={`Photo ${currentIndex + 1}`} />

      {total > 1 && (
        <>
          <button className="slideshow-arrow left" onClick={goPrev}>
            ‹
          </button>
          <button className="slideshow-arrow right" onClick={goNext}>
            ›
          </button>

          <div className="slideshow-counter">
            {currentIndex + 1}/{total}
          </div>
        </>
      )}
    </div>
  );
}
