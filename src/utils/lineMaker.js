/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
const dayjs = require('dayjs');

const axios = require('axios').default;

// ! token mis en dur pour les tests
const yourJWTToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxNCwiZmlyc3RuYW1lIjoiYWFhYSIsImxhc3RuYW1lIjoiYWFhYSIsIm5pY2tuYW1lIjoidGVzdCIsIm1haWwiOiJ0ZXN0QHRlc3QuY29tIiwidHJvcGhpZXMiOjAsImhvbm9yX3BvaW50IjowLCJ0ZWFtIjpudWxsLCJyb2xlIjpudWxsLCJhdmF0YXIiOm51bGwsImNyZWF0ZWRfYXQiOiIyMDIyLTEwLTExVDE1OjEzOjU0LjAzNVoiLCJ1cGRhdGVkX2F0IjoiMjAyMi0xMC0xMVQxNToxMzo1NC4wMzVaIn0sImlhdCI6MTY2NTUwMTI0NCwiZXhwIjoxNjY1NTA0ODQ0fQ.PklADqB2OVm5Cjj1ICzsWT8_BQGTwh5otkRd1WsTlhA';
const instance = axios.create(
  {
    baseURL: 'https://mob-multiplayer-online-bracket.herokuapp.com',
    headers: {
      Authorization: `Bearer ${yourJWTToken}`,
    },
  },
);

// import de la liste des participant et de la fonction pour les "randomizé"
const dataTest = require('./dataTestParticipantsList');
const participantRandomizerPicker = require('./participantRandomizerPicker');

const randomizedList = [...participantRandomizerPicker(dataTest)];

// Le but de cette fonction est de créer ligne de rencontre
// dans le but de pouvoir automatiser les rencontre par "tours" (ligne) pour un tournoi précis
// je recois un tableau avec un nombre de participants qui
// a déja été selectionner aléatoirement grace a participantRandomizerPicker
/**
 * @param {array} participantsList - a list randomized off participants.
 * @param {number} tournamentId - The Id of a tournament.
 */
const lineMaker = (participantsList, tournamentId) => {
  // on récupère les participants déja "randomizé"
  const randomListForRounds = [...participantsList];

  // on en prend les deux premier pour créer une rencontre
  // on créer une rencontre
  instance.post('/api/encounters', {
    date: dayjs().format('YYYY-MM-DDTHH:mm:ss.SSSZ'),
    tournament_id: tournamentId,
  })
    .then((response) => {
      console.log('encounter correctly created');
      const encournterId = response.data.id;
      // suite a la création d'une rencontre, on vient bouclé 2 fois pour mettre les ID de deux joueurs dans cette rencontre
      if (randomListForRounds.length === 1) {
        instance.post(`/api/encounters/${encournterId}/profiles/`, {
          user_id: randomListForRounds[0].id,
        })
          .then((response2) => {
            console.log(response2.data);
          })
          .catch(() => console.log('something went wrong : adding participant to an encounter error'));
      }
      else {
        for (let j = 0; j <= 1; j += 1) {
          instance.post(`/api/encounters/${encournterId}/profiles/`, {
            user_id: randomListForRounds[j].id,
          })
            .then((response2) => {
              console.log(response2.data);
            })
            .catch(() => console.log('something went wrong : adding participant to an encounter error'));
        }
      }
    })
    .catch((error) => console.log('something went wrong : encounter creation error', error));
};

const init = () => {
  do {
    lineMaker(randomizedList, 1); // pour les tests j'utilise le tournoi qui a pour id 1
    randomizedList.splice(0, 2);
    console.log(randomizedList.length);
  } while (randomizedList.length >= 1);
};

init();
