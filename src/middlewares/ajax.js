/* eslint-disable no-console */
import axios from 'axios';
import {
  actionErrorMessage,
  actionSaveUser,
  AJAX_LOGIN,
  AJAX_SIGNUP,
  actionIsCreated,
  AJAX_TOURNAMENTS,
  actionSaveTournaments,
} from '../actions';

const instance = axios.create({
  baseURL: 'https://mob-multiplayer-online-bracket.herokuapp.com',
});

const ajax = (store) => (next) => (action) => {
  switch (action.type) {
    case AJAX_LOGIN: {
      const state = store.getState();

      instance.post('/api/login', {
        mail: state.inputConnexion.login,
        password: state.inputConnexion.password,
      })
        .then((response) => {
          // handle success
          console.log('log ajax', response);

          if (response.status === 200) {
            store.dispatch(actionSaveUser(response.data.foundUser));
            // eslint-disable-next-line dot-notation
            instance.defaults.headers.common['authorization'] = `Bearer ${response.data.accessToken}`;
            localStorage.setItem('authorization', response.data.accessToken);
          }
        })
        .catch((error) => {
          // handle error
          if (error.response.status === 401) {
            store.dispatch(actionErrorMessage(error.response.data.error));
          }
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
        lastname: state.inputSignup.name,
        firstname: state.inputSignup.firstname,
        nickname: state.inputSignup.nickname,
        mail: state.inputSignup.mail,
        password: state.inputSignup.createpassword,
      })
        .then((response) => {
          // handle success
          console.log('register success');
          console.log(response.data);

          if (response.status === 200) {
            store.dispatch(actionIsCreated());
          }
        })
        .catch((error) => {
          // handle error
          console.log('coucou');
          if (error.response.status === 500) {
            store.dispatch(actionErrorMessage(error.response.data.message));
          }
        })
        .then(() => {
          // always executed
        });
      break;
    }
    case AJAX_TOURNAMENTS: {
      instance.get('/api/tournaments')
        .then((response) => {
          // handle success
          store.dispatch(actionSaveTournaments(response.data));
        })
        .catch((error) => {
          // handle error
          console.log('ajax tournaments: ', error.code);
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
