
mapboxgl.accessToken = 'pk.eyJ1IjoicmFzYWd5IiwiYSI6Ilk2ay1VMEEifQ.CJfn_CxDfwyN5xaVfx4jaw';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/rasagy/cj1op1mhe00662slp2etevtb6',
    hash:true
});

map.on('load', function() {

    hideHoverDetails();

    map.setFilter("memory-icons", ["==", "id", "p1"]);

    map.setLayoutProperty('fog-hover', 'visibility', 'visible');
    map.setLayoutProperty('memory-icons', 'visibility', 'visible');

    map.on("mousemove", "fog-area", function(e) {
        var i=e.features[0].properties.id;
        map.setFilter("fog-hover", ["==", "id", i]);
        map.setFilter("memory-icons", ["==", "id", i]);


        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = 'pointer';
    });

    // Reset the layer's filter when the mouse leaves the layer.
    map.on("mouseleave", "fog-area", function() {
        hideHoverDetails();
    });

});

function hideHoverDetails() {
    map.setFilter("fog-hover", ["==", "id", ""]);
    map.setFilter("memory-icons", ["==", "id", ""]);
    map.getCanvas().style.cursor = '';
}