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