//const bgm = ['https://raw.githubusercontent.com/RomanVinichenko/smidige/master/app/images/top.jpg', 'https://raw.githubusercontent.com/RomanVinichenko/smidige/master/app/images/top2.jpg'];
const bgm = [];
//const bgmWhite = ['https://raw.githubusercontent.com/RomanVinichenko/smidige/master/app/images/top-white.jpg', 'https://raw.githubusercontent.com/RomanVinichenko/smidige/master/app/images/top-white1.jpg'];
const bgmWhite = [];

const body = document.body
const theme = document.querySelector('.theme-toggle');
const themeMob = document.querySelector('.theme-mob');

if (theme) {
  theme.addEventListener('click', function () {
    setTimeout(function () {
      if(localStorage.getItem('theme-color') == 'black'){
        localStorage.setItem('theme-color', 'light');
      }else{
        localStorage.setItem('theme-color', 'black');
      }
      let myStr = localStorage.getItem('theme-color');
      if(myStr == 'light'){
        $('#top-section').css({
          'background-image': 'url(' + bgmWhite[Math.floor(Math.random() * bgmWhite.length)] + ')',
        });
        localStorage.setItem('theme-color', 'light');
        body.classList.add('light');
        body.classList.remove('black');
        theme.classList.add('theme-toggle__active');
      } else {
        $('#top-section').css({
          'background-image': 'url(' + bgm[Math.floor(Math.random() * bgm.length)] + ')',
        });
        localStorage.setItem('theme-color', 'black');
        body.classList.remove('light');
        body.classList.add('black');
        theme.classList.remove('theme-toggle__active');
      }
    }, 50);
  });
}

if (themeMob) {
  themeMob.addEventListener('click', function () {
    setTimeout(function () {
      if(localStorage.getItem('theme-color') == 'black'){
        localStorage.setItem('theme-color', 'light');
      }else{
        localStorage.setItem('theme-color', 'black');
      }
      let myStr = localStorage.getItem('theme-color');
      if(myStr == 'light'){
        $('#top-section').css({
          'background-image': 'url(' + bgmWhite[Math.floor(Math.random() * bgmWhite.length)] + ')',
        });
        localStorage.setItem('theme-color', 'light');
        body.classList.add('light');
        body.classList.remove('black');
        themeMob.classList.add('theme-toggle__active');
      } else {
        $('#top-section').css({
          'background-image': 'url(' + bgm[Math.floor(Math.random() * bgm.length)] + ')',
        });
        localStorage.setItem('theme-color', 'black');
        body.classList.remove('light');
        body.classList.add('black');
        themeMob.classList.remove('theme-toggle__active');
      }
    }, 50);
  });
}

$(function () {
  $('.link__service, .slime, .article__element, .expert__button, .footer__network')
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
    return false;
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
  AddingArraySrcImgHomeTop();
  let scrollPos = window.scrollY;
  let footerStart = document.querySelector('.footer')
  footerStart.style.opacity = '1';
  let myStr = localStorage.getItem('theme-color');
  if (myStr == 'light') {
    body.classList.add('light');
    body.classList.remove('black');
    theme.classList.add('theme-toggle__active');
    themeMob.classList.add('theme-toggle__active');
    $('#top-section').css({
      'background-image': 'url(' + bgmWhite[Math.floor(Math.random() * bgmWhite.length)] + ')',
    });
  } else {
    body.classList.remove('light');
    body.classList.add('black');
    $('#top-section').css({
      'background-image': 'url(' + bgm[Math.floor(Math.random() * bgm.length)] + ')',
    })
    theme.classList.remove('theme-toggle__active');
    themeMob.classList.remove('theme-toggle__active');
  }
  if (header && scrollPos > 10) {
    header.classList.add("header--active");

  } else {
    header.classList.remove("header--active");
  }
});

function AddingArraySrcImgHomeTop(){
  var myCollection = document.getElementsByClassName('home-black-theme-link');
  for(let i=0; i<myCollection.length; i++){
    bgm.push(myCollection[i].innerHTML);
  }
  var myCollection = document.getElementsByClassName('home-white-theme-link');
  for(let i=0; i<myCollection.length; i++){
    bgmWhite.push(myCollection[i].innerHTML);
  }
}

let swiperStudies = new Swiper('.swiper__studies', {
  slidesPerView: 1,
  spaceBetween: 24,
  breakpoints: {
    790: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    547: {
      slidesPerView: 2,
      spaceBetween: 24,
    }
  }
});

let swiperScope = new Swiper('.swiper__scope', {
  slidesPerView: 1,
  spaceBetween: 24,
  breakpoints: {
    630: {
      slidesPerView: 2,
      spaceBetween: 24,
    }
  }
});

let swiperTrusted = new Swiper('.trusted__slider', {
  slidesPerView: 'auto',
  spaceBetween: -24,
  loop: true,
  disableOnInteraction: false,
  noSwiping: true,
  noSwipingClass: 'swiper-slide',
  speed: 6000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  }
});

const burger = document.querySelector('.menu__burger');
const menuMobile = document.querySelector('.menu-mobile');
if (burger) {
  burger.addEventListener('click', function () {
    burger.classList.toggle('menu__burger--active');
    menuMobile.classList.toggle('menu-mobile--active');
    document.querySelector('.header .logo').classList.toggle('sun')
    document.querySelector('.menu__burger').classList.toggle('menu__burger--sun')
  });
}

let elements = document.querySelectorAll('.job__wave');

