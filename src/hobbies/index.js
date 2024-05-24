import React from "react";
import "./hobbies.scss";
import footballImage from "./images/football.jpeg";
import gymImage from "./images/gym.jpeg";
import gamingImage from "./images/gaming.JPG";
import travelImage from "./images/travel.jpg"; // Imatge per a Viatjar
import programmingImage from "./images/programming.jpg"; // Imatge per a Programació

function Aficions() {
  return (
    <section className="contenidor-aficions">
      <h2 className="titol-aficions">Les Meves Aficions</h2>

      <article className="element-aficio futbol">
        <img src={footballImage} alt="Futbol" className="imatge-aficio" />
        <div className="info-aficio">
          <h3 className="titol-aficio">Futbol</h3>
          <p className="descripcio-aficio">
            Gaudeixo jugant al futbol en el meu temps lliure, ja sigui en un
            partit amb amics o simplement entrenant.
          </p>
        </div>
      </article>

      <article className="element-aficio gimnàs">
        <img src={gymImage} alt="Gimnàs" className="imatge-aficio" />
        <div className="info-aficio">
          <h3 className="titol-aficio">Gimnàs</h3>
          <p className="descripcio-aficio">
            M'agrada mantenir-me en forma i millorar la meva salut mitjançant
            l'exercici regular al gimnàs.
          </p>
        </div>
      </article>

      <article className="element-aficio videojocs">
        <img src={gamingImage} alt="Videojocs" className="imatge-aficio" />
        <div className="info-aficio">
          <h3 className="titol-aficio">Videojocs</h3>
          <p className="descripcio-aficio">
            Els videojocs són una bona manera de relaxar-se i gaudir amb amics
            en línia.
          </p>
        </div>
      </article>

      {/* Nou Hobby: Viatjar */}
      <article className="element-aficio viatjar">
        <img src={travelImage} alt="Viatjar" className="imatge-aficio" />
        <div className="info-aficio">
          <h3 className="titol-aficio">Viatjar</h3>
          <p className="descripcio-aficio">
            Explorar nous llocs i cultures és una de les meves passions.
            M'encanta viatjar i descobrir el món.
          </p>
        </div>
      </article>

      {/* Nou Hobby: Programació */}
      <article className="element-aficio programació">
        <img
          src={programmingImage}
          alt="Programació"
          className="imatge-aficio"
        />
        <div className="info-aficio">
          <h3 className="titol-aficio">Programació</h3>
          <p className="descripcio-aficio">
            La programació és més que una afició per a mi, és una forma de
            crear, innovar i solucionar problemes.
          </p>
        </div>
      </article>
    </section>
  );
}

export default Aficions;
