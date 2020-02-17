// news  
let heightTitleNew = $('.entry__wrap .news:first').find('.news__title').height();
// news end
let heightPreviewNew = $('.entry__wrap .news:first').find('.news__preview').height();

let total = heightTitleNew + heightPreviewNew;

$('.entry__wrap .news:first').find('.category').css('bottom', total + 39);
$('.entry .news__desc:not(:first)').remove();




$('.overlay h2').each(function () {
  var title = $(this).text();
  $(this).append('<span class="title__overlay">' + title + '</span>');
});