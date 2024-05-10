import curriculumImage from './curriculum.png'; 
import curriculumPdf from './curriculum.pdf'; 
import './about.css';

function About() {
    return (
        <div className="about-container">
            <div className="heading-section">
                <h1 className="formalHeading">Currículum</h1>
                <hr className="divider"/>
            </div>
            <div className="content">
                <img className="curriculumImage" src={curriculumImage} alt="Imatge del currículum" />
                <a href={curriculumPdf} download="Curriculum_Eloy_Diaz_Munoz.pdf" className="btn-download">Descarrega el currículum</a>
            </div>
        </div>
    );
}

export default About;
