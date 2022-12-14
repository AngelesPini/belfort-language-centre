import React from 'react';
import Form from '../form/form';
import CardsModalidades from '../Cards/cardsModalidades';
import Alumnos from '../alumnos/alumnos';

import CarrouselMobile from '../crrouselMobile/carrouselMobile';
const Home = () => {
    return (
        <div className="home">
            <div className="body_index">
            <div className='header_index'>
                <div className="display_flex-container">
                    <div className="container_title">
                        <h2>CLASES PERSONALIZADAS</h2>
                        <h1>HABLA COMO EXPERTO INGLÉS USA/UK </h1>
                        <p className='light'>nuevas vacantes el próximo 15/10</p>
                        <p className='strong'>reserva hoy y obtén el 10% de dscto.</p>
                    </div>
                    <div className="container_form">
                        <Form/>
                    </div>
                </div>
            </div>
            <div className="main_index">
                <CardsModalidades/>
                <div className="alumnos">
                    <Alumnos/>
                </div>
            </div>

            </div>
        <CarrouselMobile/>

        </div>

    );
}

export default Home;
