/* eslint-disable no-console */
import axios from 'axios';
import {
  actionErrorMessage,
  actionSaveUser,
  AJAX_LOGIN,
  actionIsCreated,
  AJAX_SIGNUP,
  AJAX_SAVE_CREATE_TOURNAMENT,
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
        name: state.inputSignup.name,
        firstname: state.inputSignup.firstname,
        nickname: state.inputSignup.nickname,
        email: state.inputSignup.email,
        createpassword: state.inputSignup.createpassword,
        confirmpassword: state.inputSignup.confirmpassword,
      })
        .then((response) => {
          // handle success
          console.log('register success', response);
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
    case AJAX_SAVE_CREATE_TOURNAMENT: {
      const state = store.getState();
      console.log('state', state);

      instance.post('/api/tournaments', {
        label: state.inputCreateTournament.label,
        type: state.inputCreateTournament.type,
        date: state.inputCreateTournament.date,
        game: state.inputCreateTournament.game,
        format: state.inputCreateTournament.format,
        max_player_count: state.inputCreateTournament.max_player_count,
        description: state.inputCreateTournament.description,
        user_id: state.user.id,
      })
        .then((response) => {
          console.log('new tournanemt created');
          console.log(response);
        })
        .catch((error) => {
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
