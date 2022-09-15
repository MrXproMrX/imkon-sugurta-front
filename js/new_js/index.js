const photoGallerySwiperThumbnail = new Swiper(
  '.photo-gallery-swiper--thumbnail',
  {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction: 'horizontal',
    breakpoints: {
      992: {
        direction: 'vertical',
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  }
)

const swiper = new Swiper('.photo-gallery-swiper--main', {
  spaceBetween: 10,
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
  },

  thumbs: {
    swiper: photoGallerySwiperThumbnail,
  },
})



// =======-------------------------------------------------------------=======

$(document).ready(function(){
$(function() {
  $('.Flugger_map__top__item__Accordion li').click(function(){
    $(this).toggleClass(' active ');
    $(this).siblings().removeClass(' active '); 
    $('.Flugger_map__top__item__Accordion__internally').stop().slideUp();
    $('.active .Flugger_map__top__item__Accordion__internally').stop().slideDown();
    return false;
  });
});
});


// =======------------------------------=======------------------------=======

$(document).ready(function(){
$('.Flugger_map__top__item__Accordion__internally__link').click(function(){
  $('.Flugger_map__item__cart').fadeTo(500,1);
  $('.Flugger_map__item__cart').css('z-index','0');
})
});

// =======------------------------------=======------------------------=======

$(document).ready(function(){
var selector = '.Flugger_map__top__item__Accordion__internally__link';
$(selector).on('click', function(){
$(selector).removeClass('active');
$(this).addClass('active');
});
});

// =======------------------------------=======------------------------=======

$('.Flugger_map__slaeder').slick({
slidesToShow: 1,
slidesToScroll: 1,
arrows: false,
fade: true,
});

// =======------------------------------=======------------------------=======

$('a[data-slide]').click(function(e) {
e.preventDefault();
var slideno = $(this).data('slide');
$('.Flugger_map__slaeder').slick('slickGoTo', slideno - 1);
});

// =======------------------------------=======------------------------=======