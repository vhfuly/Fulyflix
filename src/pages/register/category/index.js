import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/pageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function RegisterCategory() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  };
  const [category, setCategory] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(event) {
    setValue(event.target.getAttribute('name'),
      event.target.value);
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ?'http://localrost:8080/category'
      :'https://fulyflix.herokuapp.com/category';
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
        {values.name}
      </h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setCategory([...category, values]);
        setValues(initialValues);
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
            {category.name}
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
