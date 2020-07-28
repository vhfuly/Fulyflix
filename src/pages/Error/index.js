import React from 'react';
import PageDefault from '../../components/pageDefault';
import {Link} from 'react-router-dom'

function Error(){
  return(
    <PageDefault>
      <h1>
      Pagina não encontrada
      </h1>

      <Link to="/">
        Voltar para Home
      </Link>
    </PageDefault>
  )
}

export default Error;