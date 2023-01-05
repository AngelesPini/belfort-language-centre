import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

// context
import { useContext } from 'react';
import { ModalContext } from '../../context/modalContext';

import { useNavigate } from "react-router-dom";
const FormModalidades = () => {
    const form = useRef();
    let navigate = useNavigate()
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_gve9mee', 'template_mwdaq1f', form.current, 'OvsFfnnK4YaNYtJU1')
        .then((result) => {
            console.log(result.text);
            alert('Enviado con éxito')
            e.target.reset()
            navigate('/')
        }, (error) => {
            console.log(error.text);
        });
    };
  

    const {modalOpen, toggleModal} = useContext(ModalContext)
    return (

            <form form ref={form} onSubmit={sendEmail}>
            <div className="close_button_form">
                <button onClick={() => toggleModal()} className={modalOpen ? 'openModalButton  btn-principal' : 'closeModal'} type='button'>X</button>
            </div>
            <h5>CONTACTA AQUÍ</h5>
                <div className="form-nombre">
                <input type="text" placeholder='Nombre*' name='user_name' required/>
                <input type="text" placeholder='Apellido*'  name='user_surname' required/>
                </div>
                <input type="email" placeholder='Correo Electrónico' name='user_email' required/>
                <input type="number" placeholder='Teléfono*' name='numero' required/>
                <input type="text" placeholder='Ciudad*' name='ciudad' required/> 

            <div className="cuandoInicio">

            <select className="form-select" aria-label=".form-select-lg example" name='fecha'>
            <option selected={'Selecciona tu modalidad'}>¿Cuándo quieres iniciar?</option>
            <option value={'proxima semana'}>La proxima semana</option>
            <option value={'en 15 dias'}>En 15 dias</option>
            <option value={'el próximo mes'}>El próximo mes</option>


            </select>
            </div>


            <div className="form-buttons">

            <select className="form-select" aria-label=".form-select-lg example" name='modalidad'>
            <option selected={'Selecciona tu modalidad'}>Confirma tu modalidad</option>
            <option value={'presencial'}>Presencial</option>
            <option value={'particular'}>Particular</option>
            <option value={'para empresas'}>Para empresas</option>
            <option value={'cambridge'}>Cambridge</option>

            </select>
            </div>


            <div className="btn-enviar">
            <button className='btn-principal'>ENVIAR</button>
            </div>
        </form>        
    );
}

export default FormModalidades;
