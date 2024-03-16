var map;
var markers = [];

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 41.7151, lng: 44.8271 }, // Tbilisi coordinates
        zoom: 12
    });
}

function markPlaces() {
    removeMarkers(); // Remove existing markers before adding new ones

    var places = [
        { lat: 41.7276077, lng: 44.7029722, name: "Portal" },
        { lat: 41.76758, lng: 44.7312561, name: "Socar" },
        { lat: 41.7237059, lng: 44.7012154, name: "Conect" },
        { lat: 41.7124336, lng: 44.7514708, name: "Wissol" },
        { lat: 41.7202904, lng: 44.7602986, name: "Gulf" },
        { lat: 41.7292206, lng: 44.7716807, name: "Lukoil" },
        { lat: 41.7269433, lng: 44.7644996, name: "Rompetrol" },
        { lat: 41.7269824, lng: 44.7567877, name: "Gulf" },
        { lat: 41.7119043, lng: 44.7524314, name: "Gazprom" },
        { lat: 41.722537, lng: 44.7693787, name: "Wissol" },
        { lat: 41.7503727, lng: 44.7870948, name: "Socar" },
        { lat: 41.7496126, lng: 44.7879826, name: "Lukoil" },
        { lat: 41.7370784, lng: 44.7589745, name: "Gulf" },
        { lat: 41.736848, lng: 44.7592245, name: "Gulf" },
        { lat: 41.7393143, lng: 44.7938816, name: "Gazprom" },
        { lat: 41.7296567, lng: 44.7805881, name: "Rompetrol" },
        { lat: 41.7217594, lng: 44.7652413, name: "Wissol" },
        { lat: 41.7236611, lng: 44.7608594, name: "Socar" },
        { lat: 41.7195469, lng: 44.7697645, name: "Lukoil" },
        { lat: 41.7321536, lng: 44.7943696, name: "Rompetrol" },
        { lat: 41.732348, lng: 44.7532375, name: "Wissol" },
        { lat: 41.7178609, lng: 44.7744684, name: "Gulf" },
        { lat: 41.7280416, lng: 44.7514822, name: "Gazprom" },
        { lat: 41.7250275, lng: 44.7322799, name: "Socar" },
        { lat: 41.7272199, lng: 44.7510986, name: "Lukoil" },
        { lat: 41.7319795, lng: 44.7267009, name: "Rompetrol" },
        { lat: 41.7340905, lng: 44.7714047, name: "Wissol" },
        { lat: 41.7237751, lng: 44.7708353, name: "Gulf" },
        { lat: 41.7362957, lng: 44.7478416, name: "Gazprom" }
    ];
    
    for (var i = 0; i < places.length; i++) {
        var place = places[i];
        var marker = new google.maps.Marker({
            position: { lat: place.lat, lng: place.lng },
            map: map,
            title: place.name
        });
        markers.push(marker); // Store the marker in an array
    }
}

function removeMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null); // Remove marker from map
    }
    markers = []; // Clear the markers array
}