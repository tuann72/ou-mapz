import React from 'react';
import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/authContext';
import { useRouter } from 'next/router';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 300,
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

const LoggedInPopup = ()=> {
  let subtitle;
  const { currentUser } = useAuth()
  const { logout } = useAuth()
  const pageRouter = useRouter()
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

  function handleSignOut() {
    logout()
    .then(() => { // signs out user
        // Sign-out successful
        closeModal()
    }).catch((error) => {
        // An error happened.
    });
  }

  function handleMapRedirect() {
    pageRouter.push('/map')
  }

  useEffect(() => {
    if (currentUser) {
        openModal()
      }
  }, [currentUser])

  return (
    <div>
      <Modal 
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        id ="modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Welcome Back!</h2>
        <p>Seems like you are already signed in. Would you like to sign out or continue to the map?</p>
        <div className='flex h-full items-end'>
          <div className="flex w-full justify-between">
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={handleSignOut}>Sign Out</button>
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={handleMapRedirect}>Continue to Map</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
export default LoggedInPopup;