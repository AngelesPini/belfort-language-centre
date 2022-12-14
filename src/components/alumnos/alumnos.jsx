import React from 'react';
import Glider from 'react-glider';
import 'glider-js/glider.min.css';
import { Link } from 'react-router-dom';

// recursos
import ResenaUno from '../../multimedia/resena-1.png'
import ResenaDos from '../../multimedia/resena-2.png'
import ResenaTres from '../../multimedia/resena-3.png'
import ResenaCuatro from '../../multimedia/resena-4.png'
import ResenaCinco from '../../multimedia/resena-5.png'
import ResenaSeis from '../../multimedia/resena-6.png'

const Alumnos = () => {

    const handleClick = ()=>{
        window.open('https://g.co/kgs/Z9JbCf', '_blank')
        }
        const handleClick2 = ()=>{
            window.open('https://g.co/kgs/FAJseN', '_blank')
        }
        const handleClick3 = ()=>{
            window.open('https://g.co/kgs/FwSZoB', '_blank')
        }
        const handleClick4 = ()=>{
            window.open('https://g.co/kgs/arRcDP', '_blank')
        }
        const handleClick5 = ()=>{
            window.open('https://g.co/kgs/wQ5Fs7', '_blank')
        }
        const handleClick6 = ()=>{
            window.open('https://g.co/kgs/dZe2fS', '_blank')
        }
    return (
        <div className='glider-alumnos'>
            <h5>NUESTRAS VALORACIONES</h5>
            <Glider
            draggable
            hasArrows
            hasDots
            slidesToShow={1}
            slidesToScroll={1}
            >
            <div className='contenedor-card-glider'>
                <div className='contenedor-info-card-alumnos'>
                <img src={ResenaUno} alt="" />
                <div className="texto-card-alumnos">
                    <span className='span-card' onClick={() => handleClick()}>VER EN GOOGLE</span>

                </div>
                </div>
            </div>
            <div className='contenedor-card-glider'>
                <div className='contenedor-info-card-alumnos'>
                <img src={ResenaDos} alt="" />
                <div className="texto-card-alumnos">
                <span className='span-card' onClick={() => handleClick2()}>VER EN GOOGLE</span>

                </div>
                </div>
            </div>
            <div className='contenedor-card-glider'>
                <div className='contenedor-info-card-alumnos'>
                <img src={ResenaTres} alt="" />
                <div className="texto-card-alumnos">
                <span className='span-card' onClick={() => handleClick3()}>VER EN GOOGLE</span>
                </div>
                </div>
            </div>
            <div className='contenedor-card-glider'>
                <div className='contenedor-info-card-alumnos'>
                <img src={ResenaCuatro} alt="" />
                <div className="texto-card-alumnos">
                <span className='span-card' onClick={() => handleClick4()}>VER EN GOOGLE</span>
                </div>
                </div>
            </div>
            <div className='contenedor-card-glider'>
                <div className='contenedor-info-card-alumnos'>
                <img src={ResenaCinco} alt="" />
                <div className="texto-card-alumnos">
                <span className='span-card' onClick={() => handleClick5()}>VER EN GOOGLE</span>
                </div>
                </div>
            </div>
            <div className='contenedor-card-glider'>
                <div className='contenedor-info-card-alumnos'>
                <img src={ResenaSeis} alt="" />
                <div className="texto-card-alumnos">
                <span className='span-card' onClick={() => handleClick6()}>VER EN GOOGLE</span>
                </div>
                </div>
            </div>
            </Glider>
        </div>
    );
}

export default Alumnos;
