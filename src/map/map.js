$(document).ready(function() {
    const loadGoogleMapsApi = require('load-google-maps-api');
    var lat = $('#map').data('lat'); 
    var lng = $('#map').data('lng'); 
    var zoom = $('#map').data('zoom'); 
    var marker = $('#map').data('marker'); 
    var pos = {lat: lat, lng: lng }
    image = 'https://cdn1.savepice.ru/uploads/2019/4/10/b6c32e04c9609cddaddf41a085ffb5e5-full.png';
    loadGoogleMapsApi().then(function (googleMaps) {
       var map = new googleMaps.Map(document.querySelector('#map'), {
         center: pos,
          zoom: zoom,
        })
        var marker = new google.maps.Marker({
            position:pos,
            map:map,
            icon: image
        })
      });
    });