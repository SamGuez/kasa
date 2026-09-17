import "./Banner.css";

export default function Banner({ image, text }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      {text && <h1>{text}</h1>}
    </div>
  );
}
