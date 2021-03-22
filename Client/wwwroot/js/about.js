$(document).ready(function () {
    $("#content-slider").lightSlider({
        loop: true,
        keyPress: true
    });
    $('#image-gallery').lightSlider({
        gallery: true,
        item: 1,
        thumbItem: 9,
        pause: 3000,
        slideMargin: 0,
        speed: 1000,
        auto: true,
        loop: true,
        onSliderLoad: function () {
            $('#image-gallery').removeClass('cS-hidden');
        }
    });
});

function includeCss() {
    var element = document.createElement("link");
    element.setAttribute("rel", "stylesheet");
    element.setAttribute("type", "text/css");
    element.setAttribute("href", "css/bootstrap3.34.min.css");//location of the css that we want     include for the page
    document.getElementsByTagName("head")[0].appendChild(element);
}