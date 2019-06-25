$(document).ready(function () {
  const loadGoogleMapsApi = require('load-google-maps-api');
  const lat = $('#map').data('lat');
  const lng = $('#map').data('lng');
  const zoom = $('#map').data('zoom');
  const marker = $('#map').data('marker');
  const pos = { lat: lat, lng: lng };

  loadGoogleMapsApi().then(function (googleMaps) {
    const map = new googleMaps.Map(document.querySelector('#map'), {
      center: pos,
      zoom: zoom,
    })

    new google.maps.Marker({
      position: pos,
      map: map,
      icon: marker
    })
  });
});