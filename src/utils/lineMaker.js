/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
const dayjs = require('dayjs');
const axios = require('axios').default;
const participantRandomizerPicker = require('./participantRandomizerPicker');

// Le but de cette fonction est de créer ligne de rencontre
// dans le but de pouvoir automatiser les rencontre par "tours" (ligne) pour un tournoi précis
// je recois un tableau avec un nombre de participants qui
// a déja été selectionner aléatoirement grace a participantRandomizerPicker
/**
 * @param {array} participantsList - a list randomized off participants.
 * @param {number} tournamentId - The Id of a tournament.
 */
const lineMaker = (participantsList, tournamentId, token) => {
  const instance = axios.create(
    {
      baseURL: 'https://mob-multiplayer-online-bracket.herokuapp.com',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
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

const getTournamentLine = (participantsList, tournamentId, token) => {
  const randomizedList = participantRandomizerPicker(participantsList);
  do {
    lineMaker(randomizedList, tournamentId, token);
    randomizedList.splice(0, 2);
  } while (randomizedList.length >= 1);
};

getTournamentLine();

module.exports = getTournamentLine;
