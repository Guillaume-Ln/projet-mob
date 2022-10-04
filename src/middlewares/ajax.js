/* eslint-disable no-console */
import axios from 'axios';
import { actionIsLogged, AJAX_LOGIN, actionIsCreated, AJAX_SIGNUP } from '../actions';

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
          console.log('auth success');
          console.log(response.data);
          // eslint-disable-next-line dot-notation
          instance.defaults.headers.common['authorization'] = `Bearer ${response.data.accessToken}`;
          localStorage.setItem('authorization', response.data.accessToken);
          store.dispatch(actionIsLogged());
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
    case AJAX_SIGNUP: {
      const state = store.getState();
      console.log(state);

      instance.post('/api/register', {
        name: state.inputSignup.name,
        firstname: state.inputSignup.firstname,
        nickname: state.inputSignup.nickname,
        email: state.inputSignup.email,
        createpassword: state.inputSignup.createpassword,
        confirmpassword: state.inputSignup.confirmpassword,
      })
        .then((response) => {
          // handle success
          console.log('register success');
          console.log(response.data);
          store.dispatch(actionIsCreated());
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
