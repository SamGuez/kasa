import { useState } from "react";
import "./Collapse.css";

export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>

        {/* Chevron EXACT de la maquette Kasa (non rempli, contour fin) */}
        <svg
          className={`collapse-arrow ${isOpen ? "open" : ""}`}
          width="24"
          height="14"
          viewBox="0 0 24 14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2L12 12L22 2"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {isOpen && (
        <div className="collapse-content">
          {Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
}
