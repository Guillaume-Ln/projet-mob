// export des actions de la page connexion
export const CHANGE_INPUT_LOGIN_CONNEXION_VALUE = 'CHANGE_INPUT_LOGIN_CONNEXION_VALUE';
export const CHANGE_INPUT_PASSWORD_CONNEXION_VALUE = 'CHANGE_INPUT_PASSWORD_CONNEXION_VALUE';
export const CHANGE_INPUT_SEARCH_VALUE = 'CHANGE_INPUT_SEARCH_VALUE';
export const AJAX_LOGIN = 'AJAX_LOGIN';
export const IS_LOGGED = 'IS_LOGGED';
export const CLEAR_INPUT_LOGIN = 'CLEAR_INPUT_LOGIN';
export const SIGNIN_IS_VISIBLE = 'SIGNIN_IS_VISIBLE';
export const DISCONNECT = 'DISCONNECT';
export const ERROR_MESSAGE = 'ERROR_MESSAGE';
export const SAVE_USER = 'SAVE_USER';
export const CLEAR_ERROR_MESSAGE = 'CLEAR_ERROR_MESSAGE';
export const IS_LOADING = 'IS_LOADING';
// action create tournament
export const SAVE_CREATE_TOURNAMENT = 'SAVE_CREATE_TOURNAMENT';
export const CHANGE_INPUT_NAME_CREATE_TOURNAMENT = 'CHANGE_INPUT_NAME_CREATE_TOURNAMENT';
export const CHANGE_INPUT_GAME_CREATE_TOURNAMENT = 'CHANGE_INPUT_GAME_CREATE_TOURNAMENT';
export const CHANGE_INPUT_MODERATOR_CREATE_TOURNAMENT = 'CHANGE_INPUT_MODERATOR_CREATE_TOURNAMENT';
export const CHANGE_INPUT_PARTICIPANTS_NUMBERS_CREATE_TOURNAMENT = 'CHANGE_INPUT_PARTICIPANTS_NUMBERS_CREATE_TOURNAMENT';
export const CHANGE_INPUT_START_DATE_CREATE_TOURNAMENT = 'CHANGE_INPUT_START_DATE_CREATE_TOURNAMENT';
export const CHANGE_INPUT_START_TIME_CREATE_TOURNAMENT = 'CHANGE_INPUT_START_TIME_CREATE_TOURNAMENT';
export const CHANGE_SELECT_FORMAT_CREATE_TOURNAMENT = 'CHANGE_SELECT_FORMAT_CREATE_TOURNAMENT';
export const CHANGE_SELECT_TYPE_CREATE_TOURNAMENT = 'CHANGE_SELECT_TYPE_CREATE_TOURNAMENT';
export const CHANGE_INPUT_DESCRIPTION_CREATE_TOURNAMENT = 'CHANGE_INPUT_DESCRIPTION_CREATE_TOURNAMENT';

// action clear input create tournament
export const CLEAR_INPUT_CREATE_TOURNAMENT = 'CLEAR_INPUT_CREATE_TOURNAMENT';

export const actionChangeInputLoginConnexionValue = (newValue) => ({
  type: CHANGE_INPUT_LOGIN_CONNEXION_VALUE,
  value: newValue,
});

export const actionChangeInputPasswordConnexionValue = (newValue) => ({
  type: CHANGE_INPUT_PASSWORD_CONNEXION_VALUE,
  value: newValue,
});

export const actionLogin = () => ({
  type: AJAX_LOGIN,
});

export const actionIsLogged = () => ({
  type: IS_LOGGED,
});

export const actionClearInputLogin = () => ({
  type: CLEAR_INPUT_LOGIN,
});

export const actionChangeInputSearchValue = (newValue) => ({
  type: CHANGE_INPUT_SEARCH_VALUE,
  value: newValue,
});

export const actionSigninIsVisible = (bool) => ({
  type: SIGNIN_IS_VISIBLE,
  value: bool,
});

export const actionDisconnect = () => ({
  type: DISCONNECT,
});
export const actionErrorMessage = (error) => ({
  type: ERROR_MESSAGE,
  error: error,
});
export const actionSaveUser = (user) => ({
  type: SAVE_USER,
  user: {
    id: user.id,
    firstname: user.firstname,
    lastname: user.lastname,
    mail: user.mail,
    nickname: user.nickname,
    team: user.team,
    honor_point: user.honor_point,
    trophies: user.trophies,
  },
});
export const actionClearErrorMessage = () => ({
  type: CLEAR_ERROR_MESSAGE,
});
export const actionIsLoading = (bool) => ({
  type: IS_LOADING,
  value: bool,
});

// action create tournament componant

export const actionSaveCreateTournament = (tournament) => ({
  type: SAVE_CREATE_TOURNAMENT,
  tournament: {
    name: tournament.name,
    game: tournament.game,
    moderator: tournament.moderator,
    participants_numbers: tournament.participants_numbers,
    start_date: tournament.start_date,
    start_time: tournament.start_time,
    format: tournament.format,
    type: tournament.type,
    description: tournament.description,
  },
});
// action clear input create tournament componant
export const actionClearInputCreateTournament = () => ({
  type: CLEAR_INPUT_CREATE_TOURNAMENT,
});

