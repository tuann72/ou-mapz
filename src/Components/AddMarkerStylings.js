import React, { useState } from 'react';
import Modal from 'react-modal';
import { modalStyles, inputFieldStyles, selectFieldStyles, closeButtonStyles, formGroupStyles } from './modalStyles.js'; // Import your styles
import { places, longitude, latitude } from './CoordinateHashMap.js';
import DateTimePicker from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

const AddMarkerStyling = () => {
  const [eventName, setEventName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [dateTime, setDateTime] = useState(new Date());
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleSubmit() {
    // Here you can submit your form data or perform any other action
    console.log({
      eventName,
      location,
      dateTime,
      description
    });
    // You can also reset the form fields or perform any other necessary actions here
    closeModal();
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          ...modalStyles,
          content: {
            ...modalStyles.content,
            backgroundColor: '#f9f9f9',
            padding: '20px',
            border: 'none'
          }
        }}
        contentLabel="Example Modal"
        id="modal"
      >
        <div style={{ marginBottom: '20px' }}>
          <label>Event Name:</label>
          <input type="text" name="name" style={inputFieldStyles} value={eventName} onChange={(e) => setEventName(e.target.value)} />
        </div>
        <button onClick={closeModal} style={closeButtonStyles}>Close</button>
        <form>
          <div style={formGroupStyles}>
            <label>Location:</label>
            <select style={selectFieldStyles} value={location} onChange={(e) => setLocation(e.target.value)}>
              {Object.values(places).map(place => (
                <option key={place} value={place}>{place}</option>
              ))}
            </select>
          </div>
          <label>Date and Time:</label>
          <DateTimePicker value={dateTime} onChange={setDateTime} />
          <div className="form-group">
            <label>Description:</label>
            <input type="text" name="description" className="input-field" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
        </form>
        <button onClick={handleSubmit} style={{ backgroundColor: 'crimson', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', display: 'block', margin: '0 auto' }}>Finish</button>
      </Modal>
    </div>
  );
}

export default AddMarkerStyling;