$(document).ready(function () {
  $(".menu").mmenu({
    "navbar": {
      "title": '<img src="../../assets/img/logo-white.png">'
    },
    "extensions": [
      "pagedim-black",
      "position-right",
      "theme-dark"
    ],
    "counters": true,
    "iconbar": {
      "use": true,
      "top": [
        "<a href='/'><i class='fal fa-home'></i></a>"
      ],
      "bottom": [
        "<a href='mailto:office@elitaplus.kg'><i class='fal fa-envelope'></i></a>",
        "<a href='tel:+996555555555'><i class='fal fa-mobile'></i></a>",
        "<a href='tel:++996777777777'><i class='fal fa-mobile'></i></a>",
        "<a href='#'><i class='far fa-map-marker-alt'></i></a>",
      ]
    },
    "navbars": [{
        "position": "bottom",
        "content": [
          "<a href='#' trarget='_blank'><i class='fab fa-facebook-f''></i></a>",
          "<a href='#' trarget='_blank'><i class='fab fa-instagram'></i></a>",
          "<a href='#' trarget='_blank'><i class='fab fa-twitter'></i></a>",
          "<a href='#' trarget='_blank'><i class='fab fa-youtube'></i></a>",
          "<a href='#' trarget='_blank'><i class='fab fa-whatsapp'></i></a>",
          "<a href='#' trarget='_blank'><i class='fab fa-telegram-plane'></i></a>"
        ]
      },
      {
        "position": "top",
        "content": [
          "searchfield"
        ],
        "searchfield": {
          "showSubPanels": false
        }
      }
    ],
  });
  var API = $('.menu').data("mmenu"),
    $icon = $(".hamburger");
  $icon.click(function () {
    API.open();
  });
  API.bind("open:finish", function () {
    $icon.addClass("hamburger--open");
  });
  API.bind("close:finish", function () {
    setTimeout(function () {
      $icon.removeClass("hamburger--open");
    }, 100);
  });

});