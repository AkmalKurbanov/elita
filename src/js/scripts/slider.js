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
   },
   breakpoints: {
     320: {
       slidesPerView: 2,
       spaceBetween: 10,
     },
     576: {
       slidesPerView: 3,
       spaceBetween: 10,
     },
     768: {
       slidesPerView: 4,
       spaceBetween: 20,
     },
     1024: {
       slidesPerView: 5,
       spaceBetween: 30,
     },
     1200: {
       slidesPerView: 6,
       spaceBetween: 30,
     },
   }
 });

 var swiper = new Swiper('.team-js', {
   slidesPerView: 1,
   spaceBetween: 30,
   loopFillGroupWithBlank: true,
   loop: true,
   autoplay: {
     delay: 4500,
     disableOnInteraction: false,
   },
   breakpoints: {
     576: {
       slidesPerView: 2
     },
     992: {
       slidesPerView: 3
     },
     1200: {
       slidesPerView: 4
     }

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
   },
   breakpoints: {
     320: {
       slidesPerView: 2,
       spaceBetween: 10,
     },
     768: {
       slidesPerView: 3,
       spaceBetween: 20,
     }
   }
 });

 var swiper = new Swiper('.news-detail-js', {
   loop: true,
   loopFillGroupWithBlank: true,
   slidesPerView: 1,
   autoplay: {
     delay: 3500,
     disableOnInteraction: false,
   },
   navigation: {
     nextEl: '.next',
     prevEl: '.prev',
   }
 });