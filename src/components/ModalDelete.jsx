import React from 'react';
import ReactDOM from 'react-dom';
import './styles/Modal.css';

function ModalDelete (props) {
    if(!props.isOpenModal){
        return null;
    }
    return ReactDOM.createPortal(
        <div className="Modal">
            <div className="Modal__container">
                <button onClick={props.onCloseDelete} className="Modal__close-button">X</button>
                {props.children}
            </div>
        </div>,
        document.getElementById('modalDelete'));
}

export default ModalDelete;