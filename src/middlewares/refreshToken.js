/* eslint-disable dot-notation */
/* eslint-disable no-console */
import axios from 'axios';
import {
  REFRESH_TOKEN,
  actionRelogMe,
} from '../actions';

const refreshToken = localStorage.getItem('authorizationRefreshToken');
const config = refreshToken;

const instanceRefresh = axios.create({
  baseURL: 'https://mob-multiplayer-online-bracket.herokuapp.com',
  headers: {
    Authorization: `Bearer ${config}`, // avec cette configuration d'axios, je n'ai pas besoins de préciser a chaque fois ou trouver le token
  },
});

const ajax = (store) => (next) => (action) => {
  switch (action.type) {
    case REFRESH_TOKEN: {
      instanceRefresh.post('/api/refreshToken', {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      })
        .then((response) => {
          console.log('token refreshed');
          localStorage.setItem('authorization', response.data.accessToken);
          console.log('new accesToken saved to localStorage');
          store.dispatch(actionRelogMe());
        })
        .catch(() => {
          console.log('refresh token error');
        });
      break;
    }
    default:
      break;
  }
  next(action);
};

export default ajax;
