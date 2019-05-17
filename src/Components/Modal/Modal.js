import React from 'react';
import ReactDOM from 'react-dom';

export default function Modal({ title, actions }) {
  return ReactDOM.createPortal(
    <div className="container">
      <div className="">{title}</div>
      <div className="">{actions}</div>
    </div>,
    document.querySelector('#modal'),
  );
}
