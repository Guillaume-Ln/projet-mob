import './style.scss';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actionGetProfileById } from '../../actions';

function Profile() {
  const dispatch = useDispatch();
  const dataProfile = useSelector((state) => state.dataProfile);
  const { id } = useParams();

  useEffect(() => {
    dispatch(actionGetProfileById(id));
  });

  return (
    <main className="main-profile">
      <section className="profile-header">
        <img className="profile-header-pp" src="../../src/assets/images/pptest.png" alt="profile_picture" />
        <p className="profile-header-id">ID: <span className="profile-header-id-data">{dataProfile.id}</span></p>
      </section>
      <section className="profile-infos-and-stats">
        <section className="profile-infos-and-stats-info">
          <p className="profile-infos">Pseudo</p>
          <p className="profile-infos-data">{dataProfile.nickname}</p>
          <p className="profile-infos">Prénom</p>
          <p className="profile-infos-data">{dataProfile.firstname}</p>
          <p className="profile-infos">Nom</p>
          <p className="profile-infos-data">{dataProfile.lastname}</p>
          <p className="profile-infos">Mail</p>
          <p className="profile-infos-data">{dataProfile.mail}</p>
          <p className="profile-infos">Team</p>
          <p className="profile-infos-data">{dataProfile.team}</p>
          <div className="profile-infos-button">
            <button type="button" className="profile-modification-button pointer"> Modifier mon profile </button>
            <span className="profile-edit-password pointer">Modifier mon mot de passe</span>
            <span className="profile-delete pointer">Supprimer mon compte</span>
          </div>
        </section>
        <section className="profil-infos-and-stats-stats">
          <div className="stats-pannel">
            <div className="stats-pannel-header">
              <span className="stats-pannel-header-tab active-tab">Win/Lose</span>
              <span className="stats-pannel-header-tab">Trophées</span>
            </div>
            <div className="stats-pannel-header-stats" />
          </div>
        </section>
      </section>
    </main>
  );
}
export default Profile;
