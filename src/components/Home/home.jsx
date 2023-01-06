import React from 'react';
import CardsModalidades from '../Cards/cardsModalidades';
import Alumnos from '../alumnos/alumnos';


import ContactUs from '../form/form';
 
import CarrouselMobile from '../crrouselMobile/carrouselMobile';
const Home = () => {
    return (
        <div className="home">
            <div className="body_index">
            <div className='header_index'>
                <div className="display_flex-container">
                    <div className="container_title">
                        <h2>Let’s enjoy english!</h2>
                        <h1>TU ACADEMIA DE IDIOMAS EN BARCELONA</h1>
                        <p className='light'>Para niños, jóvenes y adultos</p>
                        <p className='strong'>Somos centro preparador oficial de exámenes de Cambridge</p>
                    </div>
                    <div className="container_form">
                        <ContactUs/>
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
