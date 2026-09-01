import "./Banner.css";

export default function Banner({ image, text }) {
  return (
    <div className="banner">
      <img src={image} alt="banner" />
      {text && <h1>{text}</h1>}
    </div>
  );
}
