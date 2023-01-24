/*====== SHOW MENU ======*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

/* SHOW MENU */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/* HIDE MENU */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}
/*====== CLOSE MENU ======*/

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  // when we click on each nav__link, we remove the show menu class to close the mobile menu
  navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

/* Change Header Background */
function scrollHeader() {
  const header = document.getElementById('header');

  // when scroll is greater than 100vh, add the scroll-header class
  if (this.scrollY >= 100) header.classList.add('scroll-header');
  else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/* Swiper */
var swiper = new Swiper('.mySwiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 0,
  loop: 'true',
  coverflowEffect: {
    rotate: 5,
    // stretch: 0,
    // depth: 100,
    // modifier: 1,
    // slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

/* VIDEO */
const videoFile = document.getElementById('video-file'),
  videoButton = document.getElementById('video-button'),
  videoIcon = document.getElementById('video-icon');

function playPause() {
  if (videoFile.paused) {
    // play video
    videoFile.play();
    // change icon based on video playing
    videoIcon.classList.add('ri-pause-line');
    videoIcon.classList.remove('ri-play-line');
  } else {
    // pause video
    videoFile.pause();
    // change icon
    videoIcon.classList.remove('ri-pause-line');
    videoIcon.classList.add('ri-play-line');
  }
}

videoButton.addEventListener('click', playPause);

function finalVideo() {
  // video ends, change icon
  videoIcon.classList.remove('ri-pause-line');
  videoIcon.classList.add('ri-play-line');
}

// when video ends
videoFile.addEventListener('ended', finalVideo);

/* Show Scoll Up */
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  // when the scroll is higher than 200vh add the show scroll class to the a tag with the scoll-up class
  if (this.scrollY >= 200) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);
