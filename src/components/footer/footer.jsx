import React from 'react';
import { Link } from 'react-router-dom';
import FB from '../../multimedia/FACEBOOK.png'
import IG from '../../multimedia/INSTAGRAM.png'

const Footer = () => {
    const onHandleFacebook = () => {
        window.open('https://www.facebook.com/belfortcentrebarcelona', '_blank')
    }
    const onHandleInstagram = () => {
        window.open('https://www.instagram.com/belfortlanguagecentre/', '_blank')
    }
    return (
        <>
        <div className="footer">
            <div className="footer-header">
                <h6>Condiciones generales de la <strong>contratación</strong></h6>
                <span className='displayNone'></span>
                <ul>
                    <li>
                        <Link to='/aviso'>Aviso legal</Link>
                    </li>
                    <li>
                        <Link to='/cookies'>Política de cookies</Link>
                    </li>
                    <li>
                        <Link to='/privacidad'>Política de privacidad de datos</Link>
                    </li>
                </ul>
            </div>
            <div className="footer-mid">
                <p className='logo'>Belfort Language Centre</p>
                <span></span>
                <p>Todos los derechos reservados</p>
            </div>
            <div className='mid-line'></div>
            <div className="footer-redes">
                <img src={FB} alt="" onClick={() => onHandleFacebook()}/>
                <span></span>
                <img src={IG} alt="" onClick={() => onHandleInstagram()} />

            </div>
        </div>

        </>
    );
}

export default Footer;
