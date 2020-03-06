// news  
let heightTitleNew = $('.entry__wrap .news:first').find('.news__title').outerHeight();
let heightPreviewNew = $('.entry__wrap .news:first').find('.news__preview').outerHeight();

let total = heightTitleNew + heightPreviewNew;
$('.entry__wrap .news:first').find('.category').css('bottom', total + 39);
// $('.entry .news__desc:not(:first)').remove();

// news end


// title
$('.overlay h2').each(function () {
  var title = $(this).text();
  $(this).append('<span class="title__overlay">' + title + '</span>');
});
// title end

// search
$('.search-js').on('click', function () {
  $(this).toggleClass('trigger-search');
  $('.search-form__trigger').toggleClass('border');
});
// search end


// phone mask
$(".phone-js").inputmask({
  "mask": "0 (999) 999-999"
});
// phone mask end 





// filter select dropdown
$('.select').on('click', function () {
  $(this).children('.select__dropdown').slideToggle();
});
$('.select__option').on('click', function () {
  let value = $(this).attr('data-value');
  $(this).parent().parent().find('.select-item').val(value);
  $(this).parent().parent().find('.select_checked').text(value);
});
$(document).mouseup(function (e) {
  var div = $(".select__dropdown");
  if (!div.is(e.target) &&
    div.has(e.target).length === 0) {
    div.slideUp();
  }
});
// filter select dropdown end