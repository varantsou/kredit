'use strict'

$(document).ready(function(){
    function initialize() {     
      var myLatlng = new google.maps.LatLng(53.90306269, 27.54612585);
      var myOptions = {
        zoom: 15,
        center: myLatlng,
        styles: mapStyle,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  
      var marker = new google.maps.Marker({
          position: {lat: 53.9029742, lng: 27.5549986},
          map: map,
          title: 'Legalizuem.ru',
          icon: {
              url: "http://bitrix.imediasolutions.ru/kredit/img/icon/marker-map.png",
              scaledSize: new google.maps.Size(52, 72)
          }
      });
    }

    if($('#map_canvas').length){
        initialize();
    }
})

var mapStyle = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#333333"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dedede"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f2f2f2"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e9e9e9"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#edf0f4"
            }
        ]
    }
  ];

$(document).ready(function() {
    $('.js-select').select2({
        minimumResultsForSearch: -1 
    });

    $(".js-select-small").select2({
        theme: "selSmall",
        minimumResultsForSearch: -1 
    });


});

$(document).ready(function(){
    if ($(".top-slider").length){
        $(".top-slider").slick({
            dots: false,
            infinite: true,
            arrows: true,
            autoplay: false,
            slidesToShow: 1,
        });
    }
    if ($(".client-slider").length){
        $(".client-slider").slick({
            dots: false,
            infinite: true,
            arrows: true,
            autoplay: false,
            slidesToShow: 5,
            responsive: [
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 3,
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 2,
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 1,
                  }
                }
            ]    
        });
    }

    if ($(".partner-slider").length){
        $(".partner-slider").slick({
            dots: false,
            infinite: true,
            arrows: true,
            autoplay: false,
            slidesToShow: 4,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                      slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                      slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                      slidesToShow: 1,
                    }
                }
            ]
        });
    }
    
    if ($(".works-slider").length){
        $(".works-slider").slick({
            dots: true,
            infinite: true,
            arrows: false,
            autoplay: false,
            slidesToShow: 1
        });

        $(".works-slider").on('afterChange', function(event, slick, currentSlide, nextSlide){

            // var activeSlider = $('');

            // console.log(event);
            // console.log(slick);
            // console.log(currentSlide);
            // console.log(nextSlide);

            activeControl(currentSlide);
 
        });

        $(document).ready(function(){
            $('body').on('click', '.slick-dots li button', function(){
                var activeSlider = +$(this).html() - 1;
                activeControl(activeSlider);
            });
        });
    }
});

function activeControl(number){

    var addWidth = 25;

    if ($(window).width() < 1200 && $(window).width() > 991){
        addWidth = 20;
    }

    if ($(window).width() < 992 && $(window).width() > 767){
        addWidth = 15;
    }

    var wid = $('.slider-control').width()/7 + addWidth;

    $('.line').css('width', wid * number)

    $('.control').removeClass('isActive');
    for (var i = 0; i <= number; i++){
        var dot = document.querySelectorAll('.control')[i];
        dot.classList.add('isActive');
    }
}

function fixHeader(){
 var documentTopOffset = $(window).scrollTop();

  if (documentTopOffset > 1){
       $('body').addClass('scrollPage');
  }    else {
       $('body').removeClass('scrollPage');
  }
}

$(window).on('scroll', function(){
  fixHeader();
});

$(document).ready(function(){
  fixHeader();
});

$('body').on('click', '.search-icon', function(){
    $('.input-group').toggleClass('isOpen')
});

$('body').on('click', '.mm-menu', function(){
    $('body').toggleClass('menuIsOpen')
});




$( function() {
    if($('#datepicker').length){
        $( "#datepicker" ).datepicker();
    }
    if($('#datepicker2').length){
        $( "#datepicker2" ).datepicker();
    }
    if($('#datepicker3').length){
        $( "#datepicker3" ).datepicker();
    }
    if($('#datepicker4').length){
        $( "#datepicker4" ).datepicker();
    }
    if($('#datepicker5').length){
        $( "#datepicker5" ).datepicker();
    }
    if($('#datepicker6').length){
        $( "#datepicker6" ).datepicker();
    }
});

$(document).ready(function(){
    if($(".table-wrapper").length){
        $(".table-wrapper").niceScroll();
    }    
    if($(".simple-table-wrapper").length){
        $(".simple-table-wrapper").niceScroll();
    }    
});