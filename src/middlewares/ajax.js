/* eslint-disable no-console */
import axios from 'axios';
import { AJAX_LOGIN } from '../actions';

const instance = axios.create({
  baseURL: 'https://mob-multiplayer-online-bracket.herokuapp.com',
});

const ajax = (store) => (next) => (action) => {
  switch (action.type) {
    case AJAX_LOGIN: {
      const state = store.getState();
      console.log(state);

      instance.post('/api/login', {
        mail: state.inputConnexion.login,
        password: state.inputConnexion.password,
      })
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
