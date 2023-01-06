import React from 'react';
import Form from '../form/form';
import Alumnos from '../alumnos/alumnos';
import CarrouselMobile from '../crrouselMobile/carrouselMobile';
import CardsPruebas from '../Cards/cardsPruebas';
const Cambridge = () => {
    return (
        <div className="home">
            <div className="body-cambridge">

            <div className='header_index header_cambridge'>
                <div className="display_flex-container">
                    <div className="container_title">
                        <h2>LA CERTIFICACIÓN MÁS PROFESIONAL</h2>
                        <h1>VALIDA TU INGLÉS AHORA</h1>
                        <p className='light'>Con el first certificate in english podrás prepararte para el próximo FCE </p>
                        <p className='light-dark'>(la máxima certificación en inglés)</p>
                    </div>
                    <div className="container_form">
                        <Form/>
                    </div>
                </div>
            </div>
            <div className="main_index">
                <h5>PLATAFORMAS PARA ALUMNOS</h5>
            <CardsPruebas/>
                <div className="alumnos cambridge-alumnos">
                    <Alumnos/>
                </div>
                <CarrouselMobile/>
            </div>
                            
            </div>
        </div>
    );
}

export default Cambridge;
