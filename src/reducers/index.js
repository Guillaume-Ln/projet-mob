import {
  CHANGE_INPUT_LOGIN_CONNEXION_VALUE,
  CHANGE_INPUT_PASSWORD_CONNEXION_VALUE,
  CLEAR_INPUT_LOGIN,
  CLEAR_INPUT_SIGNUP,
  IS_LOGGED,
  CHANGE_INPUT_SEARCH_VALUE,
  SIGNIN_IS_VISIBLE,
  SIGNUP_IS_VISIBLE,
  SAVE_DATA_PROFILE,
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
  AJAX_SAVE_CREATE_TOURNAMENT,
  CHANGE_INPUT_NAME_CREATE_TOURNAMENT,
  CHANGE_INPUT_GAME_CREATE_TOURNAMENT,
  /*   CHANGE_INPUT_MODERATOR_CREATE_TOURNAMENT, */
  CHANGE_INPUT_MAX_PLAYER_COUNT_CREATE_TOURNAMENT,
  CHANGE_INPUT_DATE_CREATE_TOURNAMENT,
  CHANGE_SELECT_FORMAT_CREATE_TOURNAMENT,
  CHANGE_SELECT_TYPE_CREATE_TOURNAMENT,
  CHANGE_INPUT_DESCRIPTION_CREATE_TOURNAMENT,
  CLEAR_INPUT_CREATE_TOURNAMENT,
  SAVE_TOURNAMENTS,
  SAVE_DATA_TOURNAMENT,
  SAVE_DATA_PARTICIPANTS,
  SAVE_USER_PROFIL,
  CLEAR_TOURNAMENT_PARTICIPANTS,
  IS_MODERATOR,
  IS_PARTICIPANT,
  EDIT_TOURNAMENT,
  PWD_MODALE,
  NEW_PWD_MODALE,
  CHANGE_INPUT_DELETE_PWD_VALUE,
  CHANGE_INPUT_ACTUAL_PWD_VALUE,
  CHANGE_INPUT_NEW_PWD_VALUE,
  // ? action pour factoriser tous les change input - A VOIR
  // ? CHANGE_INPUT_CREATE_TOURNAMENT,
} from '../actions';

const initialState = {
  modalePwd: false,
  modaleNewPwd: false,
  modaleContact: false,
  modaleAbout: false,
  editTournament: false,
  isParticipant: false,
  isModerator: false,
  tournamentParticipantsid: [],
  tournamentParticipants: [],
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
  inputCreateTournament: {
    label: '',
    game: '',
    user_id: '',
    max_player_count: '',
    date: '',
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
  dataProfile: {
    id: '',
    firstname: '',
    lastname: '',
    nickname: '',
    mail: '',
    trophies: '',
    honor_point: '',
    team: '',
    role: '',
    avatar: '',
    created_at: '',
    updated_at: '',
  },
  inputDeleteAccount: {
    deletepwd: '',
  },
  inputPatchAccount: {
    actualpwd: '',
    newpwd: '',
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
      localStorage.removeItem('authorizationRefreshToken');
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
    case SAVE_DATA_PROFILE:
      return {
        ...state,
        dataProfile: action.value,
      };
      // SAVE_CREATE TOURNAMENT
    case AJAX_SAVE_CREATE_TOURNAMENT:
      return {
        ...state,
        tournament: action.tournament,
      };

    case CHANGE_INPUT_NAME_CREATE_TOURNAMENT:
      return {
        ...state,
        inputCreateTournament: {
          ...state.inputCreateTournament,
          label: action.value,
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

      /*     case CHANGE_INPUT_MODERATOR_CREATE_TOURNAMENT:
      return {
        ...state,
        inputCreateTournament: {
          ...state.inputCreateTournament,
          user_id: action.value,
        },
      }; */

    case CHANGE_INPUT_MAX_PLAYER_COUNT_CREATE_TOURNAMENT:
      return {
        ...state,
        inputCreateTournament: {
          ...state.inputCreateTournament,
          max_player_count: action.value,
        },
      };

    case CHANGE_INPUT_DATE_CREATE_TOURNAMENT:
      return {
        ...state,
        inputCreateTournament: {
          ...state.inputCreateTournament,
          date: action.value,
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
          label: '',
          game: '',
          user_id: '',
          max_player_count: '',
          date: '',
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
    case SAVE_DATA_PARTICIPANTS:
      // console.log(action.value);
      return {
        ...state,
        tournamentParticipantsid: action.value,
      };
    case SAVE_USER_PROFIL:
      return {
        ...state,
        tournamentParticipants: [...state.tournamentParticipants, action.value],
      };
    case CLEAR_TOURNAMENT_PARTICIPANTS:
      return {
        ...state,
        tournamentParticipantsid: [],
        tournamentParticipants: [],
      };
    case IS_MODERATOR:
      return {
        ...state,
        isModerator: action.value,
      };
    case IS_PARTICIPANT:
      return {
        ...state,
        isParticipant: action.value,
      };
    case EDIT_TOURNAMENT:
      return {
        ...state,
        editTournament: action.value,
      };
    case PWD_MODALE:
      return {
        ...state,
        modalePwd: !state.modalePwd,
      };
    case NEW_PWD_MODALE:
      return {
        ...state,
        modaleNewPwd: !state.modaleNewPwd,
      };
    case CHANGE_INPUT_DELETE_PWD_VALUE:
      return {
        ...state,
        inputDeleteAccount: {
          deletepwd: action.value,
        },
      };
    case CHANGE_INPUT_ACTUAL_PWD_VALUE:
      return {
        ...state,
        inputPatchAccount: {
          actualpwd: action.value,
          newpwd: state.inputPatchAccount.newpwd,
        },
      };
    case CHANGE_INPUT_NEW_PWD_VALUE:
      return {
        ...state,
        inputPatchAccount: {
          actualpwd: state.inputPatchAccount.actualpwd,
          newpwd: action.value,
        },
      };
    default:
      return state;
  }
}

export default reducer;
