export const CHANGE_INPUT_LOGIN_CONNEXION_VALUE = 'CHANGE_INPUT_LOGIN_CONNEXION_VALUE';
export const CHANGE_INPUT_PASSWORD_CONNEXION_VALUE = 'CHANGE_INPUT_PASSWORD_CONNEXION_VALUE';

export const actionChangeInputLoginConnexionValue = (newValue) => ({
  type: CHANGE_INPUT_LOGIN_CONNEXION_VALUE,
  value: newValue,

});

export const actionChangeInputPasswordConnexionValue = (newValue) => ({
  type: CHANGE_INPUT_PASSWORD_CONNEXION_VALUE,
  value: newValue,

});

export const AJAX_LOGIN = 'AJAX_LOGIN';

export const actionLogin = () => ({
  type: AJAX_LOGIN,
});
