import React from 'react';
import Diez from '../../multimedia/celebrating.webp'
import Cambridgeimg from '../../multimedia/cambridge-partner-1.webp'
import CursoVernao from '../../multimedia/curso.webp'
import { Link } from 'react-router-dom';
const Blog = () => {
    return (
        <div>
            <div className="body_blog">
                <div className="blog-title">
                    <h3>BLOG</h3>
                </div>
                <div className="main-blog">
                    <div className='blog-container'>
                        <div className="contenedor-imagen">
                            <img src={Diez} alt="diez años de trayectoria" />          
                        </div>
                        <div className="contenedor-texto">
                        
                            <Link to='/diezanos'><h5>10 años dedicados a la enseñanza de idiomas</h5></Link>
                            <p>A cada uno de ustedes, los que nos prefirieron, los que nos eligieron, los que nos recomendaron y los que nos han apoyado tanto durante todos estos años.</p>
                        </div>
                    </div>
                    <div className='blog-container'>
                        <div className="contenedor-imagen">
                            <img src={Cambridgeimg} alt="cambridge nos certifica" />                        
                        </div>
                        <div className="contenedor-texto">
                        
                            <Link to='/cambridgeBlog'><h5>Inicio nuevos cursos preparación para First Certificate</h5></Link>
                            <p>El próximo 19 de septiembre iniciaremos los cursos de preparación para los exámenes FIRST CERTIFICATE. Uno de ellos se impartirá los lúnes y miercoles de...</p>
                        </div>
                    </div>
                    <div className='blog-container'>
                        <div className="contenedor-imagen">
                            <img src={CursoVernao} alt="back to school" />                            
                        </div>
                        <div className="contenedor-texto">
                        
                            <Link to='/school'><h5>Inicio de curso 2022-2023</h5></Link>
                            <p>El próximo 19 de septiembre iniciaremos los cursos presenciales para los diferentes niveles de niños, adolescentes y adultos, con distintos horarios de tarde.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
