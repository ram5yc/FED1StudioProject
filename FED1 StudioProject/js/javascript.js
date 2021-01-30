
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

});
