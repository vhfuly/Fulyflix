import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/pageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function RegisterCategory() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  };
  const { values, handleChange, clearForm } = useForm(initialValues);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categories'
      : 'https://fulyflix.herokuapp.com/categories';
    fetch(URL)
      .then(async (data) => {
        const response = await data.json();
        setCategory([...response]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria :
      </h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setCategory([...category, values]);
        clearForm();
      }}
      >

        <FormField
          label="Nome da categoria"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}

        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />
        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>
      {category.length === 0 && (
        <div>
          Loading...
        </div>
      )}
      <ul>
        {category.map((category, index) => (
          <li key={`${category}${index}`}>
            {category.title}
          </li>
        ))}

      </ul>
      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default RegisterCategory;
