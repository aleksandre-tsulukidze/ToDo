import React, { useRef } from 'react';
import axios from 'axios';
import Draggable from 'react-draggable';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import '../css/main.css';

// eslint-disable-next-line no-unused-vars
const Drag = ({ color, setColor, setRendering, uid }) => {
  const nodeRef = useRef(null);
  const onDragStartHandler = e => {
    e.preventDefault();
  };

  const onDragEndHandler = e => {
    axios
      .post(
        'https://refrigerator-todo-default-rtdb.europe-west1.firebasedatabase.app/notes/' +
          uid +
          '/.json',
        {
          title: '',
          dueDate: '',
          data: '',
          color: color,
          angle: (Math.random() * 30).toFixed(2),
          X: (e.clientX * 100) / window.innerWidth,
          Y: e.clientY,
        },
      )
      .then(() => setRendering(r => !r))
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
  uid: propTypes.string,
  setColor: propTypes.func,
  setRendering: propTypes.func,
};

const mapStateToProps = state => {
  return {
    uid: state.uid,
  };
};

export default connect(mapStateToProps)(Drag);
