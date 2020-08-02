import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/pageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

function RegisterVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ title }) => title);
  const { values, handleChange } = useForm({
    title: 'Lindsey Raye Ward - Sia - Chandelier (Drum Cover)',
    url: 'https://www.youtube.com/watch?v=csxOgd0FuTY',
    category: 'Bateria',
  });
  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Video
      </h1>
      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();

        const chosenCategory = categories.find((category) => category.title === values.category);

        videosRepository.create({
          title: values.title,
          url: values.url,
          categoryId: chosenCategory.id,
        })
          .then(() => {
            console.log('Video cadastrado');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Titulo do video "
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
        />
        <FormField
          label="URL do video "
          type="url"
          name="url"
          value={values.url}
          onChange={handleChange}
        />
        <FormField
          label="Categoria"
          name="category"
          value={values.category}
          onChange={handleChange}
          suggestions={categoryTitles}
        />
        <Button type="submit">
          Cadastrar
        </Button>

      </form>
      <Link to="/cadastro/category">
        Cadastrar categoria
      </Link>
    </PageDefault>
  );
}

export default RegisterVideo;