export const actionChangeInputNameCreateTournament = (newValue) => ({
  type: CHANGE_INPUT_NAME_CREATE_TOURNAMENT,
  value: newValue,
});

export const actionChangeInputGameCreateTournament = (newValue) => ({
  type: CHANGE_INPUT_GAME_CREATE_TOURNAMENT,
  value: newValue,
});

export const actionChangeInputModeratorCreateTournament = (newValue) => ({
  type: CHANGE_INPUT_MODERATOR_CREATE_TOURNAMENT,
  value: newValue,
});

export const actionChangeInputParticipantsNumbersCreateTournament = (newValue) => ({
  type: CHANGE_INPUT_PARTICIPANTS_NUMBERS_CREATE_TOURNAMENT,
  value: newValue,
});

export const actionChangeInputStartDateCreateTournament = (newValue) => ({
  type: CHANGE_INPUT_START_DATE_CREATE_TOURNAMENT,
  value: newValue,
});

export const actionChangeInputStartTimeCreateTournament = (newValue) => ({
  type: CHANGE_INPUT_START_TIME_CREATE_TOURNAMENT,
  value: newValue,
});

export const actionChangeSelectFormatCreateTournament = (newValue) => ({
  type: CHANGE_SELECT_FORMAT_CREATE_TOURNAMENT,
  value: newValue,
});

export const actionChangeSelectTypeCreateTournament = (newValue) => ({
  type: CHANGE_SELECT_TYPE_CREATE_TOURNAMENT,
  value: newValue,
});

export const actionChangeInputDescriptionCreateTournament = (newValue) => ({
  type: CHANGE_INPUT_DESCRIPTION_CREATE_TOURNAMENT,
  value: newValue,
});

// ? A VOIR POUR LA FACTORISATION des action input create Tournament
/* export const CHANGE_INPUT_NAME_CREATE_TOURNAMENT = 'CHANGE_INPUT_NAME_CREATE_TOURNAMENT'; */
/* export const actionchangeInputCreateTournament = (newValue, key) => ({
  type : CHANGE_INPUT_CREATE_TOURNAMENT,
  key:key,
  value: newValue
}) */
// export des actions de la page inscription

export const CHANGE_INPUT_NAME_VALUE = 'CHANGE_INPUT_NAME_VALUE';
export const actionChangeInputNameValue = (newValue) => ({
  type: CHANGE_INPUT_NAME_VALUE,
  value: newValue,
});

export const CHANGE_INPUT_FIRSTNAME_VALUE = 'CHANGE_INPUT_FIRSTNAME_VALUE';
export const actionChangeInputFirstNameValue = (newValue) => ({
  type: CHANGE_INPUT_FIRSTNAME_VALUE,
  value: newValue,
});

export const CHANGE_INPUT_NICKNAME_VALUE = 'CHANGE_INPUT_NICKNAME_VALUE';
export const actionChangeInputNickNameValue = (newValue) => ({
  type: CHANGE_INPUT_NICKNAME_VALUE,
  value: newValue,
});

export const CHANGE_INPUT_EMAIL_VALUE = 'CHANGE_INPUT_EMAIL_VALUE';
export const actionChangeInputEmailValue = (newValue) => ({
  type: CHANGE_INPUT_EMAIL_VALUE,
  value: newValue,
});

export const CHANGE_INPUT_CREATE_PASSWORD_VALUE = 'CHANGE_INPUT_CREATE_PASSWORD_VALUE';
export const actionChangeInputCreatePasswordValue = (newValue) => ({
  type: CHANGE_INPUT_CREATE_PASSWORD_VALUE,
  value: newValue,
});

export const CHANGE_INPUT_CONFIRM_PASSWORD_VALUE = 'CHANGE_INPUT_CONFIRM_PASSWORD_VALUE';
export const actionChangeInputConfirmPasswordValue = (newValue) => ({
  type: CHANGE_INPUT_CONFIRM_PASSWORD_VALUE,
  value: newValue,
});

export const SIGNUP_IS_VISIBLE = 'SIGNUP_IS_VISIBLE';
export const actionSignupIsVisible = (bool) => ({
  type: SIGNUP_IS_VISIBLE,
  value: bool,
});

export const CLEAR_INPUT_SIGNUP = 'CLEAR_INPUT_SIGNUP';
export const actionClearInputSignup = () => ({
  type: CLEAR_INPUT_SIGNUP,
});

export const AJAX_SIGNUP = 'AJAX_SIGNUP';
export const actionSignup = () => ({
  type: AJAX_SIGNUP,
});

export const IS_CREATED = 'IS_CREATED';
export const actionIsCreated = () => ({
  type: IS_CREATED,
});

export const AJAX_TOURNAMENTS = 'AJAX_TOURNAMENTS';

export const actionAjaxTournaments = () => ({
  type: AJAX_TOURNAMENTS,
});
export const SAVE_TOURNAMENTS = 'SAVE_TOURNAMENTS';

export const actionSaveTournaments = (array) => ({
  type: SAVE_TOURNAMENTS,
  value: array,
});
