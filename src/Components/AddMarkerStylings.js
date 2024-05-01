
import React, { useState } from 'react';
import Modal from 'react-modal';
import { modalStyles, inputFieldStyles, selectFieldStyles, closeButtonStyles, formGroupStyles } from './modalStyles.js'; // Import your styles
import { places, longitude, latitude } from './CoordinateHashMap.js';
import DateTimePicker from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { db } from '../../firebase.js';
import { collection, doc, setDoc, getDoc} from 'firebase/firestore';
import { auth } from '../../firebase.js';


async function handleAddingMarker(date, name, location, description, time){

  const docRef = doc(db, "DatesForCustomMarkers", date)
  const docSnap = await getDoc(docRef)
  let newMarker
  if(docSnap.exists()){
    const dateData = docSnap.data();
    newMarker = date + '-' + dateData.count;
    const newData = dateData.CustomMarkerIDArray;
    newData.push(newMarker);
    const newCount = dateData.count +1;
    await setDoc(doc(db, "DatesForCustomMarkers", date), {
      CustomMarkerIDArray: newData,
      count: newCount
    })
    await setDoc(doc(db, "CustomMarker", newMarker), {
      eventDescription: description,
      eventName: name, 
      eventLocation: location, 
      startTime: time
    })
    return newMarker;
    
  }else {
    // create new doc with todays date and add marker
    const newArray = []
    const count =0; 
    newMarker = date + '-' + count;
    newArray.push(newMarker);
    let newCount = count +1;
    await setDoc(doc(db, "DatesForCustomMarkers", date), {
      CustomMarkerIDArray: newArray,
      count: newCount
    })
    await setDoc(doc(db, "CustomMarker", newMarker), {
      eventDescription: description,
      eventName: name, 
      eventLocation: location, 
      startTime: time
    })
   
  }
  return newMarker;
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
  async function addUser(today, newMarker){
    const user = auth.currentUser;
    const email = user.email;
    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef);
    

    const dayData = parseDateTime(today);
    const stringDay = dayData.month + '-' + dayData.day + '-' + dayData.year;

    if(docSnap.exists()){
      // read in data and update 
      const userData =docSnap.data();
      const updatedMarkers = userData.Markers;
      updatedMarkers.push(newMarker)
      const updatedDates = userData.MarkerAddDate;
      updatedDates.push(stringDay);
    // Update Firestore document with new arrays
    await setDoc(doc(db, "users", email), {
      Markers: updatedMarkers,
      MarkerAddDate: updatedDates,
    });
    }else {
      // create new data
      const markers = [];
      markers.push(newMarker);
      const dates = [];
      dates.push(stringDay);
      await setDoc(doc(db, "users", email), {
        Markers: markers,
        MarkerAddDate: dates,
      })
    }
    
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

  async function handleSubmit() {
    // Here you can submit your form data or perform any other action

    
    let data = dateTime.toISOString();
    let dateAndTimeData = parseDateTime(data);
    let date = dateAndTimeData.month + '-' + dateAndTimeData.day + '-' + dateAndTimeData.year;
    let startTime = dateAndTimeData.hour + ":" + dateAndTimeData.minute;

    const today = new Date();
    const sixMonthsLater = new Date(today);
    sixMonthsLater.setMonth(today.getMonth()+6);

    if(description ===""){
      alert("The Description was left empty, please add a description to add your event")
    }else if (eventName === ""){
      alert("The Event Name was left empty, please add an eventName to add your event")
    }else if (dateTime > sixMonthsLater){
      alert("The date you entered is more than 6 months in the future, please select a different date, or wait to add your event.");
    }else if (location === ""){
      alert("The Location field was left empty, please add a location to add your event")
    }else if (dateTime < today){
      alert("It seems your event is for a day before today, please select a new date in the future to continue.")
    }
    else {
      const newMarker = handleAddingMarker(date, eventName, location, description, startTime);
      // addUser(today, newMarker)
      closeModal();
    }

    const lat = latitude.get(location);
    const lng = longitude.get(location);
    const eventTitle = eventName;
    const eventDescription = description;
    const eventDateTime = dateTime;

  // Call the global function to add a marker with additional event details
  window.addMarker(lat, lng, eventTitle, eventDescription, eventDateTime);

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
