import "./Card.css";

export default function Card({ title, cover }) {
  return (
    <div className="card">
      <img src={cover} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}
