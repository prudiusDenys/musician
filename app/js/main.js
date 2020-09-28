$(function () {

  $('.header__menu-burger').on('click', function () {
    $('.header__list').slideToggle();
  });

  $('.header__menu-burger').click(function () {
    $('.header__menu-burger, .header__list').toggleClass('active');
    $('html, body').toggleClass('lock');
  });

  $('.slider__main').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  $('.history__slider').slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    centerMode: true,
    initialSlide: 2,
    responsive: [{
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      }
    ]

  });
});