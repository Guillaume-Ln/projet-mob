/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable max-len */
import './style.scss';
import deletIcon from 'src/assets/icon/deletIcon.png';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import getTournamentLine from '../../utils/lineMaker';
import tournamentImg from '../../assets/images/téléchargement.jpeg';
import {
  actionTournamentById,
  actionParticipants,
  actionRegisterToTheTournament,
  actionGetUserById,
  actionIsModerator,
  actionIsParticipant,
  actionEditTournament,
  actionClearInputCreateTournament,
  actionChangeInputDescriptionCreateTournament,
  actionChangeSelectTypeCreateTournament,
  actionChangeSelectFormatCreateTournament,
  actionChangeInputDateCreateTournament,
  actionChangeInputMaxPlayerCountCreateTournament,
  actionChangeInputGameCreateTournament,
  actionChangeInputNameCreateTournament,
  actionPatchTournament,
  actionRemoveUserFromTournament,
  actionDeleteTournament,
  actionTournamentStarted,
  actionGetEncountersList,
  actionEncountersListModaleIsOpen,
} from '../../actions';
import Participant from './Participant';
import EncountersModale from './EncountersModale';

function Tournament() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // * on récupère les infos de l'utilisateur
  const user = useSelector((state) => state.user);
  // * on récupère les infos du tournoi
  const dataTournament = useSelector((state) => state.dataTournament);
  // * on récupère les participants au tournoi
  const participantsId = useSelector((state) => state.tournamentParticipantsid);
  const participants = useSelector((state) => state.tournamentParticipants);
  const isModerator = useSelector((state) => state.isModerator);
  const isParticipant = useSelector((state) => state.isParticipant);
  const isConnected = useSelector((state) => state.isConnected);
  const editTournament = useSelector((state) => state.editTournament);
  const tournamentStarted = useSelector((state) => state.tournamentStarted);
  const encountersList = useSelector((state) => state.encountersList);
  const encountersListModaleIsOpen = useSelector((state) => state.encountersListModaleIsOpen);

  const { id } = useParams(); // on récupère l'ID du tournoi
  const tournamentId = parseInt(id, 10);

  useEffect(() => {
    // on demande les infos d'un tournoi qu'on stock dans le store grace a l'ID
    dispatch(actionTournamentById(tournamentId));
    // on recupère la liste des rencontre lié au tournoi
    dispatch(actionGetEncountersList(tournamentId));
    // on récupère les participants au tournoi si l'on est connecté que l'on stock dans le store
    if (isConnected) {
      dispatch(actionParticipants(tournamentId));
    }
  }, []);

  useEffect(() => {
    // on vérifie si l'utilisateur est modérateur du tournoi
    if (dataTournament.user_id === user.id) {
      dispatch(actionIsModerator(true));
    }
  }, [dataTournament]);

  useEffect(() => {
    participantsId.forEach((p) => dispatch(actionGetUserById(p.user_id))); // pour chaque id de participant recu, on va chercher leur profile
    // cette condition vérifi si je suis inscrit au tournoi
    if (participantsId.filter((participant) => participant.user_id === user.id).length === 1) {
      dispatch(actionIsParticipant(true));
    }
  }, [participantsId]);

  // console.log(getTournamentLine(participants, dataTournament.id, localStorage.getItem('authorization')));

  const handleModerationClick = () => {
    // on dit au state qu'on veut modifier avec un editTournament true
    dispatch(actionEditTournament(true));
  };
  const handleRegisterClick = () => {
    // au clic on ajax l'user ID sur la route post api/tournaments/:id/profiles
    dispatch(actionRegisterToTheTournament(tournamentId));
  };
  const handleUnRegisterClick = () => {
    dispatch(actionRemoveUserFromTournament(tournamentId, user.id));
  };
  const handleCreateEncounters = () => {
    if (dataTournament && participants) {
      getTournamentLine(participants, dataTournament.id, localStorage.getItem('authorization')); // la fonction pour créer une ligne de tournoi par rapport au participants inscrit a ce tournoi
      dispatch(actionTournamentStarted(true));
    }
  };
  const handleEncounters = () => {
    /*
   // * au clique on ouvre une modale
   // * dans cette modale on a la liste des encounters
    * au click sur un encounters une autre modale
    * dans cette modale, juste des radio boutton, valider, cancel
    * on choisi un vainquer
    * cancel ferme la modale
    * valide patch cette encounter sur la route api/encounters/{encounterId} et close modale comme cancel
    */
    dispatch(actionEncountersListModaleIsOpen(true));
  };
  const handleForwardTournament = () => {
    /*
    * au clique: on vérifie si toute les rencontre de ce tournois qui on été créer on un vainqueur
    * on récupere la liste des vainqueur restants
    * création du Xième tour de rencontre (création de rencontre par rapport a la liste existance de participants restant)
    */
  };
  const handleCloseEncountersList = () => {
    dispatch(actionEncountersListModaleIsOpen(false));
  };

  // *******************/ partie formulaire
  const inputNameCreateTournament = useSelector((state) => state.inputCreateTournament.label);
  const inputGameCreateTournament = useSelector((state) => state.inputCreateTournament.game);
  const inputParticipantsNumbersCreateTournament = useSelector(
    (state) => state.inputCreateTournament.max_player_count,
  );
  const inputDateCreateTournament = useSelector(
    (state) => state.inputCreateTournament.date,
  );
  const selectFormatCreateTournament = useSelector(
    (state) => state.inputCreateTournament.format,
  );
  const selectTypeCreateTournament = useSelector(
    (state) => state.inputCreateTournament.type,
  );
  const inputDescriptionCreateTournament = useSelector(
    (state) => state.inputCreateTournament.description,
  );
  const handleChangeName = (event) => {
    dispatch(
      actionChangeInputNameCreateTournament(event.target.value),
    );
  };

  const handleChangeGame = (event) => {
    dispatch(
      actionChangeInputGameCreateTournament(event.target.value),
    );
  };

  const handleChangeParticipantsNumbers = (event) => {
    dispatch(
      actionChangeInputMaxPlayerCountCreateTournament(event.target.value),
    );
  };

  const handleChangeDate = (event) => {
    dispatch(
      actionChangeInputDateCreateTournament(event.target.value),
    );
  };

  const handleChangeFormat = (event) => {
    dispatch(
      actionChangeSelectFormatCreateTournament(event.target.value),
    );
  };

  const handleChangeType = (event) => {
    dispatch(
      actionChangeSelectTypeCreateTournament(event.target.value),
    );
  };

  const handleChangeDescription = (event) => {
    dispatch(
      actionChangeInputDescriptionCreateTournament(event.target.value),
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(actionPatchTournament(tournamentId));
    dispatch(actionClearInputCreateTournament());
    dispatch(actionEditTournament(false));
  };

  const handleCancel = (event) => {
    event.preventDefault();
    dispatch(actionClearInputCreateTournament());
    dispatch(actionEditTournament(false));
    dispatch(actionEncountersListModaleIsOpen(false));
  };
  const handleDeleteTournament = () => {
    if (confirm('Voulez vous vraiment supprimer ce tournoi?')) {
      dispatch(actionDeleteTournament(tournamentId));
      dispatch(actionClearInputCreateTournament());
      dispatch(actionEditTournament(false));
      navigate('/tournaments');
    }
  };
  // *******************/ partie formulaire fin

  return (
    <main className="main-tournament">
      {/* partie formulaire a revoir quand un composant aura été fait */}
      {editTournament && (
      <article className="creation-info">
        <form onSubmit={handleSubmit} className="creation-input-container">
          <div className="creation-input-group">
            <label htmlFor="inputTournamentName" className="create-label">Nom du tournoi
              <input value={inputNameCreateTournament} onChange={handleChangeName} required="" id="inputTournamentName" type="text" name="text" autoComplete="on" className="creation-input" />
            </label>
          </div>
          <div className="creation-input-group">
            <label htmlFor="inputGameName" className="create-label">Nom du jeu
              <input value={inputGameCreateTournament} onChange={handleChangeGame} required="" id="inputGameName" type="text" name="text" autoComplete="off" className="creation-input" />
            </label>
          </div>
          <div className="creation-input-group">
            <label htmlFor="inputParticipantsNumbers" className="create-label">Nombre de Participants / Equipes
              <input value={inputParticipantsNumbersCreateTournament} onChange={handleChangeParticipantsNumbers} required="" id="inputParticipantsNumbers" type="number" min="2" name="number" autoComplete="off" className="creation-input" />
            </label>
          </div>
          <div className="creation-input-group">
            <label htmlFor="inputDate" className="create-label">Date & Heure
              <input value={inputDateCreateTournament} onChange={handleChangeDate} required="" id="inputDate" type="datetime-local" name="date" autoComplete="off" className="creation-input" />
            </label>
          </div>
          {/* ajout de format et type */}
          <div className="creation-input-group">
            <label htmlFor="inputFormat" className="create-label">Format
              <select value={selectFormatCreateTournament} onChange={handleChangeFormat} required="" id="inputFormat" type="text" name="text" autoComplete="off" className="creation-input">
                <option value="">--Choisissez une option--</option>
                <option value="single-elimination">single elimination</option>
              </select>
            </label>
          </div>
          <div className="creation-input-group">
            <label htmlFor="inputType" className="create-label">Type
              <select value={selectTypeCreateTournament} onChange={handleChangeType} required="" id="inputType" type="text" name="text" autoComplete="off" className="creation-input">
                <option value="">--Choisissez une option--</option>
                <option value="privé">Privé</option>
                <option value="publique">Publique</option>
              </select>
            </label>
          </div>
          <div className="creation-input-group">
            <label htmlFor="inputDescription" className="create-label">Description
              <textarea value={inputDescriptionCreateTournament} onChange={handleChangeDescription} required="" id="inputDescription" type="text" name="text" autoComplete="off" className="creation-input" rows="5" />
            </label>
          </div>
          <div className="button-group">
            <button onClick={handleSubmit} type="submit" className="creation-button">Valider</button>
            <button onClick={handleCancel} type="button" className="creation-button">Annuler</button>
            <button onClick={handleDeleteTournament} type="button" className="creation-button">Supprimer le tournoi</button>
            { !tournamentStarted && <button onClick={handleCreateEncounters} type="button" className="creation-button">Créer les rencontres</button> }
          </div>

        </form>
      </article>
      )}
      {/* fin partie formulaire a revoir quand un composant aura été fait */}
      <div className="top">
        <div className="container">
          <section className="one-tournament-container">
            <section className="one-tournament-container-info-and-description">
              <div className="one-tournament-container-info-and-description-info">
                <img className="one-tournament-info-img" src={tournamentImg} alt="" />
                <h3 className="one-tournament-info-title">{dataTournament.label}</h3>
                <p className="one-tournament-info">Type :<span className="one-tournament-data">{dataTournament.type}</span></p>
                <p className="one-tournament-info">Jeu :<span className="one-tournament-data">{dataTournament.game}</span></p>
                <p className="one-tournament-info">Participants :<span className="one-tournament-data">{dataTournament.max_player_count}</span></p>
                <p className="one-tournament-info">Format :<span className="one-tournament-data">{dataTournament.format}</span></p>
                <p className="one-tournament-info">Modérateur :<span className="one-tournament-data">{dataTournament.user_id}</span></p>
              </div>
              <div className="one-tournament-container-info-and-description-description">
                <p className="one-tournament-description"><span className="one-tournament-description-description">Description :</span><span className="one-tournament-data">{dataTournament.description}</span></p>
              </div>
            </section>
            <section className="one-tournament-container-button-container">
              {/* // ! ce boutton 'moderation' ne doit être visible que si on est modérateur */}
              { (isConnected && isModerator) && <button onClick={handleModerationClick} type="button" className="button-moderate">Moderation</button> }
              { ((dataTournament.type === 'public' || dataTournament.type === 'publique') && !tournamentStarted && isConnected && !isParticipant) && <button onClick={handleRegisterClick} type="button" className="button-inscription">S'inscrire</button> }
              { isParticipant && <button onClick={handleUnRegisterClick} type="button" className="button-inscription">Se désinscrire</button> }
            </section>
          </section>
        </div>
        <div className="bracket">
          {!editTournament && (
          <>
            <div className="row r1">
              <div className="encounter e1">
                <div className="player p1">1</div>
                <div className="player p2">2</div>
              </div>
              <div className="encounter e2">
                <div className="player p3">3</div>
                <div className="player p4">4</div>
              </div>
              <div className="encounter e3">
                <div className="player p5">5</div>
                <div className="player p6">6</div>
              </div>
              <div className="encounter e4">
                <div className="player p7">7</div>
                <div className="player p8">8</div>
              </div>
            </div>
            <div className="row-spacer">
              <p className="text-bracket">]</p>
              <p className="text-bracket">]</p>
            </div>
            <div className="row r2">
              <div className="encounter e5">
                <div className="player p1">2</div>
                <div className="player p2">3</div>
              </div>
              <div className="encounter e6">
                <div className="player p1">7</div>
                <div className="player p2">8</div>
              </div>
            </div>
            <div className="row-spacer">
              <p className="text-bracket">]</p>
            </div>
            <div className="row r3">
              <div className="encounter e7">
                <div className="player p1">2</div>
                <div className="player p2">7</div>
              </div>
            </div>
          </>
          )}
          {encountersListModaleIsOpen && (
            <section className="encounters-modale">
              <p>Identifier le vainqueur</p>
              <img onClick={handleCloseEncountersList} className="encounters-modale-deletIcon" src={deletIcon} alt="close" />
              {encountersList.map((encounter) => <EncountersModale key={encounter.id} encounter={encounter} />)}
            </section>
          )}
          {editTournament && (
            <>
              <button onClick={handleEncounters} type="button">Déclarer un/des vainqueur</button>
              <button onClick={handleForwardTournament} type="button">Suite du tournoi</button>
            </>
          )}
        </div>

      </div>
      {isConnected && (
      <section className="participants">
        {participants.map((participant, index) => (
          <Participant key={participant.nickname} index={index} participant={participant} idTournament={tournamentId} />
        ))}
      </section>
      )}
    </main>
  );
}

export default Tournament;
