import React from 'react';
import SignupForm from './SignUp';
import LoginForm from './Login';
import '../Modal.css';

const Modal = ({ modalType, closeModal }) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
        {modalType === 'login' ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
  );
};

export default Modal;
