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
  GET_PROFILE_BY_ID,
  actionSaveDataProfile,
  AJAX_PARTICIPANTS,
  actionSaveDataParticipants,
  AJAX_REGISTER_TO_THE_TOURNAMENT,
  RELOG_ME,
  actionRefreshToken,
  AJAX_USER_BY_ID,
  actionSaveUserProfil,
  PATCH_TOURNAMENT,
  AJAX_REMOVE_USER_FROM_TOURNAMENT,
  AJAX_DELETE_TOURNAMENT,
  AJAX_ENCOUNTER_TOURNAMENT_LIST,
  actionSaveEncountersList,
} from '../actions';

const yourJWTToken = localStorage.getItem('authorization');
const refreshToken = localStorage.getItem('authorizationRefreshToken');
const config = yourJWTToken || refreshToken;

const instance = axios.create({
  baseURL: 'https://mob-multiplayer-online-bracket.herokuapp.com',
  headers: {
    Authorization: `Bearer ${config}`, // avec cette configuration d'axios, je n'ai pas besoins de préciser a chaque fois ou trouver le token
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
          if (error.response.status === 500) {
            store.dispatch(actionErrorMessage(error.response.data.message));
          }
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
        });
      break;

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
    case GET_PROFILE_BY_ID: {
      instance.get(`api/profiles/${action.id}`)
        .then((response) => {
          console.log(response);
          store.dispatch(actionSaveDataProfile(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    case AJAX_PARTICIPANTS: {
      instance.get(`api/tournaments/${action.id}/profiles/`)
        .then((response) => {
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
    case AJAX_USER_BY_ID: {
      instance.get(`/api/profiles/${action.id}`)
        .then((response) => {
          // console.log(response.data);
          store.dispatch(actionSaveUserProfil(response.data));
        })
        .catch((error) => {
          console.log('refresh token error', error);
          store.dispatch(actionRefreshToken);
        });
      break;
    }
    case PATCH_TOURNAMENT: {
      const state = store.getState();

      instance.patch(`/api/tournaments/${action.tournamentId}`, {
        label: state.inputCreateTournament.label,
        type: state.inputCreateTournament.type,
        date: state.inputCreateTournament.date,
        game: state.inputCreateTournament.game,
        format: state.inputCreateTournament.format,
        image: 'https://i.imgur.com/XWdPSTS.png', // ! attention, tant que la gestion de l'input image na pas été faite
        max_player_count: state.inputCreateTournament.max_player_count,
        description: state.inputCreateTournament.description,
        user_id: state.user.id,
      })
        .then((response) => {
          console.log('tournanemt updated');
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    case AJAX_REMOVE_USER_FROM_TOURNAMENT: {
      instance.delete(`/api/tournaments/${action.idTournament}/profiles/${action.idUser}/`)
        .then(() => {
          console.log('user correctly removed from tournament');
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    case AJAX_DELETE_TOURNAMENT: {
      const state = store.getState();

      instance.delete(`/api/tournaments/${action.idTournament}`, {
        user_id: state.user.id,
      })
        .then(() => {
          console.log('tournament correctly deleted');
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    case AJAX_ENCOUNTER_TOURNAMENT_LIST: {
      instance.get(`/api/encounters/tournaments/${action.tournamentId}`, {
      })
        .then((response) => {
          store.dispatch(actionSaveEncountersList(response.data));
        })
        .catch(() => console.log('error AJAX_ENCOUNTERS_LIST'));
      break;
    }
    default:
      break;
  }
  next(action);
};

export default ajax;
