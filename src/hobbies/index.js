import React from "react";
import "./hobbies.scss";
import footballImage from "./images/football.jpeg";
import gymImage from "./images/gym.jpeg";
import gamingImage from "./images/gaming.JPG";

function Hobbies() {
  return (
    <div className="hobbies">
      <h2 className="hobbies-heading">Aficions</h2>

      <div className="hobby-item">
        <h3 className="hobby-title">Futbol</h3>
        <img src={footballImage} alt="Futbol" className="hobby-image" />
        <p className="hobby-text">
          Gaudeixo jugant a futbol en el meu temps lliure, ja sigui en un partit
          amb amics o simplement entrenant.
        </p>
      </div>

      <div className="hobby-item">
        <h3 className="hobby-title">Gimnàs</h3>
        <img src={gymImage} alt="Gimnàs" className="hobby-image" />
        <p className="hobby-text">
          M'agrada mantenir-me en forma i millorar la meva salut mitjançant
          l'exercici regular al gimnàs.
        </p>
      </div>

      <div className="hobby-item">
        <h3 className="hobby-title">Videojocs</h3>
        <img src={gamingImage} alt="Videojocs" className="hobby-image" />
        <p className="hobby-text">
          Els videojocs són una bona manera de relaxar-se i gaudir amb amics en
          línia.
        </p>
      </div>
    </div>
  );
}

export default Hobbies;
