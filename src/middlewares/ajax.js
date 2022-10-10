/* eslint-disable no-console */
import axios from 'axios';
import {
  actionErrorMessage,
  actionSaveUser,
  AJAX_LOGIN,
  AJAX_SIGNUP,
  AJAX_SAVE_CREATE_TOURNAMENT,
  actionIsCreated,
  AJAX_TOURNAMENTS,
  actionSaveTournaments,
  AJAX_TOURNAMENT_BY_ID,
  actionSaveDataTournament,
  AJAX_MY_TOURNAMENTS,
  actionSaveMyTournaments,
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
    case AJAX_TOURNAMENT_BY_ID: {
      instance.get(`api/tournaments/${action.id}`)
        .then((response) => {
          store.dispatch(actionSaveDataTournament(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    case AJAX_MY_TOURNAMENTS: {
      instance.get('api/tournaments')
        .then((response) => {
          store.dispatch(actionSaveMyTournaments(response.data));
        })
        .catch((error) => {
          console.log('ajax my tournaments: ', error.code);
        });
      break;
    }
    default:
      break;
  }
  next(action);
};

export default ajax;
