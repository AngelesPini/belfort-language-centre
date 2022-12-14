import React from 'react';

const Form = () => {

    return (
        <form action="https://formsubmit.co/angelesbpini@gmail.com" method="POST">
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

                <div className="form-check ">
                    <input className="form-check-input" type="checkbox"  id="flexSwitchCheckDefault" name='opara mi'/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Para mi</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox"  id="flexSwitchCheckDefault" name='para mi hij@'/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Para mi hij@</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox"  id="flexSwitchCheckDefault" name='para mi empresa'/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Para mi empresa</label>
                </div>

            </div>

            <div className="btn-enviar">
            <button className='btn-principal'>ENVIAR</button>
            </div>

        </form>
    );
}

export default Form;
