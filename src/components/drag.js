import React, { useRef } from 'react';
import axios from 'axios';
import Draggable from 'react-draggable';
import propTypes from 'prop-types';

import '../css/main.css';

const Drag = ({ color, setColor, setRendering }) => {
  const nodeRef = useRef(null);
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
        nodeRef={nodeRef}
        position={{ x: 0, y: 0 }}
        onStart={e => onDragStartHandler(e)}
        onStop={e => onDragEndHandler(e)}>
        <span
          ref={nodeRef}
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

Drag.propTypes = {
  color: propTypes.string,
  setColor: propTypes.func,
  setRendering: propTypes.func,
};

export default Drag;
