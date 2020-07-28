import React from 'react';
import PageDefault from '../../../components/pageDefault';
import {Link} from 'react-router-dom'

function RegisterVideo(){
  return(
    <PageDefault>
      <h1>
      Cadastro de Video
      </h1>

      <Link to="/cadastro/category">
        Cadastrar categoria
      </Link>
    </PageDefault>
  )
}

export default RegisterVideo;