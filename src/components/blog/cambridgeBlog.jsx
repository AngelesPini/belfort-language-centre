import React from 'react';
import Cambridgeimg from '../../multimedia/cambridge-partner-1.webp'
const CambridgeBlog = () => {
    return (

        <div className='blog-sub-category '>
            <div className="category-title">
                <h3>Inicio nuevos cursos preparación para First Certificate</h3>
                <p>El próximo 19 de septiembre iniciaremos los cursos de preparación para los exámenes FIRST CERTIFICATE. Uno de ellos se impartirá los lúnes y miercoles de 20:00h a 21:30h, el otro se hará los martes y jueves por la tarde de 18:50h a 20:20h.</p>
            </div>
            <div className="category-section">

                <h4><i>First Certificate in English </i> (FCE)</h4>
                <p><strong><i>El título First Certificate in English (FCE) </i></strong>se consigue tras realizar con éxito el examen ofrecido por la Universidad de Cambridge, equivale al nivel B2. El título confirma la capacidad de hablar el idioma inglés de manera eficiente en sociedad. Cada año más de cinco millones de personas se presentan a los exámenes de Cambridge debido a su gran reconocimiento internacional. Este título al igual que el resto de certificaciones de Cambridge están reconocidos por universidades y empresas alrededor del mundo, por lo que no dudes en que es una buena opción que te puede abrir puertas en un mundo cada vez mas globalizado, en el que el inglés es herramienta fundamental para la comunicación.</p>
                <p className='nota'>NOTA: El examen de Cambridge no entra en la cuota del curso, por lo que no es obligatorio presentarse al examen. El pago lo hacen únicamente quienes quieran finalmente presentarse al examen y conseguir la certificación.
                Si estás pensando en realizar éste o cualquier otro de los cursos que ofrecemos, no dudes en tomarte un tiempo y realizar nuestro <strong>examen online </strong>o presencial para averiguar exactamente en que nivel te encuentras, y de ésta manera te podremos ofrecer el curso que mejor se adapte a tu situación actual, y que te permita avanzar sin demora.</p>
            </div>
            <div className="contenedor-imagen">
                <img src={Cambridgeimg} alt="diez años de trayectoria" />          
            </div>
        </div>

    );
}

export default CambridgeBlog;
