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
  CHANGE_INPUT_MAIL_VALUE,
  CHANGE_INPUT_CREATE_PASSWORD_VALUE,
  CHANGE_INPUT_CONFIRM_PASSWORD_VALUE,
  DISCONNECT,
  ERROR_MESSAGE,
  SAVE_USER,
  CLEAR_ERROR_MESSAGE,
  IS_LOADING,
  SAVE_CREATE_TOURNAMENT,
  CHANGE_INPUT_NAME_CREATE_TOURNAMENT,
  CHANGE_INPUT_GAME_CREATE_TOURNAMENT,
  CHANGE_INPUT_MODERATOR_CREATE_TOURNAMENT,
  CHANGE_INPUT_PARTICIPANTS_NUMBERS_CREATE_TOURNAMENT,
  CHANGE_INPUT_START_DATE_CREATE_TOURNAMENT,
  CHANGE_INPUT_START_TIME_CREATE_TOURNAMENT,
  CHANGE_SELECT_FORMAT_CREATE_TOURNAMENT,
  CHANGE_SELECT_TYPE_CREATE_TOURNAMENT,
  CHANGE_INPUT_DESCRIPTION_CREATE_TOURNAMENT,
  CLEAR_INPUT_CREATE_TOURNAMENT,
  SAVE_TOURNAMENTS,
  SAVE_DATA_TOURNAMENT,
  // ? action pour factoriser tous les change input - A VOIR
  // ? CHANGE_INPUT_CREATE_TOURNAMENT,
} from '../actions';

const initialState = {
  dataTournament: {
    date: null,
    description: null,
    format: null,
    game: null,
    id: null,
    image: null,
    label: null,
    max_player_count: null,
    type: null,
    user_id: null,
  },
  tournaments: [],
  isLoading: false,
  isErrored: false,
  errorMessage: '',
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
  tournament: {
    name: null,
    game: null,
    moderator: null,
    participants_numbers: null,
    start_date: null,
    start_time: null,
    format: null,
    type: null,
    description: null,
  },
  inputCreateTournament: {
    name: '',
    game: '',
    moderator: '',
    participants_numbers: '',
    start_date: '',
    start_time: '',
    format: '',
    type: '',
    description: '',
  },

  inputSignup: {
    name: '',
    firstname: '',
    nickname: '',
    mail: '',
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
          mail: '',
          createpassword: '',
          confirmpassword: '',
        },
      };

    case SIGNIN_IS_VISIBLE:
      return {
        ...state,
        signinIsVisible: action.value,
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
          mail: state.inputSignup.mail,
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
          mail: state.inputSignup.mail,
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
          mail: state.inputSignup.mail,
          createpassword: state.inputSignup.createpassword,
          confirmpassword: state.inputSignup.confirmpassword,
        },
      };
    case CHANGE_INPUT_MAIL_VALUE:
      return {
        ...state,
        inputSignup: {
          name: state.inputSignup.name,
          firstname: state.inputSignup.firstname,
          nickname: state.inputSignup.nickname,
          mail: action.value,
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
          mail: state.inputSignup.mail,
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
          mail: state.inputSignup.mail,
          createpassword: state.inputSignup.createpassword,
          confirmpassword: action.value,
        },
      };
    case DISCONNECT:
      localStorage.removeItem('authorization');
      return {
        ...state,
        isLoadind: false,
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

    case ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.error,
        isErrored: true,
        isLoading: false,
        signinIsVisible: true,
      };

    case SAVE_USER:
      return {
        ...state,
        user: action.user,
        isConnected: true,
        isLoading: false,
        isErrored: false,
        signinIsVisible: false,
        errorMessage: '',
        inputConnexion: {
          login: '',
          password: '',
        },
      };

    case CLEAR_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: '',
      };

    case IS_LOADING:
      return {
        ...state,
        isLoading: action.value,
      };

      // SAVE_CREATE TOURNAMENT
    case SAVE_CREATE_TOURNAMENT:
      return {
        ...state,
        tournament: action.tournament,
      };

    case CHANGE_INPUT_NAME_CREATE_TOURNAMENT:
      return {
        ...state,
        inputCreateTournament: {
          ...state.inputCreateTournament,
          name: action.value,
        },
      };

    case CHANGE_INPUT_GAME_CREATE_TOURNAMENT:
      return {
        ...state,
        inputCreateTournament: {
          ...state.inputCreateTournament,
          game: action.value,
        },
      };

    case CHANGE_INPUT_MODERATOR_CREATE_TOURNAMENT:
      return {
        ...state,
        inputCreateTournament: {
          ...state.inputCreateTournament,
          moderator: action.value,
        },
      };

    case CHANGE_INPUT_PARTICIPANTS_NUMBERS_CREATE_TOURNAMENT:
      return {
        ...state,
        inputCreateTournament: {
          ...state.inputCreateTournament,
          participants_numbers: action.value,
        },
      };

    case CHANGE_INPUT_START_DATE_CREATE_TOURNAMENT:
      return {
        ...state,
        inputCreateTournament: {
          ...state.inputCreateTournament,
          start_date: action.value,
        },
      };

    case CHANGE_INPUT_START_TIME_CREATE_TOURNAMENT:
      return {
        ...state,
        inputCreateTournament: {
          ...state.inputCreateTournament,
          start_time: action.value,
        },
      };

    case CHANGE_SELECT_FORMAT_CREATE_TOURNAMENT:
      return {
        ...state,
        inputCreateTournament: {
          ...state.inputCreateTournament,
          format: action.value,
        },
      };

    case CHANGE_SELECT_TYPE_CREATE_TOURNAMENT:
      return {
        ...state,
        inputCreateTournament: {
          ...state.inputCreateTournament,
          type: action.value,
        },
      };

    case CHANGE_INPUT_DESCRIPTION_CREATE_TOURNAMENT:
      return {
        ...state,
        inputCreateTournament: {
          ...state.inputCreateTournament,
          description: action.value,
        },

      };

    case CLEAR_INPUT_CREATE_TOURNAMENT:
      return {
        ...state,
        inputCreateTournament: {
          name: '',
          game: '',
          moderator: '',
          participants_numbers: '',
          start_date: '',
          start_time: '',
          format: '',
          type: '',
          description: '',

        },
      };
    case SAVE_TOURNAMENTS:
      return {
        ...state,
        tournaments: action.value,
      };
    case SAVE_DATA_TOURNAMENT:
      return {
        ...state,
        dataTournament: action.value,
      };
      // ? A VOIR POUR LA FACTORISATION des CHANGE_INPUT
      /*  case CHANGE_INPUT_CREATE_TOURNAMENT:
      return {
        ...state,
        [action.key]: action.value,
      }; */
    default:
      return state;
  }
}

export default reducer;
