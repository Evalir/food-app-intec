import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ title, actions }) =>
  ReactDOM.createPortal(
    <div className="container">
      <div className="">{title}</div>
      <div className="">{actions}</div>
    </div>,
    document.querySelector('#modal'),
  );

export default Modal;
