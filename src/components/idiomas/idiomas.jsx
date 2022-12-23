import React from 'react';
import CardsIdiomas from '../Cards/cardsIdiomas';
import Alumnos from '../alumnos/alumnos';

const Idiomas = () => {
    return (

        <div className="body_idiomas">


          <div className='header_idiomas'>
            <h1>ÉCHALE UN OJO</h1>
            <h2>A <strong>NUESTRA OFERTA</strong> DE FORMACIÓN ONLINE PARA IDIOMAS</h2>
            </div>  
            <div className="main_index idiomas-index">
                <div className="idiomas">
                <CardsIdiomas/>                    
                </div>
                <div className="alumnos">
                    <Alumnos/>
                </div>

            </div>

            </div>


    );
}

export default Idiomas;
