import curriculum from './curriculum.png';
import './about.css';

function About() {
    return (
        <div className="about-container">
            <div className="heading-section">
                <h1 className="formalHeading">Currículum</h1>
                <hr className="divider"/>
            </div>
            <div className="content">
                <img className="curriculumImage" src={curriculum} alt="Imatge del currículum" />
                <a href={curriculum} download className="btn-download">Descarrega el currículum</a>
            </div>
        </div>
    );
}

export default About;
