import config from '../config';

const URL_CATEGORIES = `${config.URL}/categories`;

function getAll() {
  return fetch(URL_CATEGORIES)
    .then(async (data) => {

      if (data.ok) {
        const response = await data.json();
        return response;
      }
      throw new Error('Não foi possivel pegar os dados')
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (data) => {

      if (data.ok) {
        const response = await data.json();
        return response;
      }
      throw new Error('Não foi possivel pegar os dados')
    });
}

export default {
  getAllWithVideos,
  getAll,
};
