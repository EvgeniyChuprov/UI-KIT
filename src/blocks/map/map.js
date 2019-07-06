class Map {
  constructor(map) {
    this.loadGoogleMapsApi = require('load-google-maps-api');
    this.map = map;
    this.zoom = this.map.data('zoom'); 
    this.marker = this.map.data('marker');
    this.lat = this.map.data('lat');
    this.lng = this.map.data('lng');
    this.maps();
  }

  maps() {
    const pos = { lat: this.lat, lng: this.lng };

    this.loadGoogleMapsApi().then((googleMaps) => {
      const maps = new googleMaps.Map(document.querySelector('.map'), {
        center: pos,
        zoom: this.zoom,
      });

      const marker = new google.maps.Marker({
        position: pos,
        map: maps,
        icon: this.marker,
      });
    });
  }
}

$('.map').each((index, el) => {
  new Map($(el));
});
