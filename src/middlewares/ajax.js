import axios from 'axios';

// ! test middleware pour les requettes ajax, ceci sera suprimer dans un prochain commit
const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

const ajax = (store) => (next) => (action) => {
  switch (action.type) {
    case 'FETCH_POKEMON': {
      instance.get('/pokemon')
        .then((response) => {
          // handle success
          console.log(response);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
        .then(() => {
          // always executed
        });
      break;
    }

    default:
      break;
  }
  next(action);
};

export default ajax;
