import React from 'react';


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
            <div className="content-buttons-modal">

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

        </div>
    );
}

export default ModalTest;
