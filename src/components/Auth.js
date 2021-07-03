import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../store/actions/authActions';
import '../css/auth.css';
import { useForm } from 'react-hook-form';

const Auth = ({
  setClicked,
  reg,
  login,
  setLogin,
  setRegister,
  onRegister,
  onLogin,
}) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.onresize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
  }, [width]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onClickHandler = e => {
    if (e.target.className === 'wrapper') {
      setClicked(c => !c);
      if (login) {
        setLogin(!login);
      } else {
        setRegister(!reg);
      }
    }
  };
  return (
    <div
      onClick={e => onClickHandler(e)}
      style={{ width: width, height: height }}
      className="wrapper">
      {reg ? (
        <form
          className="authForm"
          onSubmit={handleSubmit((data, e) => {
            onRegister(data.email, data.password);
            e.target.reset();
            if (login) {
              setLogin(!login);
            } else {
              setRegister(!reg);
            }
          })}>
          <label htmlFor="username">Enter Username</label>
          <input
            id="username"
            type="text"
            {...register('username', {
              required: { value: true, message: 'this field is required' },
              minLength: {
                value: 6,
                message: 'Your username should be at least 6 characters long',
              },
            })}
          />
          {errors.username && <p>{errors.username.message}</p>}
          <label htmlFor="email">Enter E-mail</label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: { value: true, message: 'this field is required' },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
          <label htmlFor="password">Enter Password</label>
          <input
            id="password"
            type="password"
            {...register('password', {
              required: { value: true, message: 'this field is required' },
              minLength: {
                value: 8,
                message: 'Your password should be at least 8 characters long',
              },
              pattern: {
                value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
                message:
                  'Your password should contain at least one uppercase letter, one lowercase letter, and one number ',
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
          <button className="authButton" type="submit">
            Register
          </button>
        </form>
      ) : (
        <form
          className="authForm"
          onSubmit={handleSubmit((data, e) => {
            onLogin(data.email1, data.password1);
            e.target.reset();
          })}>
          <label htmlFor="email">Enter E-mail</label>
          <input
            id="email"
            type="email"
            {...register('email1', {
              required: { value: true, message: 'this field is required' },
            })}
          />
          {errors.email1 && <p>{errors.email1.message}</p>}
          <label htmlFor="password">Enter Password</label>
          <input
            id="password"
            type="password"
            {...register('password1', {
              required: { value: true, message: 'this field is required' },
              minLength: {
                value: 8,
                message: 'Your password should be at least 8 characters long',
              },
              pattern: {
                value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
                message:
                  'Your password should contain at least one uppercase letter, one lowercase letter, and one number',
              },
            })}
          />
          {errors.password1 && <p>{errors.password1.message}</p>}
          <button className="authButton" type="submit">
            Login
          </button>
        </form>
      )}
    </div>
  );
};

Auth.propTypes = {
  setClicked: propTypes.func,
  setLogin: propTypes.func,
  setRegister: propTypes.func,
  onRegister: propTypes.func,
  onLogin: propTypes.func,
  login: propTypes.bool,
  reg: propTypes.bool,
};

const mapStateToProps = state => {
  return {
    uid: state.uid,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (email, password) => dispatch(actions.login(email, password)),
    onRegister: (email, password, username) =>
      dispatch(actions.register(email, password, username)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
