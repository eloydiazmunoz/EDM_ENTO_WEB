import captura from './Captura.png';
import './presentacio.css';
function Presentacio() {
    return (
      <div className="presentacio">
        <h1 className="header" > ELOY DIAZ MUÑOZ </h1>
        <p className="text">Sóc un professional introspectiu amb passió pel treball en equip. Motivat pels reptes tecnològics en psicologia clínica,sóc autodidacta, versàtil i proactiu, sempre amb l'objectiu d'excel·lir professionalment.</p>
        <img className="imatge"src={captura} alt="imagen"/> 
      </div>
    )
  }
  
  export default Presentacio;