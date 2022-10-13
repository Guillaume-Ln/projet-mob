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
export const AJAX_SAVE_CREATE_TOURNAMENT = 'AJAX_SAVE_CREATE_TOURNAMENT';
export const CHANGE_INPUT_NAME_CREATE_TOURNAMENT = 'CHANGE_INPUT_NAME_CREATE_TOURNAMENT';
export const CHANGE_INPUT_GAME_CREATE_TOURNAMENT = 'CHANGE_INPUT_GAME_CREATE_TOURNAMENT';
// eslint-disable-next-line max-len
/* export const CHANGE_INPUT_MODERATOR_CREATE_TOURNAMENT = 'CHANGE_INPUT_MODERATOR_CREATE_TOURNAMENT'; */
export const CHANGE_INPUT_MAX_PLAYER_COUNT_CREATE_TOURNAMENT = 'CHANGE_INPUT_MAX_PLAYER_COUNT_CREATE_TOURNAMENT';
export const CHANGE_INPUT_DATE_CREATE_TOURNAMENT = 'CHANGE_INPUT_DATE_CREATE_TOURNAMENT';
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
export const actionErrorMessage = (error) => ({
  type: ERROR_MESSAGE,
  error: error,
});
export const actionClearErrorMessage = () => ({
  type: CLEAR_ERROR_MESSAGE,
});
export const actionIsLoading = (bool) => ({
  type: IS_LOADING,
  value: bool,
});

// action create tournament componant

