import BannerAbout from "../../components/BannerAbout/BannerAbout";
import Collapse from "../../components/Collapse/Collapse";
import "./About.css";

export default function About() {
  return (
    <>
      <BannerAbout />

      <div className="about">
        <Collapse title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale..." /> 
        <Collapse title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa..." />
        <Collapse title="Service" content="Nos équipes se tiennent à votre disposition pour vous fournir..." /> 
        <Collapse title="Sécurité" content="La sécurité est la priorité de Kasa..." /> 
      </div>
    </>
  );
}
