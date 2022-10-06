import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  actionSaveCreateTournament,
  actionClearInputCreateTournament,
  actionChangeInputNameCreateTournament,
  actionChangeInputGameCreateTournament,
  actionChangeInputModeratorCreateTournament,
  actionChangeInputParticipantsNumbersCreateTournament,
  actionChangeInputStartDateCreateTournament,
  actionChangeInputStartTimeCreateTournament,
  actionChangeSelectFormatCreateTournament,
  actionChangeSelectTypeCreateTournament,
  actionChangeInputDescriptionCreateTournament,
} from 'src/actions';

function CreateTournament() {
/*   const inputNameValue = useSelector((state) => ) */
  const inputNameCreateTournament = useSelector((state) => state.inputCreateTournament.name);
  const inputGameCreateTournament = useSelector((state) => state.inputCreateTournament.game);
  const inputModeratorCreateTournament = useSelector(
    (state) => state.inputCreateTournament.moderator,
  );
  const inputParticipantsNumbersCreateTournament = useSelector(
    (state) => state.inputCreateTournament.participants_numbers,
  );
  const inputStartDateCreateTournament = useSelector(
    (state) => state.inputCreateTournament.start_date,
  );
  const inputStartTimeCreateTournament = useSelector(
    (state) => state.inputCreateTournament.start_time,
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
  const dispatch = useDispatch();

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

  const handleChangeModerator = (event) => {
    dispatch(
      actionChangeInputModeratorCreateTournament(event.target.value),
    );
  };

  const handleChangeParticipantsNumbers = (event) => {
    dispatch(
      actionChangeInputParticipantsNumbersCreateTournament(event.target.value),
    );
  };

  const handleChangeStartDate = (event) => {
    dispatch(
      actionChangeInputStartDateCreateTournament(event.target.value),
    );
  };

  const handleChangeStartTime = (event) => {
    dispatch(
      actionChangeInputStartTimeCreateTournament(event.target.value),
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
    dispatch(
      actionSaveCreateTournament(event.target.value),
    );
  };

  const handleReset = (event) => {
    event.preventDefault();
    dispatch(
      actionClearInputCreateTournament(),
    );
  };

  return (

    <main className="main-create">
      <section className="main-creation">
        <div className="main-creation-page">
          <h3 className="main-creation-page-title">Création d'un tournoi</h3>
          {/* page de creation de tournoi */}
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
                <label htmlFor="inputModerator" className="create-label">Modérateur
                  <input value={inputModeratorCreateTournament} onChange={handleChangeModerator} required="" id="inputModerator" type="text" name="text" autoComplete="off" className="creation-input" />
                </label>
              </div>
              <div className="creation-input-group">
                <label htmlFor="inputParticipantsNumbers" className="create-label">Nombre de Participants / Equipes
                  <input value={inputParticipantsNumbersCreateTournament} onChange={handleChangeParticipantsNumbers} required="" id="inputParticipantsNumbers" type="number" min="2" name="number" autoComplete="off" className="creation-input" />
                </label>
              </div>
              <div className="creation-input-group">
                <label htmlFor="inputStartDate" className="create-label">Date de début
                  <input value={inputStartDateCreateTournament} onChange={handleChangeStartDate} required="" id="inputStartDate" type="date" name="date" autoComplete="off" className="creation-input" />
                </label>
              </div>
              <div className="creation-input-group">
                <label htmlFor="inputStartTime" className="create-label">Heure de début
                  <input value={inputStartTimeCreateTournament} onChange={handleChangeStartTime} required="" id="inputStartTime" type="time" name="time" autoComplete="off" className="creation-input" />
                </label>
              </div>
              {/* ajout de format et type */}
              <div className="creation-input-group">
                <label htmlFor="inputFormat" className="create-label">Format
                  <select value={selectFormatCreateTournament} onChange={handleChangeFormat} required="" id="inputFormat" type="text" name="text" autoComplete="off" className="creation-input">
                    <option value="">--Choisissez une option--</option>
                    <option value="play-off">play-off</option>
                  </select>
                </label>
              </div>
              <div className="creation-input-group">
                <label htmlFor="inputType" className="create-label">Type
                  <select value={selectTypeCreateTournament} onChange={handleChangeType} required="" id="inputType" type="text" name="text" autoComplete="off" className="creation-input">
                    <option value="">--Choisissez une option--</option>
                    <option value="private">Privé</option>
                    <option value="public">Public</option>
                  </select>
                </label>
              </div>
              <div className="creation-input-group">
                <label htmlFor="inputDescription" className="create-label">Description
                  <textarea value={inputDescriptionCreateTournament} onChange={handleChangeDescription} required="" id="inputDescription" type="text" name="text" autoComplete="off" className="creation-input" rows="5" />
                </label>
              </div>
              <div className="button-group">
                <button type="submit" className="creation-button">CREER</button>
                <button onClick={handleReset} type="button" className="creation-button">RESET</button>
              </div>

            </form>
          </article>
          {/* page de creation de tournoi */}
        </div>
      </section>
    </main>

  );
}
export default CreateTournament;