export const actionSaveCreateTournament = () => ({
  type: AJAX_SAVE_CREATE_TOURNAMENT,

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

/* export const actionChangeInputModeratorCreateTournament = (newValue) => ({
  type: CHANGE_INPUT_MODERATOR_CREATE_TOURNAMENT,
  value: newValue,
}); */

export const actionChangeInputMaxPlayerCountCreateTournament = (newValue) => ({
  type: CHANGE_INPUT_MAX_PLAYER_COUNT_CREATE_TOURNAMENT,
  value: newValue,
});

export const actionChangeInputDateCreateTournament = (newValue) => ({
  type: CHANGE_INPUT_DATE_CREATE_TOURNAMENT,
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

export const CHANGE_INPUT_MAIL_VALUE = 'CHANGE_INPUT_MAIL_VALUE';
export const actionChangeInputMailValue = (newValue) => ({
  type: CHANGE_INPUT_MAIL_VALUE,
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

export const AJAX_TOURNAMENT_BY_ID = 'AJAX_TOURNAMENT_BY_ID';
export const actionTournamentById = (id) => ({
  type: AJAX_TOURNAMENT_BY_ID,
  id: id,
});

export const SAVE_DATA_TOURNAMENT = 'SAVE_DATA_TOURNAMENT';
export const actionSaveDataTournament = (obj) => ({
  type: SAVE_DATA_TOURNAMENT,
  value: obj,
});

// export des actions de la page profile

export const GET_PROFILE_BY_ID = 'GET_PROFILE_BY_ID';
export const actionGetProfileById = (id) => ({
  type: GET_PROFILE_BY_ID,
  id: id,
});

export const SAVE_DATA_PROFILE = 'SAVE_DATA_PROFILE';
export const actionSaveDataProfile = (obj) => ({
  type: SAVE_DATA_PROFILE,
  value: obj,
});

export const AJAX_PARTICIPANTS = 'AJAX_PARTICIPANTS';

export const actionParticipants = (id) => ({
  type: AJAX_PARTICIPANTS,
  id: id,
});
export const SAVE_DATA_PARTICIPANTS = 'SAVE_DATA_PARTICIPANTS';

export const actionSaveDataParticipants = (array) => ({
  type: SAVE_DATA_PARTICIPANTS,
  value: array,
});
export const AJAX_REGISTER_TO_THE_TOURNAMENT = 'AJAX_REGISTER_TO_THE_TOURNAMENT';

export const actionRegisterToTheTournament = (id) => ({
  type: AJAX_REGISTER_TO_THE_TOURNAMENT,
  id: id,
});

export const RELOG_ME = 'RELOG_ME';

export const actionRelogMe = () => ({
  type: RELOG_ME,
});
export const REFRESH_TOKEN = 'REFRESH_TOKEN';

export const actionRefreshToken = () => ({
  type: REFRESH_TOKEN,
});
export const AJAX_USER_BY_ID = 'AJAX_USER_BY_ID';

export const actionGetUserById = (id) => ({
  type: AJAX_USER_BY_ID,
  id: id,
});
export const SAVE_USER_PROFIL = 'SAVE_USER_PROFIL';

export const actionSaveUserProfil = (obj) => ({
  type: SAVE_USER_PROFIL,
  value: obj,
});
export const CLEAR_TOURNAMENT_PARTICIPANTS = 'CLEAR_TOURNAMENT_PARTICIPANTS';

export const actionClearTournamentParticipants = () => ({
  type: CLEAR_TOURNAMENT_PARTICIPANTS,
});
export const IS_MODERATOR = 'IS_MODERATOR';

export const actionIsModerator = (bool) => ({
  type: IS_MODERATOR,
  value: bool,
});
export const IS_PARTICIPANT = 'IS_PARTICIPANT';

export const actionIsParticipant = (bool) => ({
  type: IS_PARTICIPANT,
  value: bool,
});
export const EDIT_TOURNAMENT = 'EDIT_TOURNAMENT';

export const actionEditTournament = (bool) => ({
  type: EDIT_TOURNAMENT,
  value: bool,
});
export const PATCH_TOURNAMENT = 'PATCH_TOURNAMENT';

export const actionPatchTournament = (id) => ({
  type: PATCH_TOURNAMENT,
  tournamentId: id,
});
export const AJAX_REMOVE_USER_FROM_TOURNAMENT = 'AJAX_REMOVE_USER_FROM_TOURNAMENT';

export const actionRemoveUserFromTournament = (idTournament, idUser) => ({
  type: AJAX_REMOVE_USER_FROM_TOURNAMENT,
  idTournament,
  idUser,
});
export const AJAX_DELETE_TOURNAMENT = 'AJAX_DELETE_TOURNAMENT';

export const actionDeleteTournament = (id) => ({
  type: AJAX_DELETE_TOURNAMENT,
  idTournament: id,
});
export const CONTACT_MODALE = 'CONTACT_MODALE';

export const actionContactModale = () => ({
  type: CONTACT_MODALE,
});
export const AJAX_TOURNAMENT_STARTED = 'AJAX_TOURNAMENT_STARTED';

export const actionTournamentStarted = (bool) => ({
  type: AJAX_TOURNAMENT_STARTED,
  value: bool,
});
export const AJAX_ENCOUNTER_TOURNAMENT_LIST = 'AJAX_ENCOUNTER_TOURNAMENT_LIST';

export const actionGetEncountersList = (tournamentId) => ({
  type: AJAX_ENCOUNTER_TOURNAMENT_LIST,
  tournamentId,
});
export const SAVE_ENCOUNTERS_LIST = 'SAVE_ENCOUNTERS_LIST';

export const actionSaveEncountersList = (array) => ({
  type: SAVE_ENCOUNTERS_LIST,
  value: array,
});
export const ENCOUNTERS_LIST_MODALE = 'ENCOUNTERS_LIST_MODALE';

export const actionEncountersListModaleIsOpen = (bool) => ({
  type: ENCOUNTERS_LIST_MODALE,
  value: bool,
});
export const AJAX_ENCOUNTERS_LIST_BY_TOURNAMENT_ID = 'AJAX_ENCOUNTERS_LIST_BY_TOURNAMENT_ID';

export const actionGetEncountersListByTournamentId = (id) => ({
  type: AJAX_ENCOUNTERS_LIST_BY_TOURNAMENT_ID,
  value: id,
});
export const SAVE_ENCOUNTERS_TOURNAMENT_LIST_BY_ID_WITH_USERS = 'SAVE_ENCOUNTERS_TOURNAMENT_LIST_BY_ID_WITH_USER';

export const actactionSaveEncountersListByTournamentIdWithUsersion = (array) => ({
  type: SAVE_ENCOUNTERS_TOURNAMENT_LIST_BY_ID_WITH_USERS,
  value: array,
});
export const SAVE_PLAYER1 = 'SAVE_PLAYER1';

export const actionSavePlayer1 = (data) => ({
  type: SAVE_PLAYER1,
  value: data,
});
export const SAVE_PLAYER2 = 'SAVE_PLAYER2';

export const actionSavePlayer2 = (data) => ({
  type: SAVE_PLAYER2,
  value: data,
});
export const AJAX_PATCH_ENCOUNTER = 'AJAX_PATCH_ENCOUNTER';

export const actionPlayerWinLose = (encounterId, winner, loser) => ({
  type: AJAX_PATCH_ENCOUNTER,
  encounterId,
  winner,
  loser,
});
