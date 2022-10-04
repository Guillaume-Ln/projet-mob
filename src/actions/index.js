// export des actions de la page connexion

export const CHANGE_INPUT_LOGIN_CONNEXION_VALUE = 'CHANGE_INPUT_LOGIN_CONNEXION_VALUE';
export const actionChangeInputLoginConnexionValue = (newValue) => ({
  type: CHANGE_INPUT_LOGIN_CONNEXION_VALUE,
  value: newValue,
});

export const CHANGE_INPUT_PASSWORD_CONNEXION_VALUE = 'CHANGE_INPUT_PASSWORD_CONNEXION_VALUE';
export const actionChangeInputPasswordConnexionValue = (newValue) => ({
  type: CHANGE_INPUT_PASSWORD_CONNEXION_VALUE,
  value: newValue,
});

export const AJAX_LOGIN = 'AJAX_LOGIN';
export const actionLogin = () => ({
  type: AJAX_LOGIN,
});

export const IS_LOGGED = 'IS_LOGGED';
export const actionIsLogged = () => ({
  type: IS_LOGGED,
});

export const CLEAR_INPUT_LOGIN = 'CLEAR_INPUT_LOGIN';
export const actionClearInputLogin = () => ({
  type: CLEAR_INPUT_LOGIN,
});

export const CHANGE_INPUT_SEARCH_VALUE = 'CHANGE_INPUT_SEARCH_VALUE';
export const actionChangeInputSearchValue = (newValue) => ({
  type: CHANGE_INPUT_SEARCH_VALUE,
  value: newValue,
});

export const SIGNIN_IS_VISIBLE = 'SIGNIN_IS_VISIBLE';
export const actionSigninIsVisible = () => ({
  type: SIGNIN_IS_VISIBLE,
});

export const DISCONNECT = 'DISCONNECT';
export const actionDisconnect = () => ({
  type: DISCONNECT,
});

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
