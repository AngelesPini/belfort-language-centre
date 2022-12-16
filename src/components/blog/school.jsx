import React from 'react';
import CursoVernao from '../../multimedia/curso.webp'
const School = () => {
    return (
        <div className='blog-sub-category'>
            <div className="category-title">
                <h3>Inicio de curso 2022-2023</h3>

            </div>
            <div className="category-section">
            <p>El próximo 19 de septiembre iniciaremos los cursos presenciales para los diferentes niveles de niños, adolescentes y adultos, con distintos horarios de tarde para que los alumnos puedan compaginar con otras actividades.</p>
                <p>Si estás pensando en realizar alguno de los cursos que ofrecemos, no dudes en tomarte un tiempo y realizar nuestro <strong><i>examen online</i></strong> o presencial para averiguar exactamente en que nivel te encuentras, y de ésta manera te podremos ofrecer el curso que mejor se adapte a tu situación actual, y que te permita avanzar sin demora.</p>
            </div>
            <div className="contenedor-imagen">
                <img src={CursoVernao} alt="diez años de trayectoria" />          
            </div>
        </div>
    );
}

export default School;
