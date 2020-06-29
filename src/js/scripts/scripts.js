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
  $(this).addClass('trigger-search');
  $('.search-form__trigger').addClass('border');
});

$('.search-form__input').on('click', function () {
  $('.search-js').addClass('trigger-search');
  $('.search-form__trigger').addClass('border');
});

$(document).mouseup(function (e) {
  var div = $(".search-js");
  if (!div.is(e.target) &&
    div.has(e.target).length === 0) {
    div.removeClass('trigger-search');
    $('.search-form__trigger').removeClass('border');
  }
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
  var div = $(".select");
  if (!div.is(e.target) &&
    div.has(e.target).length === 0) {
    $('.select__dropdown').slideUp();
  }
});
// filter select dropdown end

// popup
$('.popup-wrap').on('click', function () {
  $(this).hide();
});
// popup end


// orozo calendar 
$(".calendar__city").on("click", function () {
  $(".calendar__city").removeClass("city__active");
  $(this).addClass("city__active");
});
// end orozo calendar

//batken

$("#batken").on("click", function () {
  $(".calendar__calendar").removeClass("calendar__active");
  $("#batkenCalendar").addClass("calendar__active");
});


$("#bishkek").on("click", function () {
  $(".calendar__calendar").removeClass("calendar__active");
  $("#bishkekCalendar").addClass("calendar__active");
});


$("#jalalabad").on("click", function () {
  $(".calendar__calendar").removeClass("calendar__active");
  $("#abadCalendar").addClass("calendar__active");
});


$("#karakol").on("click", function () {
  $(".calendar__calendar").removeClass("calendar__active");
  $("#karakolCalendar").addClass("calendar__active");
});


$("#naryn").on("click", function () {
  $(".calendar__calendar").removeClass("calendar__active");
  $("#narynCalendar").addClass("calendar__active");
});


$("#talas").on("click", function () {
  $(".calendar__calendar").removeClass("calendar__active");
  $("#talasCalendar").addClass("calendar__active");
});


$("#tokmok").on("click", function () {
  $(".calendar__calendar").removeClass("calendar__active");
  $("#tokmokCalendar").addClass("calendar__active");
});


$("#osh").on("click", function () {
  $(".calendar__calendar").removeClass("calendar__active");
  $("#oshCalendar").addClass("calendar__active");
});





