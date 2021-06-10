import React from 'react';
import axios from 'axios';
import Draggable from 'react-draggable';

import './main.css';

const Drag = ({ color, setColor, setRendering }) => {
  const onDragStartHandler = e => {
    e.preventDefault();
  };

  const onDragEndHandler = e => {
    axios
      .post(
        'https://refrigerator-todo-default-rtdb.europe-west1.firebasedatabase.app/notes.json',
        {
          title: '',
          dueDate: '',
          data: '',
          color: color,
          angle: (Math.random() * 30).toFixed(2),
          X: e.clientX,
          Y: e.clientY,
        },
      )
      .then(() => setRendering(r => !r))
      .then()
      .catch(err => console.log(err));
  };
  return (
    <div className="drag">
      <Draggable
        position={{ x: 0, y: 0 }}
        onStart={e => onDragStartHandler(e)}
        onStop={e => onDragEndHandler(e)}>
        <span
          style={{
            backgroundColor: color,
            position: 'absolute',
            transition: 'translateY(100%)',
          }}
          className="drag__draggable"></span>
      </Draggable>
      <span
        style={{ backgroundColor: color }}
        className="drag__draggable"></span>
      <button
        onClick={e => setColor(e.target.value)}
        style={{ backgroundColor: '#FFFF49' }}
        value="#FFFF49"></button>
      <button
        onClick={e => setColor(e.target.value)}
        style={{ backgroundColor: '#00C844' }}
        value="#00C844"></button>
      <button
        onClick={e => setColor(e.target.value)}
        style={{ backgroundColor: '#9400C8' }}
        value="#9400C8"></button>
      <button
        onClick={e => setColor(e.target.value)}
        style={{ backgroundColor: '#00B0C8' }}
        value="#00B0C8"></button>
      <button
        onClick={e => setColor(e.target.value)}
        style={{ backgroundColor: '#F50000' }}
        value="#F50000"></button>
    </div>
  );
};

export default Drag;
