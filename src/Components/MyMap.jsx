
import React, { useEffect, useRef } from 'react';

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