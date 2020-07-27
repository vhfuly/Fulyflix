import React from 'react';
import Logo from '../../assets/img/logo.png';
import Button from '../Button';


//import ButtonLink from './components/ButtonLink';
import './menu.css';

function Menu(){
  return(
    <nav className="Menu">
      <a href="/">
      <img className="Logo" src={Logo} alt="Fulyflix logo"/>
      </a>
      <Button className="ButtonLink" href="/">
       Novo Video
      </Button>
     
    </nav>
  );
}

export default Menu;