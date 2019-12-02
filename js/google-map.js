
var google;

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    // var myLatlng = new google.maps.LatLng(40.71751, -73.990922);
    //var myLatlng = new google.maps.LatLng(40.69847032728747, -73.9514422416687);
    //var myLatlng = new google.maps.LatLng(-34.5645677,-58.5036202);
    var myLatLang = {lat: -34.5645677, lng: -58.5036202};

    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
        center: myLatLang,
        zoom: 17
    });

    var marker = new google.maps.Marker({
        position: myLatLang,
        map:map,
        title: 'Malú Eventos'
    });

    var center;
    function calculateCenter() {
    center = map.getCenter();
    }
    google.maps.event.addDomListener(window, 'idle', function() {
        calculateCenter();
    });
    google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(center);
    });
    
}
google.maps.event.addDomListener(window, 'load', init);