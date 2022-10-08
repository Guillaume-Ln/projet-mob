import axios from 'axios';

const getNickNameById = (id) => {
  // on a un id
  // on récupere le profil correspondant a l'id sur la route : get /api/profiles/{id}
  const yourJWTToken = localStorage.getItem('authorization');
  axios.get(`https://mob-multiplayer-online-bracket.herokuapp.com/api/profiles/${id}`, {
    Authorization: `Bearer ${yourJWTToken}`,
  })
    .then((response) => {
    // en cas de réussite de la requête
      console.log('log de succes utils/getNicknameById', response);
    })
    .catch((error) => {
    // en cas d’échec de la requête
      console.log('log d\'erreur utils/getNicknameById', error);
    })
    .then(() => {
    // dans tous les cas
    });
};
export default getNickNameById;
