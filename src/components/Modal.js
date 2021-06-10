import React, { useEffect, useState, useContext } from 'react';
import { NotesContext } from './notesContext.js';
import axios from 'axios';
import { firebaseDatabase } from '../firebase/index';

import './modal.css';

const Modal = ({ setClicked, index, setRendering }) => {
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(true);
  const noteData = useContext(NotesContext);

  useEffect(() => {
    fetch(
      'https://refrigerator-todo-default-rtdb.europe-west1.firebasedatabase.app/notes/' +
        noteData[index].id +
        '.json',
    )
      .then(res => res.json())
      .then(response => {
        setResponse(response);
      })
      .then(() => setLoading(l => !l))
      .catch(err => console.log(err));
  }, [noteData, index]);

  const onSubmitHandler = e => {
    e.preventDefault();
    axios
      .put(
        'https://refrigerator-todo-default-rtdb.europe-west1.firebasedatabase.app/notes/' +
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

  let page = <div>loading...</div>;
  if (!loading) {
    page = (
      <form
        style={{ backgroundColor: response.color }}
        className="modal__form"
        onSubmit={onSubmitHandler}>
        <label htmlFor="modal__title">enter task title</label>
        <input
          id="modal__title"
          type="text"
          name="title"
          defaultValue={response.title}
        />
        <label htmlFor="modal__title"> enter due date</label>
        <input
          id="modal__date"
          name="dueDate"
          defaultValue={response.dueDate}
        />
        <label htmlFor="modal__date">enter task</label>
        <textarea
          id="modal__data"
          name="data"
          defaultValue={response.data}></textarea>
        <div className="buttons">
          <button type="submit"> SAVE </button>
          <button onClick={onDeleteHandler}> DELETE </button>
        </div>
      </form>
    );
  }

  return (
    <div onClick={e => onClickHandler(e)} className="modal">
      {page}
    </div>
  );
};

export default Modal;
