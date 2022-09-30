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
