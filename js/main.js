function pic() {
  const bgm = ['https://raw.githubusercontent.com/RomanVinichenko/smidige/master/app/images/top.jpg', 'https://raw.githubusercontent.com/RomanVinichenko/smidige/master/app/images/top2.jpg'];

  $('.top').css({
    'background-image': 'url(' + bgm[Math.floor(Math.random() * bgm.length)] + ')',
  });
}

pic();

$(function () {
  $('.link__service, .section__link, .article__element, .expert__button, .footer__network')
    .on('mouseenter', function (e) {
      let parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find('span').css({top: relY, left: relX})
    })
    .on('mouseout', function (e) {
      let parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find('span').css({top: relY, left: relX})
    });
  $('[href="#"]').click(function () {
    return false
  });
});

// HEADER ACTIVE

let header = document.querySelector(".header");

window.addEventListener('scroll', function () {
  let scrollPos = window.scrollY;

  if (header && scrollPos > 10) {
    header.classList.add("header--active");
  } else {
    header.classList.remove("header--active");
  }
});

$(document).ready(function () {
  let scrollPos = window.scrollY;

  if (header && scrollPos > 10) {
    header.classList.add("header--active");

  } else {
    header.classList.remove("header--active");
  }
});

let swiperStudies = new Swiper('.swiper__studies', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 12,
  breakpoints: {
    1400: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    850: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    580: {
      slidesPerView: 2,
      spaceBetween: 24,
    }
  }
});

let swiperScope = new Swiper('.swiper__scope', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 12,
  breakpoints: {
    1400: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    695: {
      slidesPerView: 2,
      spaceBetween: 24,
    }
  }
});

const burger = document.querySelector('.menu__burger');
const menuMobile = document.querySelector('.menu-mobile');
if (burger) {
  burger.addEventListener('click', function () {
    burger.classList.toggle('menu__burger--active');
    menuMobile.classList.toggle('menu-mobile--active');
  });
}
