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
    
      // Define the marker and info window content
      const markerData = {
        position: { lat: 35.20037131434744, lng: -97.44398323511265 },
        title: 'Vishnu\'s house',
        // Define the icon with a scaled size
      };
    
      // Create the marker
      const marker = new google.maps.Marker({
        position: markerData.position,
        map: map,
        title: markerData.title,
        
      });
    
      // Create an info window
      const infoWindow = new google.maps.InfoWindow({
        content: `<div style="color: black;">${markerData.title}</div>`
      });
    
      // Add a click event listener to the marker to open the info window
      marker.addListener('click', () => {
        infoWindow.open({
          anchor: marker,
          map,
          shouldFocus: false
        });
      });
    };
    
    
  }, []);

  return <div id="map" style={{ height: '90vh', width: '100%' }} />;
};

export default MyMap;
