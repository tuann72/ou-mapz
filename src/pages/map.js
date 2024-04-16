// pages/map.js
import React, { useState } from 'react';
import MyMap from '../components/MyMap';
import styles from '../styles/Home.module.css';

const MapPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState(['Organizations', 'University of Oklahoma', 'Activities nearby']);

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
        <button className={styles.addMarkerButton}> hello</button>
      </aside>

      <main className={styles.mapContainer}>
        <h1 className={styles.title}>OU Mapz</h1>
        <MyMap />
        
      </main>
    </div>
  );
};

export default MapPage;




