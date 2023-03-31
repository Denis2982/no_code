$(function () {

    $('.nav__burger').on('click', function() {
      $('.nav').toggleClass('nav--open');
      $('.nav__burger').toggleClass('nav__burger--open');
    });    

})

//Swiper

new Swiper('.swiper__students',{
  grabCursor: true,

  slidesPerView: 2.5,

  spaceBetween: 20,

  loop: true,

  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  //   pauseOnMouseEnter: true,
  // },

  speed: 1500,

  breakpoints: {
    320: {
      slidesPerView: 1.5,
    },
    992: {
      slidesPerView: 2.5,
    },
  }
});

//Accordion FAQ

const faqs = document.querySelectorAll('.faq__accordian-card');

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('active');
  })
})

//Accordion footer

const foot = document.querySelectorAll('.footer__accordian-card');

foot.forEach(ft => {
  ft.addEventListener('click', () => {
    ft.classList.toggle('active');
  })
})

//Animation
AOS.init({  
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function  
});