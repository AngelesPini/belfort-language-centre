import React from 'react';
import Wsp from '../../multimedia/WhatsApp-logo.svg'
const Whatsappbutton = () => {
    return (
        <div className='contenedor-wsp-button'>
            <a href="https://wa.me/+34660773747" target="_blank"><div className="button-wsp"><img src={Wsp} alt="" /></div></a>
            
        </div>
    );
}

export default Whatsappbutton;
