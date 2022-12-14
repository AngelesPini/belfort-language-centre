import React from 'react';

import Glider from 'react-glider';
import 'glider-js/glider.min.css';
import ResenaUno from '../../multimedia/resena-mob-1.jpeg'
import ResenaDos from '../../multimedia/resena-mob-2.jpeg'
import ResenaTres from '../../multimedia/resena-mob-3.jpeg'
import ResenaCuatro from '../../multimedia/resena-mob-4.jpeg'
import ResenaCinco from '../../multimedia/resena-mob-5.jpeg'
import ResenaSeis from '../../multimedia/resena-mob-6.jpeg'
import ResenaSiete from '../../multimedia/resena-mob-7.jpeg'
import ResenaOcho from '../../multimedia/resena-mob-8.jpeg'
import ResenaNueve from '../../multimedia/resena-mob-9.jpeg'
const CarrouselMobile = () => {
    return (
        <div className='gliderMobile'>
            <Glider
            draggable
            hasDots
            slidesToShow={1}
            slidesToScroll={1}
            >
            <div>
                <img src={ResenaUno} alt="" />
            </div>
            <div>
                <img src={ResenaDos} alt="" />
            </div>
            <div>
                <img src={ResenaTres} alt="" />
            </div>
            <div>
                <img src={ResenaCuatro} alt="" />
            </div>
            <div>
                <img src={ResenaCinco} alt="" />
            </div>
            <div>
                <img src={ResenaSeis} alt="" />
            </div>
            <div>
                <img src={ResenaSiete} alt="" />
            </div>
            <div>
                <img src={ResenaOcho} alt="" />
            </div>
            <div>
                <img src={ResenaNueve} alt="" />
            </div>
            </Glider>
        </div>
    );
}

export default CarrouselMobile;
