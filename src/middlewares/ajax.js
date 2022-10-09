/* eslint-disable dot-notation */
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
  AJAX_PARTICIPANTS,
  actionSaveDataParticipants,
  AJAX_REGISTER_TO_THE_TOURNAMENT,
  RELOG_ME,
  actionRefreshToken,
  REFRESH_TOKEN,
  actionRelogMe,
  AJAX_USER_BY_ID,
  actionSaveUserProfil,
} from '../actions';

const yourJWTToken = localStorage.getItem('authorization');
const refreshToken = localStorage.getItem('authorizationRefreshToken');

const instance = axios.create({
  baseURL: 'https://mob-multiplayer-online-bracket.herokuapp.com',
  headers: {
    Authorization: `Bearer ${yourJWTToken}`, // avec cette configuration d'axios, je n'ai pas besoins de préciser a chaque fois ou trouver le token
  },
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
          if (response.status === 200) {
            console.log('LoggedIn', response);
            store.dispatch(actionSaveUser(response.data.foundUser));
            // eslint-disable-next-line dot-notation
            localStorage.setItem('authorization', response.data.accessToken);
            console.log('accessToken saved to localStorage');
            localStorage.setItem('authorizationRefreshToken', response.data.refreshToken);
            console.log('refreshToken saved to localStorage');
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
    case AJAX_TOURNAMENTS:
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
    case AJAX_TOURNAMENT_BY_ID:
      instance.get(`api/tournaments/${action.id}`)
        .then((response) => {
          store.dispatch(actionSaveDataTournament(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case AJAX_PARTICIPANTS: {
      instance.get(`api/tournaments/${action.id}/profiles/`)
        .then((response) => {
          // console.log('ajax participants succes', response.data);
          store.dispatch(actionSaveDataParticipants(response.data));
        })
        .catch((error) => {
          console.log('ajax participants failled');
          console.log(error);
        });
      break;
    }
    case AJAX_REGISTER_TO_THE_TOURNAMENT: {
      const state = store.getState();
      console.log(`AJAX_REGISTER_TO_THE_TOURNAMENT user_id: ${state.user.id}`);

      instance.post(`api/tournaments/${action.id}/profiles/`, {
        user_id: state.user.id,
      })
        .then((response) => {
          console.log('register to the tournoi succes', response);
        })
        .catch((error) => {
          console.log('error register tournament', error);
        });
      break;
    }
    case RELOG_ME: {
      instance.get('api/me')
        .then((response) => {
          console.log('api/me succes');
          // console.log(`your accesToken is :   ${yourJWTToken}`);
          store.dispatch(actionSaveUser(response.data.user));
          // console.log(`accesToken lost in ${new Date(response.data.exp).getMinutes()} minutes.`);
        })
        .catch((error) => {
          console.log('api/me error', error);
          store.dispatch(actionRefreshToken());
        });
      break;
    }
    case REFRESH_TOKEN: {
      instance.post('/api/refreshToken', {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      })
        .then((response) => {
          console.log('token refreshed');
          console.log('new accesToken saved to localStorage');
          localStorage.setItem('authorization', response.data.accessToken);
          store.dispatch(actionRelogMe());
        })
        .catch((error) => {
          console.log('refresh token error', error);
        });
      break;
    }
    case AJAX_USER_BY_ID: {
      instance.get(`/api/profiles/${action.id}`)
        .then((response) => {
          // console.log(response.data);
          store.dispatch(actionSaveUserProfil(response.data));
        })
        .catch((error) => {
          console.log('refresh token error', error);
        });
      break;
    }

    default:
      break;
  }
  next(action);
};

export default ajax;
