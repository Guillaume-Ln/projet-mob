import { CHANGE_INPUT_LOGIN_CONNEXION_VALUE, CHANGE_INPUT_PASSWORD_CONNEXION_VALUE } from '../actions';

const initialState = {
  inputConnexion: {
    login: '',
    password: '',
  },

};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_INPUT_LOGIN_CONNEXION_VALUE:
      return {
        ...state,
        inputConnexion: {

          login: action.value,
          password: state.inputConnexion.password,
        },
      };

    case CHANGE_INPUT_PASSWORD_CONNEXION_VALUE:
      return {
        ...state,
        inputConnexion: {

          login: state.inputConnexion.login,
          password: action.value,
        },
      };

    default:
      return state;
  }
}

export default reducer;
