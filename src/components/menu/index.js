import React from 'react';
import Logo from '../../assets/img/logo.png';
import Button from '../Button';
import {Link} from 'react-router-dom';


//import ButtonLink from './components/ButtonLink';
import './menu.css';

function Menu(){
  return(
    <nav className="Menu">
      <Link to="/">
      <img className="Logo" src={Logo} alt="Fulyflix logo"/>
      </Link>
      <Button as={Link} className="ButtonLink" to="/register/video">
       Novo Video
      </Button>
     
    </nav>
  );
}

export default Menu;