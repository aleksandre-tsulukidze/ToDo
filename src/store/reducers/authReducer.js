import { updateObject } from '../../util/updateObject';

const initialState = {
  uid: '',
  err: '',
  loading: false,
};

const loginSuccess = (state, action) => {
  return updateObject(state, { uid: action.uid });
};

const registerSuccess = (state, action) => {
  return updateObject(state, { uid: action.uid });
};

const logoutSuccess = state => {
  return updateObject(state, { uid: '' });
};

const loginFail = (state, action) => {
  return updateObject(state, { err: action.err });
};

const registerFail = (state, action) => {
  return updateObject(state, { err: action.err });
};

const failed = state => {
  return updateObject(state, { err: 'Something Went Wrong' });
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return loginSuccess(state, action);
    case 'REGISTER_SUCCESS':
      return registerSuccess(state, action);
    case 'LOGOUT_SUCCESS':
      return logoutSuccess(state, action);
    case 'LOGIN_FAIL':
      return loginFail(state, action);
    case 'REGISTER_FAIL':
      return registerFail(state, action);
    default:
      return failed(state, action);
  }
};
export default authReducer;
