import React from 'react';
import Diez from '../../multimedia/celebrating.webp'

const Diezanos = () => {
    return (
        <div className='blog-sub-category'>
            <div className="category-title">
                <h3>10 años dedicados a la enseñanza de idiomas</h3>
            </div>
            <div className="category-section">
                <h4>Septiembre 2022</h4>
                <p>A cada uno de ustedes, los que nos prefirieron, los que nos eligieron, los que nos recomendaron... Los que nos han apoyado tanto durante todos estos años. Les dedicamos nuestro feliz aniversario y nuestro agradecimiento más sincero. </p>
            </div>
            <div className="contenedor-imagen">
                <img src={Diez} alt="diez años de trayectoria" />          
            </div>
        </div>
    );
}

export default Diezanos;
