import React, { useEffect, useRef } from 'react';
import {getEventsFromDatabase} from '../Components/Events.js'

const MyMap = () => {
  const mapRef = useRef(null); // Ref to store the map instance

  useEffect(() => {
    // Make sure the initMap function is defined globally before loading the script
    window.initMap = function() {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 35.20037131434744, lng: -97.44398323511265 },
        zoom: 13,
        mapId: "dc3746cfb50352a8",
      });

      mapRef.current = map; // Store map instance in ref

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

      // Webscraped markers
      getEventsFromDatabase()
        .then(events => {
          // Iterate over the events array
          events.forEach(event => {
            // Call the getTitle method on each event object
            const address = event.getAddress();
            const title = event.getTitle();
            const description = event.getDescription()
            const geocoder = new google.maps.Geocoder();
            geocoder.geocode({ address }, (results, status) => {
              if (status === 'OK') {
                const latitude = results[0].geometry.location.lat();
                const longitude = results[0].geometry.location.lng();

                const pos = {lat: latitude, lng: longitude}
                const marker = new google.maps.Marker({
                  position: pos,
                  map: map,
                  title: title,
                })
                const contentString = `<div style = "color: black;">
                  <h3>${title}</h3>
                  <p><strong>Description:</strong> ${description}</p>
                  <p><strong>Address:</strong> ${address}</p>
                </div>`;

                const infoWindow = new google.maps.InfoWindow({
                  content: contentString
                });

                marker.addListener('click', () => {
                  infoWindow.open(mapRef.current, marker);
                });

              }
            });
          });
        })
        .catch(error => {
          console.error(error);
        });

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