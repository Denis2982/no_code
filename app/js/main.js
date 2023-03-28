$(function () {

    $('.nav__burger').on('click', function() {
      $('.nav').toggleClass('nav--open');
      $('.nav__burger').toggleClass('nav__burger--open');
    });    

})


new Swiper('.swiper__students',{
  grabCursor: true,

  slidesPerView: 2.5,

  spaceBetween: 20,

  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  speed: 1500,

  // effect: 'coverflow',
  // coverflowEffect: {
  //   rotate: 20,
  //   stretch: 10,
  //   slideShadows: true,
  // },

});

//Accordion

const faqs = document.querySelectorAll('.faq__accordian-card');

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('active');
  })
})

