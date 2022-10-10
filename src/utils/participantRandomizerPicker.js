/* eslint-disable max-len */
// Depuis un tableau de participans on veut pouvoir "randomisé" les participants et extraire a chaque appel 1 joueur
// le joueur selectionné ne devra pas pouvoir être selectionner une autre foi tant que tout les participants non pas été selectionné une foi.

const participantRandomizerPicker = (array) => {
  // on récupère le tableau
  const participantsList = array;
  // on choisi un nombre au hazard entre 0 et le nombre de participant pour avoir l'index du participant
  const randomIndex = Math.floor(Math.random() * (participantsList.length));
  // on met le selectionner dans un deuxième tableau et le retire du tableau
  // on en choisi un
  const selected = participantsList[randomIndex];
  // on retir les autres.
  participantsList.splice(randomIndex, 1);
  console.log('randomIndex', randomIndex);
  console.log('selected : ', selected);
  console.log('participantsList : ', participantsList);
};

const dataTest = ['zerator', 'misterMV', 'shisheyu', 'antoineDanniel', 'bob lennon', 'laink', 'terracid'];
participantRandomizerPicker(dataTest);
