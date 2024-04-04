// components/MyMap.js
import React, { useEffect } from 'react';

const MyMap = () => {
  useEffect(() => {
    // The initMap function will be called after the Google Maps script is loaded
    window.initMap = () => {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 35.20037131434744, lng: -97.44398323511265 },
        zoom: 13,
      });
    };

    // Load the Google Maps script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDvKQYirZCBH07HDKlySghSajv4_69q9OM&callback=initMap`;
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <div id="map" style={{ height: '90vh', width: '100%' }} />
  );
};

export default MyMap;
