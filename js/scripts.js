var map;
var ybfLoc = new google.maps.LatLng(-37.818738,144.957118);

function initialize() {

  // styling the map
  var styles = [
    {
      stylers: [
        { lightness: 40 },
      ]
    },
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [
        { visibility: 'off' }
      ]
    }
  ];

  // map options
  var mapOptions = {
    zoom: 16,
    minZoom: 14,
    center: ybfLoc,
    disableDefaultUI: true,
    zoomControl: true,
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: styles,
  };

  // create map
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // create marker
  var marker = new google.maps.Marker({
      position: ybfLoc,
      map: map,
      title: 'York Butter Factory'
  });

}

google.maps.event.addDomListener(window, 'load', initialize);

$('body').scrollspy({ target: '.unihack-nav', offset: 65 })

var compPos = $("#competition").position();
$(window).resize(function(){
  compPos = $("#competition").position();
});

var offset = 60;

$('.navbar-default ul li a').click(function(event) {
    event.preventDefault();
    var target = this.hash;
    $target = $(target);
    $("html, body").stop().animate({
      'scrollTop': $target.offset().top - offset
    }, 900, 'swing');
});

$(".closepanel").click(function() {
  var parent = "#" + $(this).parent().parent().attr("id");
  $(parent).collapse('hide');
  $("a[data-target=" + parent + "]").addClass('collapsed');
});
