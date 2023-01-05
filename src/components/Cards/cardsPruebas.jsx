import React from 'react';
import ModalTest from '../form/modalTest';
// context
import { useContext } from 'react';
import { ModalContextPrueba} from '../../context/modalPrueba';
import { ModalContextTest } from '../../context/modalContextTest';

import FormPruebas from '../form/formPruebas';
const CardsPruebas = () => {
    const {modalOpenTest, toggleModalTest} = useContext(ModalContextTest)

    const {modalPruebaOpen, toggleModalPrueba} = useContext(ModalContextPrueba)

    return (
        <>
        <div className='cards-modalidades-contenedor'>

            <div className='contenedor-card'>

                <h6><strong>MODALIDAD</strong> PROGRAMAS DE VERANO</h6>
                <p>Campamentos de verano en España y en el extranjero   </p>
                <div className="contenedor-btn">
                    <button className='btn-principal' onClick={() => toggleModalPrueba()}>Mas información</button>
                </div>
                <div className="button-mobile">
                    <button type='button' onClick={() => toggleModalPrueba()}> GO</button>
                </div>
            </div>
            <div className='contenedor-card'>

                <h6><strong>CONÓCENOS</strong> PERSONALMENTE</h6>
                <p>Prueba una clase presencial sin compromiso</p>
                <div className="contenedor-btn">
                    <button className='btn-principal' onClick={() => toggleModalPrueba()}>Mas información</button>
                </div>
                <div className="button-mobile">
                    <button type='button' onClick={() => toggleModalPrueba()}> GO</button>
                </div>
            </div>
            <div className='contenedor-card'>

                <h6><strong>PRUEBA LA</strong> PLATAFORMA ONLINE</h6>
                <p>De forma gratuita</p>
                <div className="contenedor-btn">
                    <button className='btn-principal' onClick={() => toggleModalTest()}>Mas información</button>
                </div>
                <div className="button-mobile">
                    <button type='button' onClick={() => toggleModalTest()}> GO</button>
                </div>
            </div>
            
        </div>

        <div className={modalPruebaOpen ? 'openModal modal' : 'closeModal'} id="exampleModal" tabIndex={"-1"} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <FormPruebas/>
        </div>
        <div className={modalOpenTest ? 'openModal modal pruebasModal' : 'closeModal'} id="exampleModal" tabIndex={"-1"} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <ModalTest/>
        </div>
        </>
    );
}

export default CardsPruebas;
