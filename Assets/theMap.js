function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 32.8800604, lng: -117.2362022 }, // default to start at current location  (user can set address if they want to change this)
        zoom: 16, // static zoom level
    });
}

document.getElementById("link1").addEventListener("click", function() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 33.20303085967621, lng: -117.33123779296875 }, // default to start at current location  (user can set address if they want to change this)
        zoom: 12
    })
    var results = [
        { lat: 33.189368, lng: -117.374349 },
        { lat: 33.2050589, lng: -117.2935793 },
        { lat: 33.1768728, lng: -117.3660314 },
        { lat: 33.2156435, lng: -117.2687325 },
        { lat: 33.2128018, lng: -117.3544258 },
        { lat: 33.1951352, lng: -117.3813195 },
        { lat: 33.1583788, lng: -117.3432935 },
        { lat: 33.2154944, lng: -117.3529026 },
        { lat: 33.1998804, lng: -117.3790441 },
        { lat: 33.1244356, lng: -117.3162431 },
    ];
    for (let i = 0; i < results.length; i++) {
        new google.maps.Marker({
            position: results[i],
            map,


        });
    }
});
document.getElementById("link2").addEventListener("click", function() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 33.18291965337924, lng: -117.24128723144531 }, // default to start at current location  (user can set address if they want to change this)
        zoom: 12
    })
    var results = [
        { lat: 33.2021219, lng: -117.2431954 },
        { lat: 33.1450194, lng: -117.2318612 },
        { lat: 33.1677133, lng: -117.2225061 },
        { lat: 33.188226, lng: -117.2306064 },
        { lat: 33.1481926, lng: -117.2202665 },
        { lat: 33.23046, lng: -117.2288057 },
        { lat: 33.136675, lng: -117.2289185 },
        { lat: 33.1403471, lng: -117.2296906 },
        { lat: 33.2027686, lng: -117.2440345 },
        { lat: 33.1496667, lng: -117.2319831 },
    ];
    for (let i = 0; i < results.length; i++) {
        new google.maps.Marker({
            position: results[i],
            map,


        });
    }
});
document.getElementById("link3").addEventListener("click", function() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 32.790569394537286, lng: -117.15408325195312 }, // default to start at current location  (user can set address if they want to change this)
        zoom: 11
    })
    var results = [
        { lat: 32.7276346, lng: -117.1719066 },
        { lat: 32.8875579, lng: -117.1603384 },
        { lat: 32.886637, lng: -117.1593351 },
        { lat: 32.7546222, lng: -117.1322412 },
        { lat: 32.7174355, lng: -117.2372746 },
        { lat: 32.747995, lng: -117.2525421 },
        { lat: 32.7405632, lng: -117.2137465 },
        { lat: 32.7102646, lng: -117.1650259 },
        { lat: 32.7477013, lng: -117.1307293 },
        { lat: 32.714407, lng: -117.1523757 },
    ];
    for (let i = 0; i < results.length; i++) {
        new google.maps.Marker({
            position: results[i],
            map,


        });
    }
});
document.getElementById("link4").addEventListener("click", function() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 32.919645008613585, lng: -117.14515686035156 }, // default to start at current location  (user can set address if they want to change this)
        zoom: 12
    })
    var results = [
        { lat: 32.8875579, lng: -117.1603384 },
        { lat: 32.9070584, lng: -117.1799732 },
        { lat: 32.886637, lng: -117.1593351 },
        { lat: 32.8881972, lng: -117.1520387 },
        { lat: 32.8943038, lng: -117.1509248 },
        { lat: 32.894284, lng: -117.2122099 },
        { lat: 32.9040557, lng: -117.1736514 },
        { lat: 32.8955825, lng: -117.1391736 },
        { lat: 32.8955802, lng: -117.1393475 },
        { lat: 32.900468, lng: -117.1927004 },
    ];
    for (let i = 0; i < results.length; i++) {
        new google.maps.Marker({
            position: results[i],
            map,


        });
    }
});
document.getElementById("link5").addEventListener("click", function() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 32.6451147551742, lng: -117.01332092285156 }, // default to start at current location  (user can set address if they want to change this)
        zoom: 11
    })
    var results = [
        { lat: 32.6521464, lng: -116.9637935 },
        { lat: 32.6428397, lng: -117.0823497 },
        { lat: 32.6011194, lng: -117.0852628 },
        { lat: 32.6390135, lng: -117.1447706 },
        { lat: 32.6415337, lng: -117.0825393 },
        { lat: 32.6236677, lng: -116.9692886 },
        { lat: 32.7276346, lng: -117.1719066 },
        { lat: 32.6426634, lng: -117.15065 },
        { lat: 32.6423328, lng: -117.3607932 },
        { lat: 32.7102646, lng: -117.1584599 },
    ];
    for (let i = 0; i < results.length; i++) {
        new google.maps.Marker({
            position: results[i],
            map,


        });
    }
});