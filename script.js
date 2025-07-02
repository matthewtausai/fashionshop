const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
//checking and opening the navbar
if (bar){
  bar.addEventListener('click', () => {
nav.classList.add('active');

  });
}
//checking and closing the navbar
if (close){
  close.addEventListener('click', () => {
nav.classList.remove('active');

  });
}

// The Swiper library is now available globally from the CDN link.
// No import is needed.

const swiper = new Swiper('.swiper', {
  // Optional parameters

  // 1. CORRECTED: Removed `direction: 'vertical'`. Default is 'horizontal'.
  loop: true,
  grabCursor: true,
  spaceBetween: 30, // Adjust space between slides

   // --- ADD THIS BLOCK FOR AUTOPLAY ---
  autoplay: {
    delay: 3000, // Time in ms (3 seconds)
    disableOnInteraction: false, // Autoplay will not be disabled after user interactions
    pauseOnMouseEnter: true, // Pauses autoplay on mouse hover
  },
  // 

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // 2. CORRECTED: Renamed 'slidePerView' to 'slidesPerView'
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 0px
    0: {
      slidesPerView: 1
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3
    }
  }
});

//add event listener

document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', event=> {
    //prevent default link behaviour
    event.preventDefault();

    //add loading animation
    const loadingElement = document.createElement('div');
    loadingElement.classList.add('loading');
    const loadingAnimation = document.createElement('div');
    loadingAnimation.classList.add('loading-animation');
    loadingAnimation.innerHTML = svggnbasding;
    loadingElement.appendChild(loadingAnimation);
    document.body.appendChild(loadingElement);

    //waiting for animation to finish before loading a new page
    setTimeout(() => {
      window.location.href = link.href;
    }, 1000);
    })
});