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
document.getElementById("link1").addEventListener("click", function() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 33.20303085967621, lng: -117.33123779296875 }, // default to start at current location  (user can set address if they want to change this)
        zoom: 12
    })
});
document.getElementById("link2").addEventListener("click", function() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 33.18291965337924, lng: -117.24128723144531 }, // default to start at current location  (user can set address if they want to change this)
        zoom: 12
    })
});
document.getElementById("link3").addEventListener("click", function() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 32.790569394537286, lng: -117.15408325195312 }, // default to start at current location  (user can set address if they want to change this)
        zoom: 12
    })
});
document.getElementById("link4").addEventListener("click", function() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 32.919645008613585, lng: -117.14515686035156 }, // default to start at current location  (user can set address if they want to change this)
        zoom: 12
    })
});
document.getElementById("link5").addEventListener("click", function() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 32.6451147551742, lng: -117.01332092285156 }, // default to start at current location  (user can set address if they want to change this)
        zoom: 12
    })
});