import React from 'react';


import { useContext } from 'react';
import { ModalContext } from '../../context/modalContext';
const FormIdiomas = () => {

    const {modalOpen, toggleModal} = useContext(ModalContext)

    
    return (
        <>
            <form action="https://formsubmit.co/angelesbpini@gmail.com" method="POST">
            <div className="close_button_form">
                <button onClick={() => toggleModal()} className={modalOpen ? 'openModalButton  btn-principal' : 'closeModal'} type='button'>X</button>
            </div>
            <h5>CONTACTA AQUÍ</h5>
            <div className="form-nombre">
            <input type="text" placeholder='Nombre*' name='nombre' required/>
            <input type="text" placeholder='Apellido*'  name='apellido' required/>
            </div>

            
            <div className="form-datos">
            <input type="email" placeholder='Correo Electrónico' name='email' required/>
            <input type="number" placeholder='Teléfono*' name='numero' required/>
            <input type="text" placeholder='Ciudad*' name='ciudad' required/> 
            </div>


            <div className="form-buttons">

            <select className="form-select" aria-label=".form-select-lg example" name='idioma[]'>
            <option selected={'Selecciona tu modalidad'}>Selecciona tu modalidad</option>
            <option value={'Inglés'}>Inglés</option>
            <option value={'Francés'}>Francés</option>
            <option value={'Italiano'}>Italiano</option>
            <option value={'Portugués'}>Portugués</option>
            <option value={'Ruso'}>Ruso</option>
            <option value={'Español'}>Español</option>
            </select>
            </div>
            <div className="btn-enviar">
            <button className='btn-principal'>ENVIAR</button>
            </div>

        </form>
        </>
    );
}

export default FormIdiomas;
