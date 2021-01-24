/*S
///<reference path="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"/>
$(".thumb").on("click", function () {
    //Find the src attribute of the img tag that was clicked and store that as a variable 
    var imgSrc = $(this).attr("src"); //src attribute is the photo contained in the var imgSrc variable

    //Pug an <img> into the #lightbox-content
    $("#lightbox-content").html('<img src="' + imgSrc + '" class="img-responsive"/>');

    //Make the lightbox visible by fading in
    $("#lightbox-container").fadeIn(500);

    //When the user clicks anywhere in the lightbox-container, fadeOut()
    $("#lightbox-container").on("click", function () {
        $(this).fadeOut(500);
    });

}); */

var map;

function initMap(){
//map options
map = new google.maps.Map(document.getElementById("map"), {
center:  {lat: 38.9667, lng: 94.6169},
zoom: 4
});


//add marker
const marker = new google.maps.Marker({
    position: {lat: 38.963570, lng: -94.607162},
    map: map,
});
}
