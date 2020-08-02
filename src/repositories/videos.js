import config from '../config';

const URL_VIDEOS = `${config.URL}/videos`;

function create(videoObject) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(videoObject),
  })
    .then(async (data) => {

      if (data.ok) {
        const response = await data.json();
        return response;
      }
      throw new Error('Não foi possivel pegar os dados')
    });
}

export default {
  create,
};