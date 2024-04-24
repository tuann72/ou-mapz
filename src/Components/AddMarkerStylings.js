import React from 'react';
import Modal from 'react-modal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';

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

const AddMarkerStyling = ()=> {
    const [startDate, setStartDate] = useState(new Date());
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

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
      <label>Event Name:
        <input type="text" name="name"/>
      </label>
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
        <button onClick={closeModal}>close</button>
        <form>
            <label>Location: </label>
                <select>
                    <option value="Nielson Hall">Nielson Hall</option>
                    <option value="Dale Hall">Dale Hall</option>
                    <option value="Gallogy Hall">Gallogy Hall</option>
                </select>
            <label>Date: </label>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            <label>Time of Day: </label>
            <select> 
                
                <option value="AM">AM</option>
                <option value="PM">PM</option>
            </select>
            <label> Hour: </label>
            <select>
                
                <option value ="1">1</option>
                <option value ="2">2</option>
                <option value ="3">3</option>
                <option value ="4">4</option>
                <option value ="5">5</option>
                <option value ="6">6</option>
                <option value ="7">7</option>
                <option value ="8">8</option>
                <option value ="9">9</option>
                <option value ="10">10</option>
                <option value ="11">1</option>
                <option value ="12">12</option>
            </select>
            <label> Minute: </label>
            <select> 
                
                <option value ="0">0</option>
                <option value ="5">5</option>
                <option value ="10">10</option>
                <option value ="15">15</option>
                <option value ="20">20</option>
                <option value ="25">25</option>
                <option value ="30">30</option>
                <option value ="35">35</option>
                <option value ="40">40</option>
                <option value ="45">45</option>
                <option value ="50">50</option>
                <option value ="55">55</option>            
            </select>
            <label>Description: 
                <input type="text" name="description"></input>
            </label>
        </form>
      </Modal>
    </div>
  );
}
export default AddMarkerStyling;

