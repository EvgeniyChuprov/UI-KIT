/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
class Map {
  constructor($map) {
    this.$map = $map.find('.map__location');
    this._mapInit();
  }

  _mapInit() {
    this.loadGoogleMapsApi = require('load-google-maps-api');
    this.zoom = this.$map.data('zoom');
    this.marker = this.$map.data('marker');
    this.lat = this.$map.data('lat');
    this.lng = this.$map.data('lng');
    this._maps();
  }

  _maps() {
    const pos = { lat: this.lat, lng: this.lng };
    this.loadGoogleMapsApi().then((googleMaps) => {
      const maps = new googleMaps.Map(document.querySelector('.map__location'), {
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

$('.js-map').each((index, element) => {
  new Map($(element));
});
