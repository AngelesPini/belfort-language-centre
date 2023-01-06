import React from 'react';

// context
import { useContext } from 'react';
import { ModalContextPrueba } from '../../context/modalPrueba';
const FormPruebas = () => {
    const {modalPruebaOpen, toggleModalPrueba} = useContext(ModalContextPrueba)
    return (
        <>

            <form action="https://formsubmit.co/redesocialesbelfort@gmail.com" method="POST">
            <div className="close_button_form">
                <button onClick={() => toggleModalPrueba()} className={modalPruebaOpen ? 'openModalButton  btn-principal' : 'closeModal'} type='button'>X</button>
            </div>
            <div className="row-container">
            <div className="izquierda">
                <div className="form-nombre">
            <input type="text" placeholder='Nombre*' name='nombre' required/>
            <input type="text" placeholder='Apellido*'  name='apellido' required/>
            </div>

            
            <div className="form-datos">
            <input type="email" placeholder='Correo Electrónico' name='email' required/>
            <input type="number" placeholder='Teléfono*' name='numero' required/>
            <input type="text" placeholder='Ciudad*' name='ciudad' required/> 
            </div>
                </div>


        <div className="derecha">

            <h6>Confirma tu modalidad</h6>
            <div className="form-buttons buttons-pruebas">

            <div className="form-check ">
                <input className="form-check-input" type="checkbox"  id="flexCheckDefault1" name='Campamento de verano'/>
                <label className="form-check-label" htmlFor="flexCheckDefault1">Campamento de verano</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox"  id="flexCheckDefault2" name='clase presencial sin compromiso'/>
                <label className="form-check-label" htmlFor="flexCheckDefault2">Prueba una clase presencial sin compromiso</label>
            </div>

            </div>
        </div>
            </div>




            <div className="btn-enviar">
            <button className='btn-principal' type='submit'>ENVIAR</button>
            </div>
        </form>
        
        </>
    );
}

export default FormPruebas;