elements.forEach(element => {
  let innerText = element.innerText;
  element.innerHTML = '';

  let textContainer = document.createElement('div');
  textContainer.classList.add('block');

  for (let letter of innerText) {
    let span = document.createElement('span');
    span.innerText = letter.trim() === '' ? '\xa0' : letter;
    span.classList.add('letter');
    textContainer.appendChild(span);
  }

  element.appendChild(textContainer);
  element.appendChild(textContainer.cloneNode(true));
});

function slidesItem(item, mainEl) {

  const containerWidth = mainEl.getBoundingClientRect().width
  const tl = gsap.timeline({
    paused: true,
    scrollTrigger: {
      trigger: item,
      scrub: 1,
      start: "top 95%",
      end: 'bottom 65%'
    }
  })

  tl.to(item, {
    width: `${containerWidth}px`,
    duration: 0.1,
    ease: 'none'
  })
}

gsap.registerPlugin(ScrollTrigger);
const ww = window.innerWidth
if (ww > 767) {
  const item_do_slider = document.querySelectorAll('.item_do_slider')
  if (item_do_slider.length > 0) {
    item_do_slider.forEach((el) => {
      const slide_items = el.querySelectorAll('.slide-item')
      slide_items.forEach((item) => {
        slidesItem(item, el)
      })


    })
  }
}

function firstScreen(element) {
  const wh = window.innerHeight
  const elH1 = element.querySelector('h1')
  const scrollHeight = wh * 0.20
  const tl = gsap.timeline({
    paused: true,
    scrollTrigger: {
      trigger: element,
      scrub: true,
      start: "top top",
      end: 'bottom +=40%'
    }
  })
  tl.to(element, {
    y: `${scrollHeight}px`,
    duration: 0.1,
    ease: 'none',
  })

  tl.to(elH1, {
    y: `${scrollHeight / 2}px`,
    duration: 0.1,
    ease: 'none',
  }, '-=0.1')
}

const homeTop = document.querySelector('.top')
if (homeTop) {
  if (document.documentElement.clientWidth > 750) {
    setTimeout(() => {
      firstScreen(homeTop);
    }, 500);
  }
}

function previewScreen(element) {
  const elHeight = element.getBoundingClientRect().height
  const elH1 = element.querySelector('.preview__inner')
  const scrollHeight = elHeight * 0.35
  const tl = gsap.timeline({
    paused: true,
    scrollTrigger: {
      trigger: element,
      scrub: true,
      start: "top top",
      end: `bottom +=${elHeight / 2}px`
    }
  })
  tl.to(element, {
    y: `${scrollHeight}px`,
    duration: 0.1,
    ease: 'none',
  })

  tl.to(elH1, {
    y: `${scrollHeight / 2}px`,
    duration: 0.1,
    ease: 'none',
  }, '-=0.1')
}

const preview = document.querySelector('.preview')

if (preview) {
  let myStr = location.protocol + "//" + location.hostname + '/contact/';
  if (myStr != window.location.href) {

    if (document.documentElement.clientWidth > 750) {
      setTimeout(() => {
        previewScreen(preview)
      }, 900)
    }
  }
}

function touchAnimation() {
  const element = document.querySelector('.touch');
  const headerHeight = document.querySelector('.header').getBoundingClientRect().height
  const a1 = element.querySelector('.anim-1')
  const a2 = element.querySelector('.anim-2')
  const a3 = element.querySelector('.anim-3')
  const a4 = element.querySelector('.anim-4')
  const tl = gsap.timeline({
    paused: true,
    scrollTrigger: {
      trigger: element,
      scrub: true,
      pin: true,
      start: `top ${headerHeight}px`,
      end: `75% top`
    }
  })
  tl.from(a1, {
    y: `40px`,
    opacity: 0,
    duration: 0.3,
    ease: 'none',
  })
  tl.from(a2, {
    y: `40px`,
    opacity: 0,
    duration: 0.3,
    ease: 'none',
  }, '-=0.2')
  tl.from(a3, {
    y: `40px`,
    opacity: 0,
    duration: 0.3,
    ease: 'none',
  }, '-=0.2')
  tl.from(a4, {
    y: `40px`,
    opacity: 0,
    duration: 0.3,
    ease: 'none',
  }, '-=0.2')
}

function footerAnimation() {
  let footer = document.querySelector('.footer');
  let ww = window.innerHeight
  let footerHeight = footer.getBoundingClientRect().height
  let footerStart = ww - footerHeight
  let footerTL = gsap.timeline({
    paused: true,
    scrollTrigger: {
      trigger: footer,
      scrub: true,
      start: `top +=${footerStart}px`,
      end: `bottom +=${footerStart}px`
    }
  })
  footerTL.to(footer, {
    y: 0,
    duration: 0.3,
    ease: 'none',
  })
}

if (document.documentElement.clientWidth > 750) {
  let myCollection = document.getElementsByClassName('touch');
  if (myCollection.length > 0) {
    // touchAnimation();
    // footerAnimation();
  }
}

document.querySelectorAll('.preview__link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.querySelectorAll('.slime-btn').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function calcFooterHeight() {
  const footerAnim = document.querySelector('.footer').scrollHeight;
  const footerPusher = document.querySelector('.footer__pusher');

  footerPusher.style.minHeight = footerAnim + 'px';
}

window.addEventListener('DOMContentLoaded', calcFooterHeight);
window.addEventListener('resize', calcFooterHeight);