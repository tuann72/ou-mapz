import React, { useState } from 'react';
import Modal from 'react-modal';
import { modalStyles, inputFieldStyles, selectFieldStyles, closeButtonStyles, formGroupStyles } from './modalStyles.js'; // Import your styles
import { places, longitude, latitude } from './CoordinateHashMap.js';
import DateTimePicker from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { db } from '../../firebase.js';



async function addData(){
  // get whatever collection is needed(will specify in firebase(example would be users in firebase)
  const collection = collection(db,'Custom Markers');
  // set a doc in the usersRef collection, we use the document to specify which doc to modify/ add
  const data = await setDoc(doc(collection, document), {
  // this doc will have the parameter data, name aum age 81
      name: "aum",
      age: 81,
  });
  return data;
  
}


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
  function parseDateTime(dateTimeString) {
    // Parse the datetime string into a Date object
    const dateTime = new Date(dateTimeString);
  
    // Extract year, month, day, hour, and minute components
    const year = dateTime.getFullYear();
    const month = dateTime.getMonth() + 1; // Months are zero-based, so we add 1
    const day = dateTime.getDate();
    const hour = dateTime.getHours();
    const minute = dateTime.getMinutes();
  
    // Return an object containing the extracted components
    return {
      year,
      month,
      day,
      hour,
      minute
    };
  }

  function handleSubmit() {
    // Here you can submit your form data or perform any other action
    
    let hey = dateTime.toISOString();
    console.log(parseDateTime(hey))
    console.log(location);
    // You can also reset the form fields or perform any other necessary actions here

    // add to firebase
    closeModal();
  }

  const handleDateTimeChange = (newDateTime) => {
    setDateTime(newDateTime); // Update the state with the new date and time
  };


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
          <DateTimePicker
      value={dateTime}
      onChange={handleDateTimeChange}
    />
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