import captura from './Captura.png';
import './presentacio.css';

function Presentacio() {
    return (
        <div className="presentacio">
            <div className="header-section">
                <h1 className="header">Eloy Diaz Muñoz</h1>
            </div>
            <div classname="content">
                <p className="text">
                    Sóc un professional introspectiu amb passió pel treball en equip. Motivat pels reptes tecnològics en psicologia clínica, sóc autodidacte, versàtil i proactiu, sempre amb l'objectiu d'excel·lir professionalment.
                </p>
                <img className="imatge" src={captura} alt="Imatge de presentació"/>
            </div>
        </div>
    );
}

export default Presentacio;
