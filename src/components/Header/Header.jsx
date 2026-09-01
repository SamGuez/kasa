import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kasa" className="header-logo" />

      <nav className="header-nav">
        <NavLink to="/" className="nav-link">Accueil</NavLink>
        <NavLink to="/about" className="nav-link">À propos</NavLink>
      </nav>
    </header>
  );
}
