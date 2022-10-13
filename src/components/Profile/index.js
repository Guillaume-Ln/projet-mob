/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import './style.scss';
// import profileImage from 'src/assets/images/pptest.png';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PwdModale from '../PwdModale';
import NewPwdModale from '../NewPwdModale';
import ModaleUpdate from '../ModaleUpdate';
import {
  actionGetProfileById,
  actionPwdModale,
  actionNewPwdModale,
  actionModaleUpdate,
} from '../../actions';

function Profile() {
  const dispatch = useDispatch();
  const dataProfile = useSelector((state) => state.dataProfile);
  const modalePwd = useSelector((state) => state.modalePwd);
  const modaleNewPwd = useSelector((state) => state.modaleNewPwd);
  const modaleUpdate = useSelector((state) => state.modaleUpdate);
  const { id } = useParams();

  useEffect(() => {
    dispatch(actionGetProfileById(id));
    if (window.localStorage) {
      if (!localStorage.getItem('firstLoad')) {
        localStorage.firstLoad = true;
        window.location.reload();
      }
      else {
        localStorage.removeItem('firstLoad');
      }
    }
  }, []);

  const handleDeleteProfile = () => {
    if (confirm('Voulez vous vraiment supprimer votre profil ?')) {
      dispatch(actionPwdModale(true));
    }
  };

  const handlePatchProfilePwd = () => {
    if (confirm('Voulez vous modifier votre mot de passe ?')) {
      dispatch(actionNewPwdModale(true));
    }
  };

  const handlePatchProfileUpdate = () => {
    dispatch(actionModaleUpdate(true));
  };

  return (
    <main className="main-profile">
      {modalePwd && <PwdModale />}
      {modaleNewPwd && <NewPwdModale />}
      {modaleUpdate && <ModaleUpdate />}
      <section className="profile-header">
        <img className="profile-header-pp" src={dataProfile.avatar} alt="profile_picture" />
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
            <button type="button" className="profile-modification-button pointer" onClick={handlePatchProfileUpdate}> Modifier mon profil </button>
            <span className="profile-edit-password pointer" onClick={handlePatchProfilePwd}>Modifier mon mot de passe</span>
            <span className="profile-delete pointer" onClick={handleDeleteProfile}>Supprimer mon compte</span>
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
