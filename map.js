function initMap() {
    var styleArray = [
    {
        featureType: "all",
        stylers: [
        { saturation: -100 }
        ]
    },{
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
        { hue: "#00ffee" },
        { saturation: -100 }
        ]
    },{
        featureType: "poi.business",
        elementType: "labels",
        stylers: [
        { visibility: "off" }
        ]
    },{
        featureType: "water",
        elementType: 'geometry.fill',
        stylers: [
            { color: '#27b2b0' },
            { saturation: -50 }
        ]
    }
];
    
    var mapDiv = document.getElementById('googleMap');
    var map = new google.maps.Map(mapDiv, {
        center: {lat: 52.22968, lng: 21.01223},
        zoom: 11,
        styles: styleArray,
        scrollwheel: false,
        mapTypeControl: false
    });
}