import { Link } from "react-router-dom";
import "./Error404.css";

export default function Error404() {
  return (
    <div className="error-page">
      <h1 className="error-code">404</h1>
      <p className="error-message">
        Oups ! La page que vous demandez n'existe pas.
      </p>

      <Link to="/" className="error-link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

