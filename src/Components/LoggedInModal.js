import React from 'react';
import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/authContext';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

const LoggedInPopup = ()=> {
  let subtitle;
  const { currentUser } = useAuth()
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (currentUser) {
        openModal()
      }
  }, [currentUser])

  return (
    <div>
        <button onClick={openModal}>Open Modal</button>
      <Modal 
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        id ="modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
}
export default LoggedInPopup;