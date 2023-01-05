import React from 'react';
import GoButton from '../../multimedia/go-button.png'

// context
import { useContext } from 'react';
import { ModalContextTest } from '../../context/modalContextTest';
const ModalTest = () => {

    const {modalOpenTest, toggleModalTest} = useContext(ModalContextTest)

    return (
        <div className='modalTestContainer'>
            <div className="close_button_form">
                <button onClick={() => toggleModalTest()} className={modalOpenTest ? 'openModalButton  btn-principal' : 'closeModal'} type='button'>X</button>
            </div>
            <div className="content-buttons-modal contenedor-buttons-modal-testNivel">

            <a href="https://brep48dk1d7.typeform.com/to/cywaoecQ" target='blank'>
                
                <button>
                Test para jóvenes
                </button>
                </a>
            <a href="https://brep48dk1d7.typeform.com/to/YcwmHOcf" target='blank'>
                <button>
                Test para adultos
                </button>
                </a>
            </div>
            
            <div className="content-buttons-modal  contenedor-buttons-modal-plataforma">
            <a href="https://belfortonline.verxact.com/home/login?redirect=https%3A%2F%2Fbelfortonline.verxact.com%2F" target='blank'>
                
                <button>
                Dexway <img src={GoButton} alt="" />
                </button>
                </a>
            <a href="https://www.blinklearning.com/login" target='blank'>
                <button>
                BlinkLearning<img src={GoButton} alt="" />
                </button>
                </a>
            </div>

        </div>
    );
}

export default ModalTest;
