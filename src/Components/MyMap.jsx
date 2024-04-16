import React, { useEffect } from 'react';

const MyMap = () => {
  useEffect(() => {
    // Make sure the initMap function is defined globally before loading the script
    window.initMap = function() {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 35.20037131434744, lng: -97.44398323511265 },
        zoom: 13,
        mapId: "dc3746cfb50352a8",
      });

      const customIcons = [
        {
          url: 'ou-marker.png', // URL for the first type of icon
          scaledSize: new google.maps.Size(100, 100), // Scale the icon size
        },
        // Add more icons as needed
      ];


      const markersData = [
        {
          position: { lat: 35.21204029964204, lng: -97.4445950663006 },
          title: 'First Marker - Hideaway pizza',
          iconType: 0, // Reference to the first icon in customIcons array
        },
        {
          position: { lat: 35.21152589365213, lng: -97.44452510989818 },
          title: 'Second Marker - Pinkberry',
          iconType: 0, // Reference to the first icon in customIcons array
        },
        {
          position: { lat: 35.21241589040634, lng: -97.44399512973642 },
          title: 'Third Marker',
          iconType: 0, // Reference to the first icon in customIcons array
        },
        // Add more markers as needed
      ];

      // Loop through markersData to create markers
      markersData.forEach((markerData) => {
        const marker = new google.maps.Marker({
          position: markerData.position,
          map: map,
          title: markerData.title,
          icon: customIcons[markerData.iconType], // Use iconType to select the correct icon from customIcons
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
      });
    }; // This closes the window.initMap function

    // Check if the Google Maps script is already appended to prevent duplicates
    if (!document.querySelector('script[src^="https://maps.googleapis.com"]')) {
      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDvKQYirZCBH07HDKlySghSajv4_69q9OM&callback=initMap`;
      document.head.appendChild(script);
    }

  }, []); // This closes the useEffect hook

  return <div id="map" style={{ height: '90vh', width: '100%' }} />;
};

export default MyMap;