import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Banner from "../../components/Banner/Banner";
import bannerHome from "../../assets/banner-home.svg";   // IMPORT SVG
import "./Home.css";

export default function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

  return (
    <>
      <Banner 
        image={bannerHome}
        text="Chez vous, partout et ailleurs"
      />

      <div className="home">
        {properties.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            cover={item.cover}
          />
        ))}
      </div>
    </>
  );
}
