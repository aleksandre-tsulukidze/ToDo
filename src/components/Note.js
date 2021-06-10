import React, { useState, useContext } from 'react';
import { NotesContext } from './notesContext.js';
import Svg from './Svg';
import Modal from './Modal';

const Note = ({ index, setRendering }) => {
  const [clicked, setClicked] = useState(false);
  const noteData = useContext(NotesContext);
  const onClickedHandler = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <div
        style={{
          transform:
            'rotateZ(' + noteData[index].angle + 'deg) translate(-50%, -50%) ',
          position: 'absolute',
          top: noteData[index].Y,
          left: noteData[index].X,
        }}
        className="note"
        onClick={onClickedHandler}>
        <Svg title={noteData[index].title} color={noteData[index].color} />
      </div>
      {clicked ? (
        <Modal
          index={index}
          setRendering={setRendering}
          setClicked={setClicked}
          clicked={clicked}
        />
      ) : null}
    </div>
  );
};

export default Note;
