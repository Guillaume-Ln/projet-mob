/* eslint-disable max-len */
// import de data, a remplacer par un call api de la liste des participants
const dataTest = require('./dataTestParticipantsList');

// Depuis un tableau de participans on veut pouvoir "randomisé" les participants et extraire a chaque appel 1 joueur
// le joueur selectionné ne devra pas pouvoir être selectionner une autre foi tant que tout les participants non pas été selectionné une foi.

/**
 * @param {arrayOfObject} participants - a list randomized off participants.
 */
const participantRandomizerPicker = (participants) => {
  // on récupère le tableau
  const participantsList = [...participants];
  // on initialise un tableau de selectionné aléatoirement
  const selected = [];

  do {
    // on choisi un nombre au hazard entre 0 et le nombre de participant pour avoir l'index du participant
    const randomIndex = Math.floor(Math.random() * (participantsList.length));
    // on met le selectionner dans un deuxième tableau et le retire du tableau
    // on en choisi un qu'on met dans le tableau selected
    selected.push(participantsList[randomIndex]);
    // on retire les autres.
    participantsList.splice(randomIndex, 1);
  } while (participantsList.length !== 0); // on boucle jusqua ce qu'il n'y a plus de participants.

  // on retourne les participants séléctionné aléatoirement
  return selected;
};
participantRandomizerPicker(dataTest); // pour le test je prend les infos en dure

export default participantRandomizerPicker;
