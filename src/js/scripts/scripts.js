// news  
let heightTitleNew = $('.entry__wrap .news:first').find('.news__title').outerHeight();
let heightPreviewNew = $('.entry__wrap .news:first').find('.news__preview').outerHeight();

let total = heightTitleNew + heightPreviewNew;
console.log(heightTitleNew);
console.log(heightPreviewNew);
$('.entry__wrap .news:first').find('.category').css('bottom', total + 39);
// $('.entry .news__desc:not(:first)').remove();

// news end



$('.overlay h2').each(function () {
  var title = $(this).text();
  $(this).append('<span class="title__overlay">' + title + '</span>');
});
