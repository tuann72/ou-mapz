// pages/map.js
import React, { useRef, useEffect, useState } from 'react';
import MyMap from '../components/MyMap';
import styles from '../styles/Home.module.css';
import {auth} from '../../firebase.js';
import {signOut} from 'firebase/auth';
import { useAuth } from '../contexts/authContext'
import { Container } from 'postcss';
import { useRouter } from 'next/router';
import { db } from '../../firebase.js';
import { collection, getDocs } from "firebase/firestore";
import { Interface } from 'readline';

class event {
  constructor(location, startDate, endDate, address, link, description, title) {
    this.location = location;
    this.startDate = startDate;
    this.endDate = endDate;
    this.address = address;
    this.link = link;
    this.description = description;
    this.title = title;
  }

  toString() {
    return this.location + ', ' + this.startDate + ', ' + this.endDate + ', ' + this.address + ', ' + this.link + ', ' + this.description + ', ' + this.title;
  }
}

const events = [];

const querySnapshot = await getDocs(collection(db, "Engage Data"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  // console.log(doc.id, " => ", doc.data());
  let data = new event(doc.data().location, doc.data().startDate, doc.data().endDate, doc.data().address, doc.data().link, doc.data().description, doc.data().title);
  events.push(data);
  console.log("Hello");
  console.log(events.toString());
});


const MapPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState(['Organizations', 'University of Oklahoma', 'Activities nearby']);
  const { currentUser } = useAuth() // gets currentUser from authContext
  const [logButtonText, setLogButtonText] = useState('Sign In');
  const pageRouter = useRouter()

  // Function to handle search input changes
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(true);
    // Implement search functionality here
    // You might want to filter your suggestions based on the input
  };
  

  // Function to handle suggestion selection
  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
    // Implement what happens when you click a suggestion
  };

  // Tristen Pham
  const addMarkerButton = useRef(); // grabs addMarkerButton from DOM
  const logButton = useRef();
  useEffect(() => {
    let markerButton = addMarkerButton.current;
   if (currentUser) {
    markerButton.hidden = false; // shows addMarkerButton if user is logged in
    setLogButtonText("Sign Out")
   }
   else {
    markerButton.hidden = true; // hides addMarkerButton if user is not logged in/continued as guest
    setLogButtonText("Sign In")
   }
  }, [currentUser]) /* currentUser is a dependency (hiding addMarkerButton depends on whether user is logged in) 
  so it needs to be included in the dependency array
  */

  function handleUserAuth() {
    if (currentUser) {
      signOut(auth).then(() => { // signs out user
        // Sign-out successful.
        console.log("logged out")
      }).catch((error) => {
        // An error happened.
      });
    }
    else {
      pageRouter.push("/login")
    }
  }

  // Add addMarker functionality here, currently contains code to sign user out
  function handleClick() {
    /*
    signOut(auth).then(() => { // signs out user
      // Sign-out successful.
      console.log("logged out")
    }).catch((error) => {
      // An error happened.
    });
    */
  }
  // Xin, Add the addmarker button and the signin/signout button
  return (
    <div className={styles.pageContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search OUMapz"
            value={searchTerm}
            onChange={handleSearch}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 100)} // hides suggestions with a delay 1
            className={styles.searchInput}
          />
          {showSuggestions && (
            
            <ul className={styles.suggestions}>
            
              {suggestions.map((suggestion, index) => (
                <li
                  key={index} 
                  onClick={() => handleSuggestionClick(suggestion)}
                  className={styles.suggestionItem}
                >
                  {suggestion}
                </li>
                
              ))}
            </ul>
          )}
        </div>
        <div className='flex h-full items-end justify-center'>
          <div className="flex w-full justify-between">
            <button ref={logButton} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => handleUserAuth()}>{logButtonText}</button>
            <button ref={addMarkerButton} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" hidden={true} onClick={() => handleClick()}> hello</button>
          </div>
        </div>
      </aside>

      <main className={styles.mapContainer}> 
        <h1 className={styles.title}>OU Mapz</h1>
        <MyMap />
        
      </main>
    </div>
  );
};

export default MapPage;




