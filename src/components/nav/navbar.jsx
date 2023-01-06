import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';



// recursos
import Logo from '../../multimedia/logo.svg'
import LogoMobile from '../../multimedia/logo-min.svg'

const listOptions = [
    { text: "INICIO", route: "/" },
    { text: "IDIOMAS", route: "/idiomas" },
    { text: "CAMBRIDGE", route: "/cambridge" },
    { text: "BLOG", route: "/blog"}
  ];

  
const Navbar = () => {
    const [activeLink, setActiveLink] = useState(null);

    const renderList = () => {
        return listOptions.map((option, index) => {
          return (
            <li
              key={index}
              onClick={() => setActiveLink(index)}
              id={1}
              className={`nav-item ${
                activeLink === index ? "lineSelect" : ""
              }`}
            >
              <a href={option.route} className="nav-item">
                <span>
                  <i />
                </span>
                <span className='nav-item'>{option.text}</span>
              </a>
            </li>
          );
        });
      };


      return(
        <nav className="navbar">
            <Link className='navbar-brand' to={'/'}><img src={Logo} alt="logo belfort language centre" className='logo-web'/><img src={LogoMobile} alt="logo belfort language centre" className='logo-mobile' /></Link>
        <ul id="ul" className="nav">
          {renderList()}
        </ul>
      </nav>
      )

}

export default Navbar;
