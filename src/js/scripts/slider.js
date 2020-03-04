 var swiper = new Swiper('.production-js', {
   slidesPerView: 6,
   //  slidesPerGroup: 6,
   spaceBetween: 30,
   loop: true,
   loopFillGroupWithBlank: true,
   autoplay: {
     delay: 3500,
     disableOnInteraction: false,
   },
   navigation: {
     nextEl: '.next',
     prevEl: '.prev',
   }
 });

 var swiper = new Swiper('.team-js', {
  slidesPerView: 4,
  spaceBetween: 30,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  }
});


 var swiper = new Swiper('.video-js', {
   effect: 'coverflow',
   centeredSlides: true,
   loop: true,
   loopFillGroupWithBlank: true,
   slidesPerView: 3,
   spaceBetween: 30,
   autoplay: {
     delay: 3500,
     disableOnInteraction: false,
   },
   coverflowEffect: {
     rotate: 30,
     stretch: 0,
     depth: 200,
     modifier: 1,
     slideShadows: true,
   },
   navigation: {
     nextEl: '.next',
     prevEl: '.prev',
   }
 });