function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 32.9912, lng: -117.2711 }, // default to start at current location  (user can set address if they want to change this)
      zoom: 16, // static zoom level
  });
  var results = [
      { lat: 32.9929237365723, lng: -117.272216796875 },
      { lat: 32.9915933, lng: -117.2707002 },
      { lat: 32.969987, lng: -117.261947 },
  ];
  for (let i = 0; i < results.length; i++) {
      new google.maps.Marker({
          position: results[i],
          map,
      });
  }
}