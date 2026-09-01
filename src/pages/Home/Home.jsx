import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";

export default function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

  return (
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
  );
}
