import React from 'react';
import PageDefault from '../../../components/pageDefault';
import { Link } from 'react-router-dom'

function RegisterCategory() {
  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form>

        <label>
          Nome da Categoria:
          <input
            type="text"
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  )
}

export default RegisterCategory;