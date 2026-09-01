import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";

export default function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Banner
        image="/banner-home.jpg"
        text="Chez vous, partout et ailleurs"
      />

      <div className="cards-container">
        {properties.map((property) => (
          <Card
            key={property.id}
            title={property.title}
            cover={property.cover}
          />
        ))}
      </div>
    </>
  );
}
