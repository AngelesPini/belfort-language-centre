import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom";
export const ContactUs = () => {
  const form = useRef();
  let navigate = useNavigate()
  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_gve9mee', 'template_z4szgat', form.current, 'OvsFfnnK4YaNYtJU1')
      .then((result) => {
          console.log(result.text);
          alert('Enviado con éxito')
          e.target.reset()
          navigate('/')
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
        <h5>CONTACTA AQUÍ</h5>
        <div className="form-nombre">
        <input type="text" placeholder='Nombre*' name='user_name' required/>
        <input type="text" placeholder='Apellido*'  name='user_surname' required/>
        </div>
        <input type="email" placeholder='Correo Electrónico' name='user_email' required/>
        <input type="number" placeholder='Teléfono*' name='numero' required/>
        <input type="text" placeholder='Ciudad*' name='ciudad' required/> 
        <div className="form-buttons">
        
        <div className="form-check ">
         <input className="form-check-input" type="checkbox"  id="flexCheckDefault1" name='para_mi'/>
        <label className="form-check-label" htmlFor="flexCheckDefault1">Para mi</label>
         </div>
         <div className="form-check">
         <input className="form-check-input" type="checkbox"  id="flexCheckDefault2" name='para_mi_hij@'/>
        <label className="form-check-label" htmlFor="flexCheckDefault2">Para mi hij@</label>
        </div>
        <div className="form-check">
         <input className="form-check-input" type="checkbox"  id="flexCheckDefault3" name='para_mi_empresa'/>
        <label className="form-check-label" htmlFor="flexCheckDefault3">Para mi empresa</label>
        </div>

        </div>
        <div className="btn-enviar">
        <input type="submit" value="Send" className='btn-principal'/>
        </div>
    </form>
  );
};

export default ContactUs;