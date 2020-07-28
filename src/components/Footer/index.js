import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/logo.png'

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/vhfuly">
        <img  className="Logo" src={Logo}alt="Logo"/>
      </a>
      <p>
        Orgulhosamente criado por
        {' '}
        <a href="https://github.com/vhfuly">
          Victor Fuly
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
