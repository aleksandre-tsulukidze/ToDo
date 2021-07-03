import React, { useState, useEffect } from 'react';
import { NotesContext } from './notesContext.js';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import * as actions from '../store/actions/authActions';
import Logo from './Logo';
import Note from './Note.js';
import Drag from './Drag';
import '../css/main.css';

const Main = ({ uid }) => {
  const [color, setColor] = useState('#00C844');
  const [notes, setNotes] = useState([]);
  const [rendering, setRendering] = useState(false);

  useEffect(() => {
    if (uid) {
      fetch(
        'https://refrigerator-todo-default-rtdb.europe-west1.firebasedatabase.app/notes/' +
          uid +
          '/.json',
      )
        .then(res => res.json())
        .then(response => {
          let array = [];
          for (let key in response) {
            array.push({ ...response[key], id: key });
          }
          return array;
        })
        .then(array => setNotes(array))
        .catch(err => console.log(err));
    } else {
      fetch(
        'https://refrigerator-todo-default-rtdb.europe-west1.firebasedatabase.app/notes/main.json',
      )
        .then(res => res.json())
        .then(response => {
          let array = [];
          for (let key in response) {
            array.push({ ...response[key], id: key });
          }
          return array;
        })
        .then(array => setNotes(array))
        .catch(err => console.log(err));
    }
    return uid;
  }, [rendering, uid]);
  return (
    <>
      <div className="main">
        <Logo />
        <NotesContext.Provider value={notes}>
          {notes.length
            ? notes.map((note, index) => {
                return (
                  <Note key={index} setRendering={setRendering} index={index} />
                );
              })
            : null}
        </NotesContext.Provider>
      </div>
      {uid ? (
        <Drag setRendering={setRendering} color={color} setColor={setColor} />
      ) : null}
    </>
  );
};

Main.propTypes = {
  uid: propTypes.string,
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
