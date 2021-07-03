import { firebaseAuth } from '../../firebase/index';

export const loginSuccess = uid => {
  return {
    type: 'LOGIN_SUCCESS',
    uid: uid,
  };
};

export const registerSuccess = uid => {
  return {
    type: 'REGISTER_SUCCESS',
    uid: uid,
  };
};

export const logoutSuccess = () => {
  return {
    type: 'LOGOUT_SUCCESS',
  };
};

export const logInFail = err => {
  return {
    type: 'LOGIN_FAIL',
    err: err,
  };
};

export const registerFail = err => {
  return {
    type: 'REGISTER_FAIL',
    err: err,
  };
};

export const login = (email1, password1) => {
  return dispatch => {
    firebaseAuth
      .signInWithEmailAndPassword(email1, password1)
      .then(response => dispatch(loginSuccess(response.user.uid)))
      .catch(err => dispatch(logInFail(err)));
  };
};

export const register = (email, password) => {
  return dispatch => {
    firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(response => dispatch(registerSuccess(response.user.uid)))
      .catch(err => dispatch(registerFail(err)));
  };
};

export const logout = () => {
  return dispatch => {
    firebaseAuth
      .signOut()
      .then(() => {
        dispatch(logoutSuccess());
      })
      .catch(err => console.log(err));
  };
};
