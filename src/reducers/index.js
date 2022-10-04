import {
  CHANGE_INPUT_LOGIN_CONNEXION_VALUE,
  CHANGE_INPUT_PASSWORD_CONNEXION_VALUE,
  CLEAR_INPUT_LOGIN,
  CLEAR_INPUT_SIGNUP,
  IS_LOGGED,
  CHANGE_INPUT_SEARCH_VALUE,
  SIGNIN_IS_VISIBLE,
  SIGNUP_IS_VISIBLE,
  CHANGE_INPUT_NAME_VALUE,
  CHANGE_INPUT_FIRSTNAME_VALUE,
  CHANGE_INPUT_NICKNAME_VALUE,
  CHANGE_INPUT_EMAIL_VALUE,
  CHANGE_INPUT_CREATE_PASSWORD_VALUE,
  CHANGE_INPUT_CONFIRM_PASSWORD_VALUE,
  DISCONNECT,
} from '../actions';

const initialState = {
  signinIsVisible: false,
  signupIsVisible: false,
  isConnected: false,
  user: {
    id: null,
    firstname: null,
    lastname: null,
    mail: null,
    nickname: null,
    team: null,
    honor_point: null,
    trophies: null,
  },
  inputConnexion: {
    login: '',
    password: '',
  },
  inputSearch: {
    search: '',
    searchable: '',
  },
  inputSignup: {
    name: '',
    firstname: '',
    nickname: '',
    email: '',
    createpassword: '',
    confirmpassword: '',
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

    case CHANGE_INPUT_SEARCH_VALUE:
      return {
        ...state,
        inputSearch: {
          search: state.inputSearch.search,
          searchable: action.value,
        },
      };

    case IS_LOGGED:
      return {
        ...state,
        isConnected: true,
      };

    case CLEAR_INPUT_LOGIN:
      return {
        ...state,
        inputConnexion: {
          login: '',
          password: '',
        },
      };

    case CLEAR_INPUT_SIGNUP:
      return {
        ...state,
        inputSignup: {
          name: '',
          firstname: '',
          nickname: '',
          email: '',
          createpassword: '',
          confirmpassword: '',
        },
      };

    case SIGNIN_IS_VISIBLE:
      return {
        ...state,
        signinIsVisible: !state.signinIsVisible,
      };

    case SIGNUP_IS_VISIBLE:
      return {
        ...state,
        signupIsVisible: !state.signupIsVisible,
      };
    case CHANGE_INPUT_NAME_VALUE:
      return {
        ...state,
        inputSignup: {
          name: action.value,
          firstname: state.inputSignup.firstname,
          nickname: state.inputSignup.nickname,
          email: state.inputSignup.email,
          createpassword: state.inputSignup.createpassword,
          confirmpassword: state.inputSignup.confirmpassword,
        },
      };
    case CHANGE_INPUT_FIRSTNAME_VALUE:
      return {
        ...state,
        inputSignup: {
          name: state.inputSignup.name,
          firstname: action.value,
          nickname: state.inputSignup.nickname,
          email: state.inputSignup.email,
          createpassword: state.inputSignup.createpassword,
          confirmpassword: state.inputSignup.confirmpassword,
        },
      };
    case CHANGE_INPUT_NICKNAME_VALUE:
      return {
        ...state,
        inputSignup: {
          name: state.inputSignup.name,
          firstname: state.inputSignup.firstname,
          nickname: action.value,
          email: state.inputSignup.email,
          createpassword: state.inputSignup.createpassword,
          confirmpassword: state.inputSignup.confirmpassword,
        },
      };
    case CHANGE_INPUT_EMAIL_VALUE:
      return {
        ...state,
        inputSignup: {
          name: state.inputSignup.name,
          firstname: state.inputSignup.firstname,
          nickname: state.inputSignup.nickname,
          email: action.value,
          createpassword: state.inputSignup.createpassword,
          confirmpassword: state.inputSignup.confirmpassword,
        },
      };
    case CHANGE_INPUT_CREATE_PASSWORD_VALUE:
      return {
        ...state,
        inputSignup: {
          name: state.inputSignup.name,
          firstname: state.inputSignup.firstname,
          nickname: state.inputSignup.nickname,
          email: state.inputSignup.email,
          createpassword: action.value,
          confirmpassword: state.inputSignup.confirmpassword,
        },
      };
    case CHANGE_INPUT_CONFIRM_PASSWORD_VALUE:
      return {
        ...state,
        inputSignup: {
          name: state.inputSignup.name,
          firstname: state.inputSignup.firstname,
          nickname: state.inputSignup.nickname,
          email: state.inputSignup.email,
          createpassword: state.inputSignup.createpassword,
          confirmpassword: action.value,
        },
      };
    case DISCONNECT:
      localStorage.removeItem('authorization');
      return {
        ...state,
        isConnected: false,
        user: {
          id: null,
          firstname: null,
          lastname: null,
          mail: null,
          nickname: null,
          team: null,
          honor_point: null,
          trophies: null,
        },
      };
    default:
      return state;
  }
}

export default reducer;
