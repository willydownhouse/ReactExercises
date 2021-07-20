import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
  return ReactDOM.createPortal(
    <div onClick={props.toHomePage} className="ui dimmer modals visible active">
      <div
        onClick={props.stopPropagation}
        className="ui standard modal visible active"
      >
        <div className="header">{props.header}</div>
        <div className="content">
          <p>{props.content}</p>
        </div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
