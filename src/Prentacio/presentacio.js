import captura from "./Captura.png";
import linkedinIcon from "./linkedin.png";
import "./presentacio.scss";

function Presentacio() {
  return (
    <div className="presentacio">
      <div className="header-section">
        <h1 className="header">Eloy Diaz Muñoz</h1>
      </div>
      <div className="content">
        <p className="text">
          Sóc un professional introspectiu amb passió pel treball en equip.
          Motivat pels reptes tecnològics en psicologia clínica, sóc
          autodidacte, versàtil i proactiu, sempre amb l'objectiu d'excel·lir
          professionalment.
        </p>
        <img className="imatge" src={captura} alt="Imatge de presentació" />
        <a
          href="https://www.linkedin.com/in/eloy-diaz-mu%C3%B1oz-87b26023b/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-linkedin"
        >
          <img src={linkedinIcon} alt="LinkedIn" className="linkedin-icon" />{" "}
          Contacta amb mi en LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Presentacio;
