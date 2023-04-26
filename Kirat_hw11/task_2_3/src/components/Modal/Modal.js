import React, { Fragment } from 'react';
import './Modal.css';

const Modal = ({ onCLose }) => {
    return (
        <Fragment>
            <div className='modal-wrapper' onClick={onCLose}></div>
            <div className='modal-window'>
                <h1>Modal content</h1>
                <span className='modal-close' onClick={onCLose} >
                    X
                </span>
                <h3>Title modal</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum earum eveniet a eum molestias delectus assumenda provident rem veritatis ullam iure tempore, asperiores soluta reiciendis alias quod? Perferendis nemo adipisci placeat inventore laboriosam itaque sed vero distinctio veritatis dolore alias nihil possimus, provident asperiores culpa consequatur odio odit facilis quo.</p>
            </div>
        </Fragment>
    );
}

export default Modal;

