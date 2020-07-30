import React, {useState} from 'react';
import PageDefault from '../../../components/pageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function RegisterCategory() {

  const initialValues = {
    name:'',
    description: '',
    color:'',
  }
  const [category, setCategory]= useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key, value){
    setValues({
      ...values,
      [key]:value,
    })
  }

  function handleChange(event){
    setValue(event.target.getAttribute('name'),
    event.target.value)
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria : {values.name}</h1>

      <form onSubmit={ function handleSubmit(event){
          event.preventDefault();
          setCategory([...category,values]);
          setValues(initialValues)
      }}>

        <FormField
          label="Nome da categoria:"
          type="text"
          name="name"
          value = {values.name}
          onChange={handleChange}

        
        />

        <FormField
          label="Descrição:"
          type=""
          name="description"
          value = {values.description}
          onChange={handleChange}
        />
        <div>
          <label>
            Descrição:
            <textarea
              type="textarea"
              value={values.description}
              name="description"
              onChange={handleChange}
            />
          </label>
        </div>

        <FormField
          label="Cor:"
          type="color"
          name="color"
          value = {values.color}
          onChange={handleChange}
        />
        
        <button>
          Cadastrar
        </button>
      </form>
      <ul>
        {category.map((category, index) =>{
          return(
            <li key={`${category}${index}`}>
              {category.name}
            </li>
          )
        })}
        
      </ul>
      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  )
}

export default RegisterCategory;