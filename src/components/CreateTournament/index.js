import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  actionSaveCreateTournament,
  actionClearInputCreateTournament,
  actionChangeInputNameCreateTournament,
  actionChangeInputGameCreateTournament,
  actionChangeInputMaxPlayerCountCreateTournament,
  actionChangeInputDateCreateTournament,
  actionChangeSelectFormatCreateTournament,
  actionChangeSelectTypeCreateTournament,
  actionChangeInputDescriptionCreateTournament,
} from 'src/actions';

function CreateTournament() {
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
    dispatch(
      actionSaveCreateTournament(),
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
