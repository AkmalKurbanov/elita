// news  
let heightTitleNew = $('.entry__wrap .news:first').find('.news__title').height();
// news end
let heightPreviewNew = $('.entry__wrap .news:first').find('.news__preview').height();

let total = heightTitleNew + heightPreviewNew;

$('.entry__wrap .news:first').find('.category').css('bottom', total + 27);