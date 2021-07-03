import React, { useState } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../store/actions/authActions';

import Auth from './Auth';
import '../css/sidebar.css';

const TopNav = ({ onLogout, uid }) => {
  const [clicked, setClicked] = useState(false);
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  return (
    <div className="sidebar">
      <img src="https://via.placeholder.com/120" alt="site logo"></img>
      {uid ? (
        <button
          style={{ marginTop: '1rem' }}
          onClick={() => {
            onLogout(), setLogin(false), setRegister(false);
          }}>
          Logout
        </button>
      ) : (
        <div className="sidebarWrapper">
          <button
            onClick={() => {
              setLogin(l => !l), setClicked(c => !c);
            }}>
            Login
          </button>
          <button onClick={() => (setRegister(r => !r), setClicked(c => !c))}>
            Register
          </button>
        </div>
      )}
      {(login || register) && clicked ? (
        <Auth
          setClicked={setClicked}
          setLogin={setLogin}
          setRegister={setRegister}
          login={login}
          reg={register}
        />
      ) : null}
    </div>
  );
};

TopNav.propTypes = {
  uid: propTypes.string,
  onLogout: propTypes.func,
};

const mapStateToProps = state => {
  return {
    uid: state.uid,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: (email, password) => dispatch(actions.logout(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopNav);
