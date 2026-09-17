import Collapse from "../../components/Collapse/Collapse";
import Banner from "../../components/Banner/Banner";
import bannerAbout from "../../assets/banner-about.svg";   // IMPORT SVG
import "./About.css";

export default function About() {
  return (
    <>
      <Banner 
        image={bannerAbout}
        text=""
      />

      <div className="about">
        <Collapse title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale..." /> 
        <Collapse title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa..." />
        <Collapse title="Service" content="Nos équipes se tiennent à votre disposition pour vous fournir..." /> 
        <Collapse title="Sécurité" content="La sécurité est la priorité de Kasa..." /> 
      </div>
    </>
  );
}
