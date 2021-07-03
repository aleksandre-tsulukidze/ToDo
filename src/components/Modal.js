import React, { useContext } from 'react';
import { NotesContext } from './notesContext.js';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import { firebaseDatabase } from '../firebase/index';

import '../css/modal.css';

const Modal = ({ setClicked, index, setRendering, uid }) => {
  const noteData = useContext(NotesContext);

  const onSubmitHandler = e => {
    e.preventDefault();
    axios
      .put(
        'https://refrigerator-todo-default-rtdb.europe-west1.firebasedatabase.app/notes/' +
          uid +
          '/' +
          noteData[index].id +
          '.json',
        {
          title: e.target[0].value,
          dueDate: e.target[1].value,
          data: e.target[2].value,
          color: noteData[index].color,
          angle: noteData[index].angle,
          X: noteData[index].X,
          Y: noteData[index].Y,
        },
      )
      .then(response => console.log(response))
      .then(() => setRendering(r => !r))
      .catch(err => console.log(err));
    setClicked(c => !c);
  };

  const onDeleteHandler = e => {
    e.preventDefault();
    firebaseDatabase
      .ref('notes/' + noteData[index].id)
      .remove()
      .then(() => setRendering(r => !r))
      .catch(error => {
        console.log(error);
      });
    setClicked(c => !c);
  };

  const onClickHandler = e => {
    if (e.target.className === 'modal') {
      setClicked(c => !c);
    }
  };

  let page = (
    <form
      style={{ backgroundColor: noteData[index].color }}
      className="modal__form"
      onSubmit={onSubmitHandler}>
      <label htmlFor="modal__title">enter task title</label>
      <input
        id="modal__title"
        type="text"
        name="title"
        defaultValue={noteData[index].title}
      />
      <label htmlFor="modal__title"> enter due date</label>
      <input
        id="modal__date"
        name="dueDate"
        defaultValue={noteData[index].dueDate}
      />
      <label htmlFor="modal__date">enter task</label>
      <textarea
        id="modal__data"
        name="data"
        defaultValue={noteData[index].data}></textarea>
      <div className="buttons">
        <button type="submit"> SAVE </button>
        <button onClick={onDeleteHandler}> DELETE </button>
      </div>
    </form>
  );

  return (
    <div onClick={e => onClickHandler(e)} className="modal">
      {page}
    </div>
  );
};

Modal.propTypes = {
  index: propTypes.number,
  uid: propTypes.string,
  setClicked: propTypes.func,
  setRendering: propTypes.func,
};

const mapStateToProps = state => {
  return {
    uid: state.uid,
  };
};

export default connect(mapStateToProps)(Modal);
