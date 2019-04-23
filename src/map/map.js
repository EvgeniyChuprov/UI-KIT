$(document).ready(function() {
    const loadGoogleMapsApi = require('load-google-maps-api');
    var lat = $('#map').data('lat'); 
    var lng = $('#map').data('lng'); 
    var zoom = $('#map').data('zoom'); 
    var marker = $('#map').data('marker'); 
    var pos = {lat: lat, lng: lng }
   
    loadGoogleMapsApi().then(function (googleMaps) {
       var map = new googleMaps.Map(document.querySelector('#map'), {
         center: pos,
          zoom: zoom,
        })
        new google.maps.Marker({
            position:pos,
            map:map,
            icon: marker
        })
      });
    });