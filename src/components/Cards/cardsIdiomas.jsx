import React from 'react';


// context
import { useContext } from 'react';
import { ModalContext } from '../../context/modalContext';
import FormIdiomas from '../form/formIdiomas';
const CardsIdiomas = () => {
    
    const {modalOpen, toggleModal} = useContext(ModalContext)
    return (
        <>
        <h5 className='title-section'>NUESTROS IDIOMAS</h5>
        <div className='cards-modalidades-contenedor'>

            <div className='contenedor-card'>
                <img src="" alt="" />
                <h6><strong>INGLÉS USA/UK</strong></h6>
                <p>Descripción y requisitos del curso</p>
                <div className="contenedor-btn">
                    <button className='btn-principal' onClick={() => toggleModal()}>Lo quiero</button>
                </div>
                <div className="button-mobile">
                    <button type='button' onClick={() => toggleModal()}> GO</button>
                </div>
            </div>
            <div className='contenedor-card'>
                <img src="" alt="" />
                <h6><strong>FRANCÉS</strong></h6>
                <p>Descripción y requisitos del curso</p>
                <div className="contenedor-btn">
                    <button className='btn-principal' onClick={() => toggleModal()}>Lo quiero</button>
                </div>
                <div className="button-mobile">
                    <button type='button' onClick={() => toggleModal()}> GO</button>
                </div>
            </div>
            <div className='contenedor-card'>
                <img src="" alt="" />
                <h6><strong>ITALIANO</strong></h6>
                <p>Descripción y requisitos del curso</p>
                <div className="contenedor-btn">
                    <button className='btn-principal' onClick={() => toggleModal()}>Lo quiero</button>
                </div>
                <div className="button-mobile">
                    <button type='button' onClick={() => toggleModal()}> GO</button>
                </div>
            </div>
            <div className='contenedor-card'>
                <img src="" alt="" />
                <h6><strong>PORTUGUÉS</strong></h6>
                <p>Descripción y requisitos del curso</p>
                <div className="contenedor-btn">
                    <button className='btn-principal' onClick={() => toggleModal()}>Lo quiero</button>
                </div>
                <div className="button-mobile">
                    <button type='button' onClick={() => toggleModal()}> GO</button>
                </div>
            </div>
            <div className='contenedor-card'>
                <img src="" alt="" />
                <h6><strong>RUSO</strong></h6>
                <p>Descripción y requisitos del curso</p>
                <div className="contenedor-btn">
                    <button className='btn-principal' onClick={() => toggleModal()}>Lo quiero</button>
                </div>
                <div className="button-mobile">
                    <button type='button' onClick={() => toggleModal()}> GO</button>
                </div>
            </div>
            <div className='contenedor-card'>
                <img src="" alt="" />
                <h6><strong>ESPAÑOL</strong></h6>
                <p>Descripción y requisitos del curso</p>
                <div className="contenedor-btn">
                    <button className='btn-principal' onClick={() => toggleModal()}>Lo quiero</button>
                </div>
                <div className="button-mobile">
                    <button type='button' onClick={() => toggleModal()}> GO</button>
                </div>
            </div>
            
        </div>        
        <div className={modalOpen ? 'openModal modal' : 'closeModal'} id="exampleModal" tabIndex={"-1"} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <FormIdiomas/>
        </div>
        </>
    );
}

export default CardsIdiomas;
