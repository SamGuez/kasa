import BannerAbout from "../../components/BannerAbout/BannerAbout";
import Collapse from "../../components/Collapse/Collapse";
import "./About.css";

export default function About() {
  return (
    <>
      <BannerAbout />

      <div className="about">
        <Collapse title="Fiabilité">
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale...</p>
        </Collapse>

        <Collapse title="Respect">
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa...</p>
        </Collapse>

        <Collapse title="Service">
          <p>Nos équipes se tiennent à votre disposition pour vous fournir...</p>
        </Collapse>

        <Collapse title="Sécurité">
          <p>La sécurité est la priorité de Kasa...</p>
        </Collapse>
      </div>
    </>
  );
}
