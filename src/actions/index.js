export const CHANGE_INPUT_LOGIN_CONNEXION_VALUE = 'CHANGE_INPUT_LOGIN_CONNEXION_VALUE';
export const CHANGE_INPUT_PASSWORD_CONNEXION_VALUE = 'CHANGE_INPUT_PASSWORD_CONNEXION_VALUE';
export const CHANGE_INPUT_SEARCH_VALUE = 'CHANGE_INPUT_SEARCH_VALUE';

export const actionChangeInputLoginConnexionValue = (newValue) => ({
  type: CHANGE_INPUT_LOGIN_CONNEXION_VALUE,
  value: newValue,

});

export const actionChangeInputPasswordConnexionValue = (newValue) => ({
  type: CHANGE_INPUT_PASSWORD_CONNEXION_VALUE,
  value: newValue,

});

export const actionChangeInputSearchValue = (newValue) => ({
  type: CHANGE_INPUT_SEARCH_VALUE,
  value: newValue,

});
