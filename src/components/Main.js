import React, { useState, useEffect } from 'react';
import { NotesContext } from './notesContext.js';
import Logo from '../images/coollogo_com-21084510 1.svg';
import Note from './Note.js';
import Drag from './drag';
import '../css/main.css';

const Main = () => {
  const [color, setColor] = useState('#00C844');
  const [notes, setNotes] = useState([]);
  const [rendering, setRendering] = useState(false);

  useEffect(() => {
    fetch(
      'https://refrigerator-todo-default-rtdb.europe-west1.firebasedatabase.app/notes.json',
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
  }, [rendering]);
  return (
    <>
      <div className="main">
        <img className="logo" alt="refrigerator handel" src={Logo}></img>
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
      <Drag setRendering={setRendering} color={color} setColor={setColor} />
    </>
  );
};

export default Main;
