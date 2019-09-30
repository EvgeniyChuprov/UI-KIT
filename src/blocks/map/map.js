import loadGoogleApi from 'load-google-maps-api';

class Map {
  constructor($map) {
    this.$map = $map.find('.map__location');
    this._mapInit();
  }

  _mapInit() {
    this.loadGoogleMapsApi = loadGoogleApi;
    this.zoom = this.$map.data('zoom');
    this.marker = this.$map.data('marker');
    this.lat = this.$map.data('lat');
    this.lng = this.$map.data('lng');
    this._mapDraw();
  }

  _mapDraw() {
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
