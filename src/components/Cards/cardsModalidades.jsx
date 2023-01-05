import React from 'react';

import ModalTest from '../form/modalTest';

// context
import { useContext } from 'react';
import { ModalContext } from '../../context/modalContext';

import { ModalContextTest } from '../../context/modalContextTest';
import FormModalidades from '../form/formModalidades';
const CardsModalidades = () => {

    const {modalOpenTest, toggleModalTest} = useContext(ModalContextTest)

    const {modalOpen, toggleModal} = useContext(ModalContext)
    return (
        <>
        <h5 className='title-section'>NUESTRAS MODALIDADES</h5>
        <div className='cards-modalidades-contenedor'>

            <div className='contenedor-card'>

                <h6><strong>MODALIDAD</strong> ONLINE</h6>
                <p>Estudia desde casa y cuando quieras</p>
                <span>Tú eliges el horario.</span>
                <div className="contenedor-btn">
                   <a href={'https://www.belfortlanguageonline.com/'} target={'_blank'}> <button className='btn-principal'>Mas información</button></a>
                </div>
                <div className="button-mobile">
                <a href={'https://www.belfortlanguageonline.com/'} target={'_blank'}> <button>GO</button></a>
                </div>
            </div>
            <div className='contenedor-card'>

                <h6><strong>MODALIDAD</strong> PRESENCIAL</h6>
                <p>Ubícanos solo en Barcelona, C/Lorena 85 y C/Turo Blau 18</p>
                <div className="contenedor-btn">
                    <button className='btn-principal' onClick={() => toggleModal()}>Mas información</button>
                </div>
                <div className="button-mobile">
                    <button type='button' onClick={() => toggleModal()}> GO</button>
                </div>
            </div>
            <div className='contenedor-card'>

                <h6><strong>MODALIDAD</strong> PARTICULAR</h6>
                <p>Enseñanza con profesores particulares y al ritmo que desees</p>
                <div className="contenedor-btn">
                    <button className='btn-principal' onClick={() => toggleModal()}>Mas información</button>
                </div>
                <div className="button-mobile">
                    <button type='button' onClick={() => toggleModal()}> GO</button>
                </div>
            </div>
            <div className='contenedor-card'>

                <h6><strong>MODALIDAD</strong> PARA EMPRESAS</h6>
                <p>Clases disponibles en todo momento y descargables</p>
                <div className="contenedor-btn">
                    <button className='btn-principal' onClick={() => toggleModal()}>Mas información</button>
                </div>
                <div className="button-mobile">
                    <button type='button' onClick={() => toggleModal()}> GO</button>
                </div>
            </div>
            <div className='contenedor-card'>

                <h6><strong>CONOCE TU NIVEL</strong> DE INGLÉS</h6>
                <p>Conoce tu nivel de inglés y obtén un descuento de bienvenida </p>
                <div className="contenedor-btn">
                    <button className='btn-principal' onClick={() => toggleModalTest()}>Mas información</button>
                </div>
                <div className="button-mobile">
                    <button type='button' onClick={() => toggleModalTest()}> GO</button>
                </div>
            </div>
            <div className='contenedor-card'>

                <h6><strong>MODALIDAD</strong> CAMBRIDGE</h6>
                <p>Prepárate para la mejor certificación de Inglés aquí</p>
                <div className="contenedor-btn">
                    <button className='btn-principal' onClick={() => toggleModal()}>Mas información</button>
                </div>
                <div className="button-mobile">
                    <button type='button' onClick={() => toggleModal()}> GO</button>
                </div>
            </div>
            
        </div>
        
        <div className={modalOpen ? 'openModal modal modalModalidades' : 'closeModal'} id="exampleModal" tabIndex={"-1"} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <FormModalidades/>
        </div>

        <div className={modalOpenTest ? 'openModal modal testModal' : 'closeModal'} id="exampleModal" tabIndex={"-1"} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <ModalTest/>
        </div>
        </>

    );
}

export default CardsModalidades;
