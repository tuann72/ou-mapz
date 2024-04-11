// components/MyMap.js
import React, { useEffect } from 'react';

const MyMap = () => {
  useEffect(() => {

    // Append the Google Maps script to the document head
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDvKQYirZCBH07HDKlySghSajv4_69q9OM&callback=initMap`;
    script.async = true;
    document.head.appendChild(script);

    
    window.initMap = () => {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 35.20037131434744, lng: -97.44398323511265 },
        zoom: 13,
        mapID: "34793541114f138",
      });
    

      const coustIcons = [
        {
          url: 'ou-marker.png', // URL for the first type of icon
          scaledSize: new google.maps.Size(100, 100), // Scale the icon size
        },
        {
          //url: 'second-marker-icon.png', // URL for the second type of icon
          //scaledSize: new google.maps.Size(50, 50), // Scale the icon size
        },
        // Add more icons as needed
      ];
      
      // Array of marker data
      const markersData = [
        {
          position: { lat: 35.21204029964204, lng: -97.4445950663006 },
          title: 'First Marker - Hideaway pizza',
          iconType: 0, // Reference to the first icon in commonIcons array
          
        },
        {
          position: { lat:  35.21152589365213, lng: -97.44452510989818 },
          title: 'Second Marker - Pinkberry',
          iconType: 0, // Reference to the first icon in commonIcons array
        },
        {
          position: { lat: 35.21241589040634, lng: -97.44399512973642 },
          title: 'Third Marker',
          iconType: 0, // Reference to the first icon in commonIcons array
        },
        
        // Add more markers as needed
      ];

      // Loop through markersData to create markers
      markersData.forEach((markerData) => {
        const marker = new google.maps.Marker({
          position: markerData.position,
          map: map,
          title: markerData.title,
          icon: coustIcons[markerData.iconType], // Use iconType to select the correct icon from commonIcons
        });

        // Create an info window
        const infoWindow = new google.maps.InfoWindow({
          content: `<div style="color: black;">${markerData.title}</div>`,
        });

        // eventListener to Open InfoWindow on mouseover
        marker.addListener('mouseover', () => {
          infoWindow.open(map, marker);
        });

        // Close InfoWindow on mouseout
        marker.addListener('mouseout', () => {
          infoWindow.close();
        });
      }); // Note the closing of the forEach loop 

    }; // This closing brace ends the window.initMap function

  }, []); // This closes the useEffect hook

  return <div id="map" style={{ height: '90vh', width: '100%' }} />;
};

export default MyMap;