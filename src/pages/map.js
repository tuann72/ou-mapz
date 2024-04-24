// pages/map.js
import React, { useRef, useEffect, useState } from 'react';
import MyMap from '../components/MyMap';
import styles from '../styles/Home.module.css';
import {auth} from '../../firebase.js';
import {signOut} from 'firebase/auth';
import { useAuth } from '../contexts/authContext'

const MapPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState(['Organizations', 'University of Oklahoma', 'Activities nearby']);
  const { currentUser } = useAuth() // gets currentUser from authContext

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
  useEffect(() => {
    let markerButton = addMarkerButton.current;
   if (currentUser) {
    markerButton.hidden = false; // shows addMarkerButton if user is logged in
   }
   else {
    markerButton.hidden = true; // hides addMarkerButton if user is not logged in/continued as guest
   }
  }, [currentUser]) /* currentUser is a dependency (hiding addMarkerButton depends on whether user is logged in) 
  so it needs to be included in the dependency array
  */

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
            onBlur={() => setTimeout(() => setShowSuggestions(false), 100)} // hides suggestions with a delay
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
        <button ref={addMarkerButton} id="addMarkerButton" className={styles.addMarkerButton} hidden={true} onClick={() => handleClick()}> hello</button> 
      </aside>

      <main className={styles.mapContainer}>
        <h1 className={styles.title}>OU Mapz</h1>
        <MyMap />
        
      </main>
    </div>
  );
};

export default MapPage;




