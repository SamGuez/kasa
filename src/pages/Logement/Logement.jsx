import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Slideshow from "../../components/Slideshow/Slideshow";
import Collapse from "../../components/Collapse/Collapse";
import "./Logement.css";

export default function Logement() {
  const { id } = useParams();
  const [property, setProperty] = useState(null); // null = pas encore chargé

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id.toString() === id);

        if (!found) {
          setProperty(undefined); // undefined = ID incorrect
        } else {
          setProperty(found); // logement trouvé
        }
      });
  }, [id]);

  // ⭐ Étape 9 : redirection SI ET SEULEMENT SI ID incorrect
  if (property === undefined) {
    return <Navigate to="/error" replace />;
  }

  // ⭐ Pendant le chargement → on attend
  if (property === null) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="logement-page">
      <Slideshow pictures={property.pictures} />

      <div className="logement-header">
        <div className="logement-info">
          <h1>{property.title}</h1>
          <p>{property.location}</p>

          <div className="tags">
            {property.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="host-rating">
          <div className="host">
            <p>{property.host.name}</p>
            <img src={property.host.picture} alt={property.host.name} />
          </div>

          <div className="rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={i < property.rating ? "star full" : "star empty"}>
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="logement-collapses">
        <Collapse title="Description" content={property.description} />
        <Collapse
          title="Équipements"
          content={
            <ul>
              {property.equipments.map((eq, index) => (
                <li key={index}>{eq}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}
