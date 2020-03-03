// news  
let heightTitleNew = $('.entry__wrap .news:first').find('.news__title').outerHeight();
let heightPreviewNew = $('.entry__wrap .news:first').find('.news__preview').outerHeight();

let total = heightTitleNew + heightPreviewNew;
$('.entry__wrap .news:first').find('.category').css('bottom', total + 39);
// $('.entry .news__desc:not(:first)').remove();

// news end



$('.overlay h2').each(function () {
  var title = $(this).text();
  $(this).append('<span class="title__overlay">' + title + '</span>');
});

$('.search-js').on('clikc', function () {

});


    var map;

    DG.then(function () {
        map = DG.map('map', {
            center: [42.879821, 74.585932],
            zoom: 55
        });
        var myIcon = DG.icon({
          iconUrl: '../../assets/img/contacts/marker.svg',
          iconRetinaUrl: '../../assets/img/contacts/marker.svg',
          iconSize: [38, 95],
          iconAnchor: [22, 94],
          popupAnchor: [-3, -76],
          shadowUrl: '',
          shadowRetinaUrl: '',
          shadowSize: [68, 95],
          shadowAnchor: [22, 94]
      })
        DG.marker([42.879821, 74.585932], {icon: myIcon}).addTo(map);
    });

