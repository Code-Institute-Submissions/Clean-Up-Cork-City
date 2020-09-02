
    function addInfoWindow(marker, message) {
        var infoWindow = new google.maps.InfoWindow({
            content: message
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(map, marker);
        });
    }
    function initMap() {
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 12,
            center: {
                lat: 51.903614,
                lng: -8.468399
            }
         });
        
            var itemsLocations = document.querySelectorAll(".itemsLocations");
            for (var i = 0; i < itemsLocations.length; i++) {
                    var marker = new google.maps.Marker({
                    position: {lat: parseFloat(this.document.getElementsByClassName('lat')[i].innerHTML), lng : parseFloat(this.document.getElementsByClassName('long')[i].innerHTML)},
                    map: map,
            });
                    addInfoWindow(marker, this.document.getElementsByClassName('address')[i].innerHTML);
            };
            var defaultBounds = new google.maps.LatLngBounds(
                new google.maps.LatLng(51.8722517,-8.53925228),
                new google.maps.LatLng(51.91886165,-8.42110634))
            var options = {
                bounds:defaultBounds
            };
            var input = document.getElementById('addressForm')[0];
            var autocomplete = new google.maps.places.Autocomplete(input, options)
            var autocomplete = new google.maps.places.Autocomplete(input,{types: ['address']});
        }
       
       
     

      

