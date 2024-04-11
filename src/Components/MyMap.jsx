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
    
  //35.21241589040634, -97.44399512973642
      // Array of marker data
      const markersData = [
        {
          position: { lat: 35.21204029964204, lng: -97.4445950663006 },
          title: 'First Marker - Hideaway pizza',
         // icon: '/path/to/your/first-icon.svg', // Optional custom icon
        },
        {
          position: { lat:  35.21152589365213, lng: -97.44452510989818 },
          title: 'Second Marker - Pinkberry',
          //icon: '/path/to/your/second-icon.svg', // Optional custom icon
        },
        {
          position: { lat: 35.21241589040634, lng: -97.44399512973642 },
          title: 'Third Marker',
          //icon: '/path/to/your/second-icon.svg', // Optional custom icon
        },
        
        // Add more markers as needed
      ];

      // Loop through markersData to create markers
      markersData.forEach((markerData) => {
        const marker = new google.maps.Marker({
          position: markerData.position,
          map: map,
          title: markerData.title,
         // icon: markerData.icon, // This is optional if you're using custom icons
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