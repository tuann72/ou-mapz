
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
          anchor: new google.maps.Point(20, 20)
        },
        // Add more icons as needed
        {
          url: 'ou-white-logo.png',
          scaledSize: new google.maps.Size(50, 50),
        }
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
                  icon: customIcons[1],
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

    }; // This closes the window.initMap function

    // Check if the Google Maps script is already appended to prevent duplicates
    if (!document.querySelector('script[src^="https://maps.googleapis.com"]')) {
      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDvKQYirZCBH07HDKlySghSajv4_69q9OM&callback=initMap`;
      document.head.appendChild(script);
    }

  // Define a global function to add markers
  window.addMarker = (lat, lng, title, description, dateTime) => {
    if (!mapRef.current) return;
  
    const geocoder = new google.maps.Geocoder();
    const location = { lat, lng };

    const customIcon = {
      url: 'ou-marker.png', // URL for the first type of icon
      scaledSize: new google.maps.Size(100, 100), // Scale the icon size
      anchor: new google.maps.Point(20, 20)
    };
  
    // Reverse geocoding to get address from coordinates
    geocoder.geocode({ location }, (results, status) => {
      if (status === "OK" && results[0]) {
        const address = results[0].formatted_address;
  
        // Format the date and time
        const dateTimeFormatted = new Date(dateTime).toLocaleString();
  
        // Create and place a new marker
        const marker = new google.maps.Marker({
          position: location,
          map: mapRef.current,
          title: title , // Setting the title from event name
          //icon: customIcon,
        });
  
        // Content of the Info Window including the address
        const contentString = `<div style = "color: black;"><h3>${title}</h3><p>${description}</p><p>Date/Time: ${dateTimeFormatted}</p><p>Address: ${address}</p></div>`;
  
        const infoWindow = new google.maps.InfoWindow({
          content: contentString
        });
  
        marker.addListener('click', () => {
          infoWindow.open(mapRef.current, marker);
        });
  
        mapRef.current.panTo(new google.maps.LatLng(lat, lng));
      } else {
        console.error('Geocoder failed due to: ' + status);
      }
    });
  };
  
  
  }, []);

  return <div id="map" style={{ height: '90vh', width: '100%' }} />;
};

export default MyMap;