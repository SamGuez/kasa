import { useState } from "react";
import "./Slideshow.css";

export default function Slideshow({ pictures }) {
  const [index, setIndex] = useState(0);

  if (!pictures || pictures.length === 0) {
    return null;
  }

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % pictures.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + pictures.length) % pictures.length);
  };

  const hasMultiple = pictures.length > 1;

  return (
    <div className="slideshow">
      <img
        src={pictures[index]}
        alt="logement"
        className="slideshow-image"
      />

      {hasMultiple && (
        <>
          <button className="arrow left" onClick={prevSlide}>‹</button>
          <button className="arrow right" onClick={nextSlide}>›</button>

          <div className="bullets">
            {pictures.map((_, i) => (
              <span
                key={i}
                className={i === index ? "bullet active" : "bullet"}
              ></span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
